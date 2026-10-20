"use client";

import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Package,
  Clock,
  PhoneCall,
  MessageCircle,
  ArrowRight,
  Truck,
  Building2,
} from "lucide-react";
import { Order } from "@/types";
import { formatPrice } from "@/lib/utils";
import { getWhatsAppOrderConfirmationUrl, WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const urlOrderId = searchParams.get("orderId");
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("zulviq_last_order");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!urlOrderId || parsed.id === urlOrderId) {
          setOrder(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to load last order from localStorage", e);
    }
  }, [urlOrderId]);

  return (
    <div className="bg-cream-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-50 rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-xl space-y-8 text-center sm:text-left">
          {/* Header checkmark */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left border-b border-cream-200 pb-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Order Successfully Placed
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-herbal-950 mt-1.5">
                Thank you for your order!
              </h1>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                Order ID: <strong className="font-mono text-herbal-900">{order?.id || urlOrderId || "ZLQ-ORDER"}</strong>
              </p>
            </div>
          </div>

          {/* Action Reminder Banner for WhatsApp Confirmation */}
          <div className="bg-herbal-900 text-cream-100 p-5 rounded-2xl border border-herbal-800 text-left space-y-3">
            <div className="flex items-center gap-2 text-gold-400 font-bold text-xs">
              <MessageCircle className="w-4 h-4" />
              <span>Recommended Next Step: Confirm on WhatsApp</span>
            </div>
            <p className="text-xs text-herbal-200 leading-relaxed">
              To expedite your dispatch and verify your delivery address or bank transfer payment receipt, please
              click below to send your order summary directly to our WhatsApp support team.
            </p>
            {order && (
              <a
                href={getWhatsAppOrderConfirmationUrl(order)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Send Order & Receipt on WhatsApp
              </a>
            )}
          </div>

          {/* Order Details Breakdown */}
          {order && (
            <div className="space-y-6 text-left">
              {/* Delivery Details */}
              <div className="p-5 rounded-2xl bg-cream-100/70 border border-cream-300 space-y-3 text-xs">
                <h3 className="font-bold text-herbal-950 text-sm flex items-center gap-2">
                  <Truck className="w-4 h-4 text-herbal-800" />
                  Delivery & Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-charcoal-700">
                  <div>
                    <span className="text-charcoal-500 block text-[11px]">Customer:</span>
                    <strong className="text-herbal-900">{order.customer.fullName}</strong>
                  </div>
                  <div>
                    <span className="text-charcoal-500 block text-[11px]">Phone / WhatsApp:</span>
                    <strong className="text-herbal-900">{order.customer.phone}</strong>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-charcoal-500 block text-[11px]">Shipping Address:</span>
                    <strong className="text-herbal-900">
                      {order.customer.address}, {order.customer.city} ({order.customer.province})
                    </strong>
                  </div>
                  {order.customer.notes && (
                    <div className="sm:col-span-2">
                      <span className="text-charcoal-500 block text-[11px]">Order Notes:</span>
                      <p className="italic text-charcoal-700">{order.customer.notes}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Items & Payment Info */}
              <div className="p-5 rounded-2xl bg-cream-100/70 border border-cream-300 space-y-3 text-xs">
                <h3 className="font-bold text-herbal-950 text-sm flex items-center gap-2">
                  <Package className="w-4 h-4 text-herbal-800" />
                  Items Ordered
                </h3>
                <div className="space-y-2 border-b border-cream-300 pb-3">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-charcoal-800">
                      <span>
                        <strong>{item.product.name}</strong> ({item.bundle.name}) x{item.quantity}
                      </span>
                      <span className="font-serif font-bold text-herbal-950">
                        {formatPrice(item.bundle.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-charcoal-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(order.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-600">
                    <span>Shipping</span>
                    <span>{order.shipping === 0 ? "FREE" : formatPrice(order.shipping)}</span>
                  </div>
                  <div className="flex justify-between text-herbal-950 font-bold text-sm pt-2 border-t border-cream-300">
                    <span>Total Amount</span>
                    <span className="font-serif text-lg text-herbal-900">{formatPrice(order.total)}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-charcoal-500 pt-1">
                    <span>Payment Method:</span>
                    <span className="font-semibold text-herbal-800 capitalize">
                      {order.paymentMethod === "bank_transfer" ? "Direct Bank Transfer" : "Cash on Delivery"}
                    </span>
                  </div>
                  {order.paymentProofUrl && (
                    <div className="pt-3 border-t border-cream-300">
                      <span className="text-[11px] font-bold text-herbal-900 block mb-2">
                        Attached Payment Screenshot:
                      </span>
                      <div className="relative w-36 h-36 rounded-xl overflow-hidden border border-cream-300 bg-cream-100 shadow-2xs">
                        <Image
                          src={order.paymentProofUrl}
                          alt="Uploaded payment proof"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Delivery Timeline Notice */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-cream-200/60 border border-cream-300 text-xs text-charcoal-700">
            <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
            <p>
              Your order is being prepared at our fulfillment hub. Expected delivery is <strong>2 to 4 business days</strong>.
              You will receive SMS and phone updates when the courier rider is out for delivery.
            </p>
          </div>

          {/* Return to shop */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cream-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-herbal-800 hover:text-herbal-950 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              Return to Homepage
            </Link>

            <span className="text-xs text-charcoal-500">
              Need assistance? WhatsApp: <strong>{WHATSAPP_DISPLAY_NUMBER}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream-100 p-12 text-center text-xs">Loading order confirmation...</div>}>
      <OrderConfirmationContent />
    </Suspense>
  );
}
