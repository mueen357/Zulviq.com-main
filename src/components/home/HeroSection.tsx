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
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-200/50 to-cream-100 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-cream-200">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-herbal-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-gold-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines, Social Proof & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 bg-cream-50 border border-cream-300/80 px-4 py-1.5 rounded-full shadow-xs">
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
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-herbal-950 leading-[1.12]">
              The Pure Herbal Secret to{" "}
              <span className="text-herbal-700 italic font-normal">Thick, Resilient</span>{" "}
              & Growing Hair.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Formulated with cold-pressed <strong className="font-semibold text-herbal-900">Bhringraj</strong>,{" "}
              <strong className="font-semibold text-herbal-900">Amla</strong>,{" "}
              <strong className="font-semibold text-herbal-900">Rosemary</strong>, and{" "}
              <strong className="font-semibold text-herbal-900">Black Seed</strong>. Clinically crafted to halt excessive
              hair fall within 21 days and awaken dormant follicles for visible, voluminous regrowth.
            </p>

            {/* Quick Benefits Bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs font-medium text-charcoal-800">
                <span className="w-4 h-4 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Drastically curtails shower shedding</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-charcoal-800">
                <span className="w-4 h-4 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Fills sparse temples & hairline</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-charcoal-800">
                <span className="w-4 h-4 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Heals itchy, flaky & dandruff scalps</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-charcoal-800">
                <span className="w-4 h-4 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>100% Cold-Pressed, 0% Mineral Oils</span>
              </div>
            </div>

            {/* Price & Primary Call to Actions */}
            <div className="pt-3 space-y-4">
              <div className="flex items-baseline justify-center lg:justify-start gap-3">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-herbal-900">
                  {formatPrice(product.price)}
                </span>
                <span className="text-base sm:text-lg text-charcoal-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="bg-gold-100 text-gold-800 text-xs font-bold px-2.5 py-1 rounded-full border border-gold-200">
                  Save {product.discountPercent}% OFF Today
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/products/zulviq-herbal-hair-oil"
                  className="inline-flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-cream-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all text-sm tracking-wide"
                >
                  Order Zulviq Hair Oil
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppDirectOrderUrl("Zulviq Herbal Hair Oil", "Starter Pack")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-4 rounded-xl shadow-md transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order via WhatsApp
                </a>
              </div>

              {/* Micro Trust markers */}
              <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-charcoal-600 pt-1">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Cash on Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  <span>Bank Transfer Instant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-herbal-800">2-4 Days Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Product Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/30 to-herbal-500/20 rounded-3xl blur-2xl transform scale-95" />

              {/* Main Product Image Container */}
              <div className="relative bg-cream-50 rounded-3xl p-3 sm:p-4 shadow-2xl border border-cream-300/80 overflow-hidden group">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-cream-200">
                  <Image
                    src="/images/zulviq-bottle-front.jpg"
                    alt="Zulviq Herbal Hair Oil bottle on organic stone slab with natural herbs"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Guarantee Badge */}
                  <div className="absolute top-4 left-4 bg-herbal-900/90 backdrop-blur-md text-cream-50 text-[11px] font-semibold px-3 py-1.5 rounded-full border border-herbal-700 shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span>100% Cold-Pressed Botanical</span>
                  </div>
                </div>

                {/* Floating Customer Stat Card */}
                <div className="mt-3 bg-cream-100/95 backdrop-blur-sm p-3.5 rounded-xl border border-cream-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-herbal-800 text-gold-300 flex items-center justify-center font-serif font-bold text-xs">
                      94%
                    </div>
                    <div>
                      <p className="text-xs font-bold text-herbal-950">Hair Fall Reduction</p>
                      <p className="text-[11px] text-charcoal-600">Reported within 21 to 30 days</p>
                    </div>
                  </div>
                  <Link
                    href="/products/zulviq-herbal-hair-oil"
                    className="text-xs font-bold text-herbal-800 hover:text-herbal-950 underline decoration-gold-400 underline-offset-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
