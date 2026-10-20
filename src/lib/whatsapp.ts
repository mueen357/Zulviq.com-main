import { Order } from "@/types";
import { formatPrice } from "./utils";

export const WHATSAPP_PHONE_NUMBER = "923346847116";
export const WHATSAPP_DISPLAY_NUMBER = "0334 6847116";
export const SUPPORT_EMAIL = "zulviqcare@gmail.com";

export function getWhatsAppDirectOrderUrl(productName: string, bundleName?: string): string {
  const message = bundleName
    ? `Hi Zulviq team! 👋\n\nI would like to order the *${productName}* (${bundleName}).\n\nPlease let me know the payment details and delivery timeline.`
    : `Hi Zulviq team! 👋\n\nI am interested in ordering *${productName}*.\n\nPlease share further details.`;

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralInquiryUrl(): string {
  const message = `Hi Zulviq team! 👋\n\nI have a question regarding Zulviq Herbal Hair Oil and would like some guidance on hair care.`;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppOrderConfirmationUrl(order: Order): string {
  const itemsText = order.items
    .map(
      (item, i) =>
        `${i + 1}. *${item.product.name}* (${item.bundle.name}) x${item.quantity} = ${formatPrice(item.bundle.price * item.quantity)}`
    )
    .join("\n");

  const message = `🌿 *NEW ORDER NOTIFICATION - ZULVIQ* 🌿\n\n` +
    `*Order ID:* ${order.id}\n` +
    `*Customer Name:* ${order.customer.fullName}\n` +
    `*Phone:* ${order.customer.phone}\n` +
    `*City:* ${order.customer.city} (${order.customer.province})\n` +
    `*Address:* ${order.customer.address}\n` +
    (order.customer.notes ? `*Special Notes:* ${order.customer.notes}\n` : "") +
    `\n📦 *Order Items:*\n${itemsText}\n\n` +
    `*Subtotal:* ${formatPrice(order.subtotal)}\n` +
    `*Shipping:* ${order.shipping === 0 ? "FREE" : formatPrice(order.shipping)}\n` +
    `*Total Payable:* ${formatPrice(order.total)}\n` +
    `*Payment Method:* ${order.paymentMethod === "bank_transfer" ? "Direct Bank Transfer" : "Cash on Delivery (COD)"}\n` +
    (order.paymentMethod === "bank_transfer"
      ? `\n📸 *Note:* I am attaching my Bank Transfer payment receipt screenshot below.`
      : `\n💵 *Payment:* Cash on delivery upon arrival.`);

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
