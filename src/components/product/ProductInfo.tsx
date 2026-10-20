"use client";

import React, { useState } from "react";
import {
  Star,
  ShieldCheck,
  ShoppingBag,
  MessageCircle,
  Truck,
  Sparkles,
  Plus,
  Minus,
  CheckCircle2,
  Gift,
} from "lucide-react";
import { Product, Bundle } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { getWhatsAppDirectOrderUrl } from "@/lib/whatsapp";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedBundle, setSelectedBundle] = useState<Bundle>(
    product.bundles[0] // Default to 1-bottle pack (Rs. 1,499 with Rs. 200 discount)
  );
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedBundle, quantity);
  };

  return (
    <div className="space-y-6">
      {/* Badge & Title */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {product.badge && (
            <span className="bg-herbal-100 text-herbal-900 border border-herbal-200 text-xs font-bold px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}
          <span className="text-xs text-charcoal-500 font-medium">
            Volume: {product.volume}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-herbal-950 tracking-tight leading-tight">
          {product.name}
        </h1>

        <p className="text-sm text-charcoal-700 leading-relaxed italic">
          {product.tagline}
        </p>

        {/* Rating summary */}
        <div className="flex items-center gap-2 pt-1">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm font-bold text-herbal-900">{product.rating}</span>
          <span className="text-xs text-charcoal-500">
            ({product.reviewCount} verified ratings)
          </span>
          <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold border border-emerald-200">
            In Stock
          </span>
        </div>
      </div>

      {/* Pricing Header */}
      <div className="p-4 rounded-2xl bg-cream-50 border border-cream-300 flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-2.5">
            <span className="text-3xl font-serif font-bold text-herbal-950">
              {formatPrice(selectedBundle.price)}
            </span>
            <span className="text-sm text-charcoal-500 line-through">
              {formatPrice(selectedBundle.originalPrice)}
            </span>
          </div>
          <p className="text-xs text-charcoal-600 mt-0.5">
            {formatPrice(selectedBundle.perBottlePrice)} per bottle • {selectedBundle.name}
          </p>
        </div>

        <div className="text-right">
          <span className="bg-gold-100 text-gold-900 text-xs font-bold px-3 py-1 rounded-full border border-gold-300">
            Save {formatPrice(selectedBundle.savings)}
          </span>
        </div>
      </div>

      {/* Bundle Selection Grid */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700">
          Select Supply Bundle:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {product.bundles.map((bundle) => {
            const isSelected = selectedBundle.id === bundle.id;
            return (
              <button
                key={bundle.id}
                onClick={() => setSelectedBundle(bundle)}
                type="button"
                className={`relative p-3.5 rounded-xl text-left border-2 transition-all focus:outline-none flex flex-col justify-between ${
                  isSelected
                    ? "bg-cream-50 border-gold-500 shadow-sm ring-1 ring-gold-300"
                    : "bg-cream-100/70 border-cream-300 hover:border-cream-400"
                }`}
              >
                {bundle.badge && (
                  <span className="text-[10px] font-bold text-gold-800 bg-gold-100 border border-gold-200 px-2 py-0.5 rounded-md inline-block mb-1.5 w-fit">
                    {bundle.badge}
                  </span>
                )}
                <div>
                  <h4 className="text-xs font-bold text-herbal-950">{bundle.name}</h4>
                  <p className="text-sm font-serif font-bold text-herbal-900 mt-1">
                    {formatPrice(bundle.price)}
                  </p>
                </div>
                {bundle.freeGift && (
                  <div className="mt-2 pt-2 border-t border-cream-200 flex items-center gap-1 text-[10px] text-emerald-800 font-semibold">
                    <Gift className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="truncate">{bundle.freeGift}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quantity Selector & Action Buttons */}
      <div className="space-y-3.5 pt-2">
        <div className="flex items-center gap-4">
          <label className="text-xs font-bold text-charcoal-700">Quantity:</label>
          <div className="flex items-center border border-cream-300 rounded-xl bg-cream-50 overflow-hidden shadow-2xs">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-cream-200 text-charcoal-800 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 text-sm font-bold text-charcoal-900">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-cream-200 text-charcoal-800 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <span className="text-xs text-charcoal-600">
            Total: <strong className="text-herbal-950 font-serif">{formatPrice(selectedBundle.price * quantity)}</strong>
          </span>
        </div>

        {/* Primary Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-cream-50 font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-sm tracking-wide"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>

          <a
            href={getWhatsAppDirectOrderUrl(product.name, selectedBundle.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-4 px-6 rounded-xl shadow-md transition-all text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Order via WhatsApp
          </a>
        </div>
      </div>

      {/* Trust & Shipping Highlights */}
      <div className="p-4 rounded-2xl bg-cream-50/80 border border-cream-200/80 space-y-2.5 text-xs text-charcoal-700">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>
            <strong>Free Tracked Courier Shipping</strong> on 2+ Bottles across all cities in Pakistan.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>
            <strong>Safe Payment Options:</strong> Direct Bank Transfer & Cash on Delivery.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
          <span>
            <strong>Authenticity Guarantee:</strong> 100% natural, unadulterated cold-pressed herbs.
          </span>
        </div>
      </div>
    </div>
  );
}
