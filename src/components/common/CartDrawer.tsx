"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, cartOriginalTotal, cartDiscount } = useCart();

  const FREE_SHIPPING_THRESHOLD = 2700;
  const freeShippingUnlocked = cartTotal >= FREE_SHIPPING_THRESHOLD;
  const amountToFreeShipping = FREE_SHIPPING_THRESHOLD - cartTotal;

  // Prevent background scroll when cart drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream-100 shadow-2xl flex flex-col border-l border-cream-300">
          {/* Header */}
          <div className="p-5 border-b border-cream-200 flex items-center justify-between bg-cream-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-herbal-800" />
              <h2 className="text-base font-serif font-bold text-herbal-950">Your Cart</h2>
              <span className="text-xs bg-herbal-100 text-herbal-800 px-2 py-0.5 rounded-full font-semibold">
                {cart.reduce((acc, item) => acc + item.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-charcoal-600 hover:text-charcoal-900 hover:bg-cream-200 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-cream-200/60 px-5 py-3 border-b border-cream-200">
            {freeShippingUnlocked ? (
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You qualify for FREE Delivery across Pakistan!</span>
              </div>
            ) : (
              <div>
                <p className="text-xs text-charcoal-700">
                  Add <span className="font-bold text-herbal-900">{formatPrice(amountToFreeShipping)}</span> more for <span className="font-semibold text-emerald-700">FREE Shipping</span>
                </p>
                <div className="w-full bg-cream-300 h-1.5 rounded-full mt-2 overflow-hidden">
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

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center mx-auto text-charcoal-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-herbal-900">Your cart is empty</h3>
                  <p className="text-xs text-charcoal-600 mt-1">
                    Discover the restorative power of Zulviq Herbal Hair Oil.
                  </p>
                </div>
                <Link
                  href="/products/zulviq-herbal-hair-oil"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-cream-50 px-6 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-colors"
                >
                  Shop Flagship Hair Oil
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-cream-50 p-3.5 rounded-xl border border-cream-200 flex gap-3 shadow-xs"
                >
                  <div className="relative w-20 h-20 bg-cream-200 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={item.product.images[0]?.url || "/images/zulviq-bottle-front.jpg"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-herbal-950 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-charcoal-400 hover:text-red-600 transition-colors p-0.5"
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-herbal-700 font-medium">{item.bundle.name}</p>
                      <p className="text-xs font-bold text-herbal-900 mt-1">
                        {formatPrice(item.bundle.price)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-cream-300 rounded-lg bg-cream-100 overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-cream-200 text-charcoal-700 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-charcoal-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-cream-200 text-charcoal-700 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-xs font-bold text-herbal-900">
                        {formatPrice(item.bundle.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout actions */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-cream-200 bg-cream-50 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-charcoal-600">
                  <span>Regular Total</span>
                  <span className="font-semibold text-charcoal-500 line-through">
                    {formatPrice(cartOriginalTotal)}
                  </span>
                </div>
                {cartDiscount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Special Discount</span>
                    </span>
                    <span className="font-bold">-{formatPrice(cartDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-charcoal-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-charcoal-900">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-charcoal-600">
                  <span>Shipping across Pakistan</span>
                  <span className={freeShippingUnlocked ? "text-emerald-700 font-semibold" : "font-semibold"}>
                    {freeShippingUnlocked ? "FREE" : "Rs. 199"}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-herbal-950 pt-2 border-t border-cream-200">
                  <span>Total Payable</span>
                  <span className="text-base text-gold-600 font-serif">
                    {formatPrice(cartTotal + (freeShippingUnlocked ? 0 : 199))}
                  </span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-cream-50 py-3.5 rounded-xl text-sm font-bold shadow-md transition-all hover:shadow-lg"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full block text-center text-xs font-semibold text-herbal-800 hover:text-herbal-950 py-1.5 transition-colors"
                >
                  View Full Cart Details
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-charcoal-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bank Transfer & COD with 100% Authentic Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
