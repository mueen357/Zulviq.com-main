import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { getFeaturedProduct } from "@/data/products";

export default function IngredientsSection() {
  const product = getFeaturedProduct();

  return (
    <section id="ingredients" className="py-16 sm:py-24 bg-gradient-to-b from-cream-100 via-cream-200/50 to-cream-100 text-charcoal-900 border-b border-cream-300/80 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-herbal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-cream-50 border border-herbal-200 text-herbal-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-herbal-600" />
            <span>Pure Botanical Potency</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-herbal-950 tracking-tight">
            Crafted From Nature’s Most Potent Hair Herbs
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
            Every drop of Zulviq is cold-infused with medicinal herbs sourced directly from certified organic growers.
            No chemical distillates, no dilution, no compromise.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.ingredients.map((herb, idx) => (
            <div
              key={idx}
              className="bg-cream-50 rounded-2xl p-6 border border-cream-300/90 shadow-xs hover:shadow-md hover:border-herbal-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-herbal-700 font-bold bg-herbal-50 border border-herbal-200/80 px-2.5 py-1 rounded-md">
                    {herb.role}
                  </span>
                  <span className="text-xs text-charcoal-400 font-mono">0{idx + 1}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-herbal-950 group-hover:text-herbal-700 transition-colors">
                  {herb.name}
                </h3>

                <p className="text-xs italic text-herbal-700 font-serif">
                  {herb.botanicalName}
                </p>

                <p className="text-xs text-charcoal-700 leading-relaxed pt-1">
                  {herb.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-cream-200 flex items-center justify-between text-[11px] text-charcoal-500">
                <span>Cold-Pressed Extraction</span>
                <span className="text-herbal-700 font-semibold">100% Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 bg-cream-50 rounded-2xl p-6 sm:p-8 border border-herbal-200/80 text-center max-w-3xl mx-auto space-y-2 shadow-xs">
          <div className="flex items-center justify-center gap-2 text-herbal-700">
            <ShieldCheck className="w-5 h-5 text-herbal-600" />
            <h4 className="font-serif text-lg sm:text-xl font-bold text-herbal-950">
              The Zulviq Purity Pledge
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-700">
            Zero Mineral Oil • Zero Artificial Fragrances • Zero Sulfates or Parabens • 100% Cruelty-Free & Halal Ingredients
          </p>
        </div>
      </div>
    </section>
  );
}
