import React from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { getFeaturedProduct } from "@/data/products";

export default function ResultsTimeline() {
  const product = getFeaturedProduct();

  return (
    <section className="py-16 sm:py-24 bg-cream-100 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-herbal-100 text-herbal-900 text-xs font-bold px-3.5 py-1.5 rounded-full border border-herbal-200">
            <Calendar className="w-3.5 h-3.5 text-herbal-700" />
            <span>Proven Progress Milestones</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-herbal-950 tracking-tight">
            What to Expect: Your 6-Week Hair Transformation
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
            Real botanical hair restoration works with your body’s natural biological hair growth cycles.
            Here is the typical timeline reported by our regular users across Pakistan.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {product.timeline.map((stage, idx) => (
            <div
              key={idx}
              className="bg-cream-50 rounded-2xl p-6 border border-cream-300 shadow-xs relative flex flex-col justify-between hover:border-herbal-600 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                    {stage.period}
                  </span>
                  <span className="text-xs font-serif font-bold text-herbal-400">Phase 0{idx + 1}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-herbal-950 group-hover:text-herbal-800 transition-colors mb-2">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-cream-200 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Noticeable Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
