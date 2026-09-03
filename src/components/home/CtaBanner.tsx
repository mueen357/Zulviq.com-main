"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { getWhatsAppDirectOrderUrl } from "@/lib/whatsapp";

export default function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-herbal-800 via-herbal-750 to-herbal-800 text-cream-50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-herbal-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 bg-herbal-900/50 border border-herbal-600/60 text-gold-300 text-xs font-bold px-4 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Real Herbal Results Await You</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream-50 max-w-3xl mx-auto leading-tight">
          Ready to Experience Fuller, Healthier & Thicker Hair?
        </h2>

        <p className="text-sm sm:text-base text-cream-100/90 max-w-2xl mx-auto leading-relaxed">
          Join thousands of satisfied customers across Pakistan who stopped their hair fall and revitalized their
          scalp with Zulviq’s cold-pressed botanical hair elixir.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/products/zulviq-herbal-hair-oil"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-herbal-950 font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm tracking-wide"
          >
            Order Zulviq Hair Oil Today
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={getWhatsAppDirectOrderUrl("Zulviq Herbal Hair Oil", "Direct Inquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-herbal-900/60 hover:bg-herbal-900 text-cream-50 font-semibold px-7 py-4 rounded-xl border border-herbal-600/60 transition-all text-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            Quick WhatsApp Order
          </a>
        </div>

        {/* Guarantees */}
        <div className="pt-6 flex items-center justify-center gap-6 sm:gap-8 flex-wrap text-xs text-herbal-300 border-t border-herbal-800/60 max-w-xl mx-auto">
          <div className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-gold-400" />
            <span>Tracked Delivery in Pakistan</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Cash on Delivery & Bank Transfer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
