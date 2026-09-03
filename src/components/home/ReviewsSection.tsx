import React from "react";
import { Star, CheckCircle, Quote } from "lucide-react";
import { getFeaturedProduct } from "@/data/products";

export default function ReviewsSection() {
  const product = getFeaturedProduct();

  return (
    <section className="py-16 sm:py-24 bg-cream-100 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-gold-100 text-gold-900 text-xs font-bold px-3.5 py-1.5 rounded-full border border-gold-200">
            <Star className="w-3.5 h-3.5 fill-current text-amber-600" />
            <span>Real Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-herbal-950 tracking-tight">
            Loved by Thousands Across Pakistan
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
            Read unfiltered feedback from customers who transformed their hair with Zulviq Herbal Hair Oil.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-cream-50 rounded-2xl p-7 border border-cream-300 shadow-xs flex flex-col justify-between hover:shadow-md transition-all relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* Stars */}
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-cream-300 shrink-0" />
                </div>

                <h3 className="font-serif text-base font-bold text-herbal-950">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                  {rev.content}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-herbal-900">{rev.author}</h4>
                  <p className="text-[11px] text-charcoal-500">{rev.city}, Pakistan</p>
                </div>
                {rev.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Buyer</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
