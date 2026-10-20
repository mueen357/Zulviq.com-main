"use client";

import React from "react";
import {
  ShieldAlert,
  TrendingUp,
  Sparkles,
  HeartPulse,
  Sun,
  Leaf,
  CheckCircle2,
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: ShieldAlert,
      title: "Dandruff Free",
      description:
        "Potent antifungal and antimicrobial botanical extracts clear stubborn flakes, eliminate microbial buildup, and keep your scalp fresh and itch-free.",
      highlight: "100% Flake Free",
    },
    {
      icon: Sun,
      title: "Add Shine",
      description:
        "Cold-pressed botanical oils seal and nourish roughened hair cuticles, delivering dazzling natural lustre and radiant shine without greasy weight.",
      highlight: "Lustrous Radiance",
    },
    {
      icon: Sparkles,
      title: "Strengthen the Hair",
      description:
        "High concentrations of organic sulfur, essential lipids, and amino acids fortify keratin bonds from root to tip, preventing split ends and brittle breakage.",
      highlight: "Keratin Strength",
    },
    {
      icon: Leaf,
      title: "Smoothness",
      description:
        "Deeply penetrates and hydrates the hair shaft to eliminate frizz, soften rough texture, and detangle unruly strands for silky, touchable hair.",
      highlight: "Silky & Frizz-Free",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "Revitalizes dormant follicles, extends the anagen (growth) cycle, and accelerates healthy new hair density across thinning temples, crown, and hairline.",
      highlight: "Active Follicle Growth",
    },
    {
      icon: HeartPulse,
      title: "Scalp Health",
      description:
        "Balances the scalp's delicate microbiome, regulates excess sebum, and improves micro-circulation to create the ideal foundation for strong, enduring hair.",
      highlight: "Healthy Scalp Biome",
    },
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-herbal-100 text-herbal-900 text-xs font-bold px-3.5 py-1.5 rounded-full border border-herbal-200">
            <Leaf className="w-3.5 h-3.5 text-herbal-700" />
            <span>Targeted Botanical Science</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold text-herbal-950 tracking-tight">
            Why Zulviq Delivers Results When Other Oils Fail
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
            Most commercial hair oils are 80% mineral oil and synthetic perfumes. Zulviq is 100% active botanical
            goodness, engineered to heal the scalp ecosystem and nourish hair at the cellular level.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group bg-cream-50 rounded-2xl p-7 border border-cream-300/80 shadow-xs hover:shadow-xl hover:border-gold-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-herbal-100/90 text-herbal-800 flex items-center justify-center group-hover:bg-herbal-800 group-hover:text-gold-300 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-gold-600 bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200">
                      {benefit.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-herbal-950 group-hover:text-herbal-800 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-cream-200/60 flex items-center gap-2 text-xs font-semibold text-herbal-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Clinical Benefit</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
