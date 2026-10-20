"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, ArrowRight, Sparkles, MessageCircle, Check } from "lucide-react";
import { getWhatsAppDirectOrderUrl } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/utils";
import { getFeaturedProduct } from "@/data/products";

export default function HeroSection() {
  const product = getFeaturedProduct();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-200/50 to-cream-100 pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-14 lg:pb-24 border-b border-cream-200">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-herbal-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-gold-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Product Photography (order-1 on mobile, order-2 on desktop) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-[320px] sm:max-w-sm lg:max-w-none">
              {/* Glowing Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/30 to-herbal-500/20 rounded-3xl blur-2xl transform scale-95" />

              {/* Main Product Image Container */}
              <div className="relative bg-cream-50 rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 shadow-xl lg:shadow-2xl border border-cream-300/80 overflow-hidden group">
                <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-cream-200">
                  <Image
                    src="/images/zulviq-bottle-front.jpg"
                    alt="Zulviq Herbal Hair Oil bottle on organic stone slab with natural herbs"
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Guarantee Badge */}
                  <div className="absolute top-3 left-3 bg-herbal-900/90 backdrop-blur-md text-cream-50 text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-herbal-700 shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400" />
                    <span>100% Cold-Pressed Botanical</span>
                  </div>
                </div>

                {/* Floating Customer Stat Card */}
                <div className="mt-2.5 sm:mt-3 bg-cream-100/95 backdrop-blur-sm p-2.5 sm:p-3.5 rounded-xl border border-cream-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-herbal-800 text-gold-300 flex items-center justify-center font-serif font-bold text-[11px] sm:text-xs shrink-0">
                      94%
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-bold text-herbal-950">Hair Fall Reduction</p>
                      <p className="text-[10px] sm:text-[11px] text-charcoal-600">Reported within 21 to 30 days</p>
                    </div>
                  </div>
                  <Link
                    href="/products/zulviq-herbal-hair-oil"
                    className="text-[11px] sm:text-xs font-bold text-herbal-800 hover:text-herbal-950 underline decoration-gold-400 underline-offset-2 shrink-0"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Headlines, Social Proof, Pricing & CTAs (order-2 on mobile, order-1 on desktop) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 bg-cream-50 border border-cream-300/80 px-3.5 py-1.5 rounded-full shadow-xs">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-herbal-900">
                4.9 / 5.0 Rating
              </span>
              <span className="text-xs text-charcoal-500">|</span>
              <span className="text-xs font-medium text-charcoal-700">
                380+ Verified Results in Pakistan
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-herbal-950 leading-[1.15]">
              The Pure Herbal Secret to{" "}
              <span className="text-herbal-700 italic font-normal">Thick, Resilient</span>{" "}
              & Growing Hair.
            </h1>

            {/* Price & Primary Call to Actions */}
            <div className="pt-1 sm:pt-2 space-y-3.5 sm:space-y-4">
              <div className="flex items-baseline justify-center lg:justify-start gap-3">
                <span className="text-2xl sm:text-4xl font-serif font-bold text-herbal-900">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm sm:text-lg text-charcoal-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="bg-gold-100 text-gold-800 text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full border border-gold-200">
                  Save Rs. 200 OFF Today
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                <Link
                  href="/products/zulviq-herbal-hair-oil"
                  className="inline-flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-cream-50 font-bold px-7 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all text-xs sm:text-sm tracking-wide"
                >
                  Order Zulviq Hair Oil
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppDirectOrderUrl("Zulviq Herbal Hair Oil", "Starter Pack")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3.5 sm:py-4 rounded-xl shadow-md transition-all text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order via WhatsApp
                </a>
              </div>

              {/* Micro Trust markers */}
              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs text-charcoal-600 pt-0.5">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                  <span>Cash on Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-500" />
                  <span>Bank Transfer</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-herbal-800">2-4 Days Delivery</span>
                </div>
              </div>
            </div>

            {/* Quick Benefits Bullet points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-1.5 text-xs font-medium text-charcoal-800">
                <span className="w-4 h-4 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Dandruff Free</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-charcoal-800">
                <span className="w-4 h-4 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Add Shine</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-charcoal-800">
                <span className="w-4 h-4 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Strengthen the Hair</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-charcoal-800">
                <span className="w-4 h-4 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Silky Smoothness</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-charcoal-800">
                <span className="w-4 h-4 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Active Growth</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-charcoal-800">
                <span className="w-4 h-4 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Scalp Health</span>
              </div>
            </div>

            {/* Sub-headline */}
            <p className="text-xs sm:text-base text-charcoal-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-1">
              Formulated with 10 cold-pressed whole herbs including <strong className="font-semibold text-herbal-900">Bhringraj</strong>,{" "}
              <strong className="font-semibold text-herbal-900">Amla</strong>,{" "}
              <strong className="font-semibold text-herbal-900">Rosemary</strong>, and{" "}
              <strong className="font-semibold text-herbal-900">Black Seed</strong>. Crafted to banish dandruff, heal the scalp,
              strengthen roots, and awaken dormant follicles for thick, resilient hair.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
