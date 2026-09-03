import React from "react";
import { Droplet, Hand, Sparkles, Moon, Clock, Lightbulb } from "lucide-react";
import { getFeaturedProduct } from "@/data/products";

export default function HowToUseSection() {
  const product = getFeaturedProduct();
  const stepIcons = [Droplet, Hand, Sparkles, Moon];

  return (
    <section id="how-to-use" className="py-16 sm:py-24 bg-cream-200/60 border-b border-cream-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-cream-50 text-herbal-900 text-xs font-bold px-3.5 py-1.5 rounded-full border border-cream-300">
            <Clock className="w-3.5 h-3.5 text-gold-600" />
            <span>Application Ritual</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-herbal-950 tracking-tight">
            How to Use Zulviq for Maximum Results
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
            Follow this simple 4-step ritual 2 to 3 times per week to awaken sluggish roots, boost absorption, and
            supercharge your hair growth cycle.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {product.howToUse.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-cream-50 rounded-2xl p-6 border border-cream-300/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-herbal-800 text-gold-300 flex items-center justify-center font-bold text-sm shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-serif font-bold text-herbal-800 bg-herbal-100 px-3 py-1 rounded-full">
                      Step 0{step.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-herbal-950 group-hover:text-herbal-800 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {step.instruction}
                  </p>
                </div>

                {step.tip && (
                  <div className="mt-5 pt-4 border-t border-cream-200 flex items-start gap-2 text-[11px] text-herbal-800 bg-herbal-50/70 p-2.5 rounded-lg border border-herbal-100">
                    <Lightbulb className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{step.tip}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
