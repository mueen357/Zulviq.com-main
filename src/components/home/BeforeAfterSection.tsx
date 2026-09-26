import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { getFeaturedProduct } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function BeforeAfterSection() {
  const product = getFeaturedProduct();

  return (
    <section className="py-16 sm:py-24 bg-cream-50 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 text-xs font-bold px-3.5 py-1.5 rounded-full border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Visible 6-Week Transformation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-herbal-950 tracking-tight">
            Real Results: Before & After 6 Weeks
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
            Witness the natural restorative power of Zulviq Herbal Hair Oil. Cold-pressed botanical actives stimulate sluggish follicles to fill sparse areas and curb daily shedding.
          </p>
        </div>

        {/* Comparison Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-cream-100/90 rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-sm">
          {/* Left Column: Visual Image Comparison */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 border-cream-300 shadow-lg bg-cream-200">
              <Image
                src="/images/zulviq-before-after.jpg"
                alt="Zulviq Herbal Hair Oil Real Before and After 6-Week Hair Regrowth Results"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />

              {/* Floating verified badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-herbal-950/85 backdrop-blur-md text-cream-100 p-3 rounded-xl border border-herbal-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-cream-50">6-Week Progress</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified User</span>
                </div>
              </div>
            </div>
            <p className="text-center text-[11px] text-charcoal-500 mt-2.5 italic">
              *Individual results may vary based on consistent 2-3 times weekly application.
            </p>
          </div>

          {/* Right Column: Key Transformation Points & Exclusive Offer */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-gold-600 bg-gold-50 px-3 py-1 rounded-full border border-gold-200 inline-block">
                Clinically Grounded Herbal Care
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-herbal-950">
                Noticeable Regrowth & 85% Less Hair Shedding
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                By infusing pure Bhringraj, fresh Amla, Rosemary extract, and cold-pressed Kalonji directly to the scalp, Zulviq targets the root causes of hair loss without synthetic chemicals or harsh side effects.
              </p>
            </div>

            {/* Checklist of proven benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-cream-50 border border-cream-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-herbal-950 block font-semibold">Stops Rapid Hair Fall</strong>
                  <span className="text-charcoal-600">Tightens root dermal anchor points</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-cream-50 border border-cream-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-herbal-950 block font-semibold">Sprouts Baby Hairs</strong>
                  <span className="text-charcoal-600">Reactivates sluggish hairline follicles</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-cream-50 border border-cream-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-herbal-950 block font-semibold">Heals Dandruff & Flakes</strong>
                  <span className="text-charcoal-600">Antifungal oils balance scalp sebum</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-cream-50 border border-cream-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-herbal-950 block font-semibold">Thickens Shaft Texture</strong>
                  <span className="text-charcoal-600">Replaces brittle split ends with volume</span>
                </div>
              </div>
            </div>

            {/* Price Offer Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-herbal-900 text-cream-50 border border-herbal-800 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gold-300 font-semibold block">
                    Special Launch Discount
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-cream-50">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-xs sm:text-sm text-herbal-300 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-gold-400 text-herbal-950 text-[11px] font-bold px-2 py-0.5 rounded-full">
                      Save Rs. 200 OFF
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-herbal-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Pure Organic</span>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href="/products/zulviq-herbal-hair-oil"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 text-herbal-950 font-bold px-6 py-3.5 rounded-xl transition-all text-xs sm:text-sm shadow-md"
                >
                  <span>Order Zulviq Hair Oil Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
