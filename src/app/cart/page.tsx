"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Truck,
  MessageCircle,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { getWhatsAppDirectOrderUrl } from "@/lib/whatsapp";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartOriginalTotal, cartDiscount } = useCart();

  const FREE_SHIPPING_THRESHOLD = 2700;
  const isFreeShipping = cartTotal >= FREE_SHIPPING_THRESHOLD;
  const amountToFreeShipping = FREE_SHIPPING_THRESHOLD - cartTotal;
  const shippingFee = cart.length === 0 ? 0 : isFreeShipping ? 0 : 199;
  const grandTotal = cartTotal + shippingFee;

  return (
    <div className="bg-cream-100 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Shopping Cart" }]} />

        <div className="border-b border-cream-200 pb-4">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-herbal-950">
            Your Shopping Cart
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
            Review your selected bundles and proceed to secure order placement.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-cream-50 rounded-3xl p-12 text-center max-w-lg mx-auto border border-cream-300 space-y-5">
            <div className="w-20 h-20 rounded-full bg-cream-200 text-charcoal-400 flex items-center justify-center mx-auto">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-bold text-herbal-950">
                Your cart is currently empty
              </h2>
              <p className="text-xs text-charcoal-600">
                Take the first step toward fuller, stronger, and revitalized hair.
              </p>
            </div>
            <Link
              href="/products/zulviq-herbal-hair-oil"
              className="inline-flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-cream-50 font-bold px-8 py-3.5 rounded-xl text-xs transition-colors"
            >
              Shop Zulviq Herbal Hair Oil
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              {/* Free Shipping Notification Banner */}
              <div className="bg-cream-50 rounded-2xl p-4 border border-cream-300">
                {isFreeShipping ? (
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Congratulations! Your order qualifies for FREE Tracked Shipping in Pakistan.</span>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs text-charcoal-700">
                      Add <strong className="text-herbal-950">{formatPrice(amountToFreeShipping)}</strong> more to your cart for{" "}
                      <strong className="text-emerald-700">FREE Tracked Shipping</strong>!
                    </p>
                    <div className="w-full bg-cream-300 h-2 rounded-full mt-2 overflow-hidden">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Items Card */}
              <div className="bg-cream-50 rounded-3xl p-6 border border-cream-300 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-cream-200 last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-2xl bg-cream-200 overflow-hidden shrink-0 border border-cream-300">
                        <Image
                          src={item.product.images[0]?.url || "/images/zulviq-bottle-front.jpg"}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="font-serif text-base font-bold text-herbal-950 hover:text-herbal-800 transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs font-semibold text-herbal-700">{item.bundle.name}</p>
                        <p className="text-xs text-charcoal-600">
                          Unit Price: {formatPrice(item.bundle.price)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto gap-6 pt-2 sm:pt-0">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-cream-300 rounded-xl bg-cream-100 overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-cream-200 text-charcoal-700 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-charcoal-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-cream-200 text-charcoal-700 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total for item */}
                      <span className="text-sm font-serif font-bold text-herbal-950">
                        {formatPrice(item.bundle.price * item.quantity)}
                      </span>

                      {/* Delete */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-charcoal-400 hover:text-red-600 p-1.5 rounded-lg transition-colors"
                        title="Remove"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-cream-50 rounded-3xl p-6 sm:p-7 border border-cream-300 shadow-sm space-y-5">
                <h2 className="font-serif text-xl font-bold text-herbal-950">Order Summary</h2>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between text-charcoal-700">
                    <span>Regular Total</span>
                    <span className="font-medium text-charcoal-500 line-through">
                      {formatPrice(cartOriginalTotal)}
                    </span>
                  </div>
                  {cartDiscount > 0 && (
                    <div className="flex justify-between text-emerald-800 font-semibold bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
                      <span>Special Discount</span>
                      <span className="font-bold">-{formatPrice(cartDiscount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-charcoal-700">
                    <span>Subtotal ({cart.reduce((a, b) => a + b.quantity, 0)} items)</span>
                    <span className="font-semibold text-herbal-950">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-700">
                    <span>Tracked Courier Shipping</span>
                    <span className={isFreeShipping ? "font-bold text-emerald-700" : "font-semibold text-herbal-950"}>
                      {isFreeShipping ? "FREE" : formatPrice(shippingFee)}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-cream-200 flex justify-between items-baseline">
                    <span className="font-bold text-herbal-950 text-base">Total Payable</span>
                    <span className="font-serif font-bold text-2xl text-herbal-900">
                      {formatPrice(grandTotal)}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <Link
                    href="/checkout"
                    className="w-full flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-cream-50 font-bold py-4 rounded-xl shadow-md transition-all text-sm tracking-wide"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={getWhatsAppDirectOrderUrl(
                      "Zulviq Cart Order",
                      cart.map((c) => `${c.bundle.name} x${c.quantity}`).join(", ")
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 rounded-xl transition-all text-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Checkout via WhatsApp
                  </a>
                </div>

                <div className="pt-2 text-[11px] text-charcoal-500 space-y-1.5 border-t border-cream-200">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Safe manual bank transfer & COD</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-gold-600" />
                    <span>Direct dispatch from Lahore/Karachi hub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
