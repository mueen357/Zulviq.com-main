"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MessageCircle, ShoppingBag, Truck } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { getWhatsAppDirectOrderUrl } from "@/lib/whatsapp";

interface MobileStickyBarProps {
  product: Product;
}

export default function MobileStickyBar({ product }: MobileStickyBarProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls past 320px
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuickCodOrder = () => {
    // Add default starter pack (or first bundle) to cart and go straight to checkout
    const bundle = product.bundles[0] || {
      id: "single-120ml",
      name: "Starter Supply (1 Bottle)",
      bottles: 1,
      price: product.price,
      originalPrice: product.originalPrice,
      savings: product.originalPrice - product.price,
      perBottlePrice: product.price,
    };
    addToCart(product, bundle, 1);
    router.push("/checkout");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-cream-50/95 backdrop-blur-md border-t border-cream-300 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 transition-all duration-300 animate-in slide-in-from-bottom">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Price & COD Guarantee Badge */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-serif font-bold text-herbal-950">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs text-charcoal-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 w-fit">
            <Truck className="w-2.5 h-2.5 text-emerald-600" />
            Cash on Delivery
          </span>
        </div>

        {/* Buttons: Order COD + WhatsApp */}
        <div className="flex items-center gap-2">
          {/* WhatsApp Direct Order Button */}
          <a
            href={getWhatsAppDirectOrderUrl(product.name, product.bundles[0]?.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-transform active:scale-95 shrink-0"
            aria-label="Order via WhatsApp"
            title="Order on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>

          {/* Primary COD Button */}
          <button
            onClick={handleQuickCodOrder}
            className="flex items-center justify-center gap-1.5 bg-herbal-800 hover:bg-herbal-900 active:scale-95 text-cream-50 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Now (COD)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
