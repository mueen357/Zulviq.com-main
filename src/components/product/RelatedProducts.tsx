import React from "react";
import Image from "next/image";
import { Sparkles, Clock } from "lucide-react";

export default function RelatedProducts() {
  const upcomingProducts = [
    {
      name: "Zulviq Scalp Clarifying Herbal Shampoo",
      category: "Hair Cleanse",
      description: "Sulfate-free cold-infused herbal shampoo with Shikakai, Reetha, and Amla extracts to cleanse without stripping natural oils.",
      status: "Formulation in Testing — Coming Soon",
      price: "Rs. 1,850",
    },
  ];

  return (
    <section className="py-12 border-t border-cream-200">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-herbal-700 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>The Zulviq Hair Care Ecosystem</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-herbal-950 mt-1">
            Complementary Herbal Formulations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingProducts.map((prod, idx) => (
            <div
              key={idx}
              className="bg-cream-50 rounded-2xl p-6 border border-cream-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-500 bg-cream-200 px-2.5 py-1 rounded-md">
                    {prod.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-800 bg-gold-100 border border-gold-200 px-2.5 py-0.5 rounded-full">
                    <Clock className="w-3 h-3 text-gold-600" />
                    {prod.status}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-herbal-950">{prod.name}</h3>

                <p className="text-xs text-charcoal-700 leading-relaxed">{prod.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-cream-200 flex items-center justify-between text-xs">
                <span className="font-bold text-herbal-900">{prod.price}</span>
                <span className="text-charcoal-500 italic">Pre-order launching soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
