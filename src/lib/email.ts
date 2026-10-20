import nodemailer from "nodemailer";
import { Order } from "@/types";

export const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "zulviqcare@gmail.com";

export async function sendOrderNotificationEmail(order: Order, proofBase64?: string) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const isBankTransfer = order.paymentMethod === "bank_transfer";
  const paymentBadge = isBankTransfer ? "Direct Bank Transfer" : "Cash on Delivery (COD)";

  const itemsHtml = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;">
          <strong>${item.product.name}</strong><br/>
          <span style="color: #6b7280; font-size: 12px;">${item.bundle.name} &times; ${item.quantity}</span>
        </td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; text-align: right; font-weight: bold; color: #1e3a1f;">
          Rs. ${(item.bundle.price * item.quantity).toLocaleString("en-PK")}
        </td>
      </tr>
    `
    )
    .join("");

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Order #${order.id}</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9f6f0; margin: 0; padding: 24px; color: #222;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e7ded2; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="background-color: #0f2415; color: #ffffff; padding: 24px 28px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #d4af37; letter-spacing: 1px;">ZULVIQ</h1>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #cbd5e1;">The Root Reset Organic Hair Oil</p>
        </div>

        <!-- Order Summary Alert -->
        <div style="padding: 24px 28px; background: #faf8f5; border-bottom: 1px solid #e7ded2;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="background-color: ${isBankTransfer ? "#0284c7" : "#059669"}; color: #ffffff; font-size: 11px; font-weight: bold; padding: 4px 10px; rounded-radius: 6px; text-transform: uppercase;">
              ${paymentBadge}
            </span>
            <span style="font-size: 13px; color: #6b7280;">${new Date(order.createdAt).toLocaleString("en-PK", { timeZone: "Asia/Karachi" })}</span>
          </div>
          <h2 style="margin: 6px 0 0 0; font-size: 20px; color: #0f2415;">
            New Order Received: <span style="font-family: monospace; color: #92400e;">#${order.id}</span>
          </h2>
          <p style="margin: 6px 0 0 0; font-size: 14px; color: #4b5563;">
            Total: <strong style="font-size: 18px; color: #0f2415;">Rs. ${order.total.toLocaleString("en-PK")}</strong>
            ${isBankTransfer ? " (Payment screenshot submitted below)" : " (Cash on delivery)"}
          </p>
        </div>

        <!-- Customer & Delivery Details -->
        <div style="padding: 24px 28px; border-bottom: 1px solid #e5e7eb;">
          <h3 style="margin: 0 0 14px 0; font-size: 14px; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">Customer & Delivery Details</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #6b7280; width: 140px;">Customer Name:</td>
              <td style="padding: 6px 0; font-weight: bold; color: #111827;">${order.customer.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280;">Phone / WhatsApp:</td>
              <td style="padding: 6px 0; font-weight: bold; color: #111827;">
                <a href="tel:${order.customer.phone}" style="color: #059669; text-decoration: none;">${order.customer.phone}</a>
                &nbsp;|&nbsp;
                <a href="https://wa.me/92${order.customer.phone.replace(/^0+/, "").replace(/[^0-9]/g, "")}" style="color: #059669; text-decoration: underline;" target="_blank">Chat on WhatsApp</a>
              </td>
            </tr>
            ${
              order.customer.email
                ? `
            <tr>
              <td style="padding: 6px 0; color: #6b7280;">Email:</td>
              <td style="padding: 6px 0; color: #111827;">${order.customer.email}</td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 6px 0; color: #6b7280;">Delivery Address:</td>
              <td style="padding: 6px 0; font-weight: 500; color: #111827;">
                ${order.customer.address}, ${order.customer.city}, ${order.customer.province}
              </td>
            </tr>
            ${
              order.customer.notes
                ? `
            <tr>
              <td style="padding: 6px 0; color: #6b7280;">Order Notes:</td>
              <td style="padding: 6px 0; font-style: italic; color: #4b5563;">${order.customer.notes}</td>
            </tr>
            `
                : ""
            }
          </table>
        </div>

        <!-- Items Table -->
        <div style="padding: 24px 28px; border-bottom: 1px solid #e5e7eb;">
          <h3 style="margin: 0 0 14px 0; font-size: 14px; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">Ordered Items</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f3f4f6;">
                <th style="padding: 8px 12px; text-align: left; font-size: 12px; color: #4b5563;">Item & Pack</th>
                <th style="padding: 8px 12px; text-align: right; font-size: 12px; color: #4b5563;">Amount</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
              <tr>
                <td style="padding: 8px 12px; font-size: 13px; color: #6b7280;">Subtotal</td>
                <td style="padding: 8px 12px; font-size: 13px; text-align: right; color: #374151;">Rs. ${order.subtotal.toLocaleString("en-PK")}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-size: 13px; color: #6b7280;">Shipping</td>
                <td style="padding: 8px 12px; font-size: 13px; text-align: right; color: #059669; font-weight: 600;">
                  ${order.shipping === 0 ? "FREE" : `Rs. ${order.shipping}`}
                </td>
              </tr>
              <tr style="background-color: #faf8f5;">
                <td style="padding: 10px 12px; font-size: 15px; font-weight: bold; color: #0f2415;">Grand Total</td>
                <td style="padding: 10px 12px; font-size: 17px; font-weight: bold; text-align: right; color: #0f2415;">
                  Rs. ${order.total.toLocaleString("en-PK")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Payment Screenshot Section -->
        ${
          isBankTransfer
            ? `
        <div style="padding: 24px 28px; background-color: #fffbeb;">
          <h3 style="margin: 0 0 8px 0; font-size: 14px; color: #92400e; text-transform: uppercase; letter-spacing: 0.5px;">
            Bank Transfer Payment Proof
          </h3>
          <p style="margin: 0 0 14px 0; font-size: 13px; color: #78350f;">
            Customer selected Direct Bank Transfer to <strong>United Bank Limited (0240316532325 - Muhammad Kaif)</strong>.
          </p>
          ${
            proofBase64
              ? `
            <div style="text-align: center; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #fde68a;">
              <p style="font-size: 12px; color: #6b7280; margin: 0 0 8px 0;">Attached Screenshot (${order.paymentProofName || "Receipt"}):</p>
              <img src="cid:paymentproof" alt="Payment Proof" style="max-width: 100%; max-height: 400px; border-radius: 6px; border: 1px solid #e5e7eb;" />
            </div>
            `
              : `<p style="font-size: 13px; color: #b91c1c; font-weight: bold;">(No screenshot was attached with this order)</p>`
          }
        </div>
        `
            : ""
        }

        <!-- Footer -->
        <div style="padding: 16px 28px; background: #f3f4f6; text-align: center; font-size: 12px; color: #6b7280;">
          This automated order notification was generated by <a href="https://zulviq.com" style="color: #0f2415; font-weight: bold; text-decoration: none;">Zulviq.com</a>
        </div>
      </div>
    </body>
    </html>
  `;

  // Attachments setup
  const attachments: { filename: string; content?: Buffer; path?: string; cid?: string }[] = [];

  if (proofBase64 && proofBase64.includes(",")) {
    const parts = proofBase64.split(",");
    const base64Data = parts[1];
    const buffer = Buffer.from(base64Data, "base64");
    attachments.push({
      filename: order.paymentProofName || "payment-proof.jpg",
      content: buffer,
      cid: "paymentproof",
    });
  }

  // Check if SMTP is configured
  if (!user || !pass) {
    console.log("--------------------------------------------------");
    console.log("[EMAIL NOTIFICATION] SMTP credentials not set in environment.");
    console.log(`[EMAIL NOTIFICATION] Order #${order.id} received for ${order.customer.fullName}.`);
    console.log(`[EMAIL NOTIFICATION] Target Notification Email: ${NOTIFICATION_EMAIL}`);
    console.log(`[EMAIL NOTIFICATION] Total: Rs. ${order.total} | Method: ${order.paymentMethod}`);
    if (proofBase64) {
      console.log(`[EMAIL NOTIFICATION] Payment proof screenshot received (${proofBase64.length} chars).`);
    }
    console.log("--------------------------------------------------");
    return {
      success: true,
      simulated: true,
      message: "Order logged. To send live emails, configure SMTP_USER and SMTP_PASS in .env.local",
    };
  }

  // Real SMTP Transport
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const info = await transporter.sendMail({
    from: `"Zulviq Store" <${user}>`,
    to: NOTIFICATION_EMAIL,
    replyTo: order.customer.email || undefined,
    subject: `New Order #${order.id} - ${order.customer.fullName} - Rs. ${order.total.toLocaleString("en-PK")} (${paymentBadge})`,
    html: emailHtml,
    attachments,
  });

  return { success: true, messageId: info.messageId };
}
