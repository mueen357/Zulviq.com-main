"use client";

import React, { useState } from "react";
import { Product } from "@/types";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"desc" | "ingredients" | "howToUse" | "timeline" | "shipping">(
    "desc"
  );

  const tabs = [
    { id: "desc", label: "Full Description" },
    { id: "ingredients", label: "Potent Herbs" },
    { id: "howToUse", label: "How to Use" },
    { id: "timeline", label: "Results Timeline" },
    { id: "shipping", label: "Shipping & Returns" },
  ] as const;

  return (
    <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-cream-300/80 shadow-xs space-y-6">
      {/* Tab Navigation buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-cream-200 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all focus:outline-none ${
                isActive
                  ? "bg-herbal-800 text-cream-50 shadow-xs"
                  : "text-charcoal-600 hover:text-herbal-900 hover:bg-cream-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panels */}
      <div className="pt-2">
        {/* Description Tab */}
        {activeTab === "desc" && (
          <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-herbal-950">
              The Pure Herbal Solution for Stubborn Hair Thinning
            </h3>
            <p>{product.fullDescription}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
              {product.keyBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-cream-100/70 border border-cream-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-herbal-950 text-xs">{b.title}</h4>
                    <p className="text-[11px] text-charcoal-600 mt-0.5">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ingredients Tab */}
        {activeTab === "ingredients" && (
          <div className="space-y-4">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-herbal-950">
              Active Botanical Composition
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.ingredients.map((herb, i) => (
                <div key={i} className="p-4 rounded-xl bg-cream-100/80 border border-cream-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-herbal-950">{herb.name}</h4>
                    <span className="text-[10px] bg-herbal-100 text-herbal-800 px-2 py-0.5 rounded font-semibold">
                      {herb.role}
                    </span>
                  </div>
                  <p className="text-[11px] italic text-charcoal-500 font-serif">{herb.botanicalName}</p>
                  <p className="text-xs text-charcoal-700 pt-1 leading-relaxed">{herb.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How to Use Tab */}
        {activeTab === "howToUse" && (
          <div className="space-y-4">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-herbal-950">
              Simple 4-Step Application Ritual
            </h3>
            <div className="space-y-3">
              {product.howToUse.map((step) => (
                <div key={step.step} className="p-4 rounded-xl bg-cream-100/80 border border-cream-200 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-herbal-800 text-gold-300 flex items-center justify-center text-xs font-bold shrink-0">
                    {step.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-herbal-950">{step.title}</h4>
                    <p className="text-xs text-charcoal-700 leading-relaxed">{step.instruction}</p>
                    {step.tip && (
                      <p className="text-[11px] text-herbal-700 font-medium pt-0.5">💡 Tip: {step.tip}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === "timeline" && (
          <div className="space-y-4">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-herbal-950">
              Your Expected Results Timeline
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.timeline.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-cream-100/80 border border-cream-200 space-y-1.5">
                  <span className="text-[11px] font-bold text-gold-700 uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h4 className="text-xs font-bold text-herbal-950">{item.title}</h4>
                  <p className="text-xs text-charcoal-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shipping & Returns Tab */}
        {activeTab === "shipping" && (
          <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-herbal-950">
              Fast Delivery Across All Cities in Pakistan
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Delivery Time:</strong> 2 to 4 business days to major hubs (Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan) and 3 to 5 days for other regions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Shipping Charges:</strong> Completely FREE on orders over Rs. 3,000 (such as our 2-Bottle and 3-Bottle packs). Flat Rs. 199 for a single bottle starter pack.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Damaged or Leaking Item Guarantee:</strong> If your bottle arrives broken or damaged during transit, simply notify our WhatsApp support with your Order ID and photo, and we will dispatch a brand-new replacement immediately at zero extra cost.
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
