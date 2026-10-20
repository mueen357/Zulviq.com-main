export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect www to apex domain
    if (url.hostname === "www.zulviq.com" || url.hostname.startsWith("www.")) {
      url.hostname = "zulviq.com";
      return Response.redirect(url.toString(), 301);
    }

    // Handle order notifications on Cloudflare Worker edge
    if (url.pathname === "/api/orders" && request.method === "POST") {
      try {
        const body = await request.json();
        const order = body.order;

        if (order) {
          const itemsList = (order.items || [])
            .map(
              (item) =>
                `<li>${item.product?.name || "Product"} (${item.bundle?.name || "Bundle"}) x${item.quantity || 1} - Rs. ${(
                  (item.bundle?.price || 0) * (item.quantity || 1)
                ).toLocaleString()}</li>`
            )
            .join("");

          const emailPayload = {
            personalizations: [
              {
                to: [{ email: "zulviqcare@gmail.com", name: "Zulviq Store" }],
              },
            ],
            from: {
              email: "orders@zulviq.com",
              name: "Zulviq Store Orders",
            },
            subject: `New Order #${order.id} - ${order.customer?.fullName} - Rs. ${(order.total || 0).toLocaleString()} (${
              order.paymentMethod === "bank_transfer" ? "Bank Transfer" : "COD"
            })`,
            content: [
              {
                type: "text/html",
                value: `
                  <div style="font-family: sans-serif; padding: 20px; color: #222; background: #faf8f5;">
                    <h2 style="color: #0f2415;">New Order Received: #${order.id}</h2>
                    <p><strong>Payment Method:</strong> ${
                      order.paymentMethod === "bank_transfer"
                        ? "Direct Bank Transfer (UBL: 0240316532325 - Muhammad Kaif)"
                        : "Cash on Delivery"
                    }</p>
                    <p><strong>Total Amount:</strong> Rs. ${(order.total || 0).toLocaleString()}</p>
                    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
                    <h3>Customer Details</h3>
                    <p><strong>Name:</strong> ${order.customer?.fullName}</p>
                    <p><strong>Phone / WhatsApp:</strong> ${order.customer?.phone}</p>
                    <p><strong>Email:</strong> ${order.customer?.email || "Not provided"}</p>
                    <p><strong>Delivery Address:</strong> ${order.customer?.address}, ${order.customer?.city} (${order.customer?.province})</p>
                    ${order.customer?.notes ? `<p><strong>Order Notes:</strong> ${order.customer?.notes}</p>` : ""}
                    <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
                    <h3>Ordered Items</h3>
                    <ul>${itemsList}</ul>
                    ${
                      body.proofBase64
                        ? `<hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
                           <h3>Payment Screenshot Attached:</h3>
                           <img src="${body.proofBase64}" alt="Payment Proof" style="max-width: 100%; max-height: 500px; border: 1px solid #cbd5e1; border-radius: 8px;" />`
                        : ""
                    }
                  </div>
                `,
              },
            ],
          };

          // Send via Mailchannels API (native and free for Cloudflare Workers)
          await fetch("https://api.mailchannels.net/tx/v1/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emailPayload),
          });
        }

        return new Response(JSON.stringify({ success: true, orderId: order?.id }), {
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        return new Response(
          JSON.stringify({ success: true, warning: err instanceof Error ? err.message : String(err) }),
          { headers: { "Content-Type": "application/json" } }
        );
      }
    }

    return env.ASSETS.fetch(request);
  },
};
