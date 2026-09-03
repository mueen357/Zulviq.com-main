"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { getFeaturedProduct } from "@/data/products";

export default function FaqSection() {
  const product = getFeaturedProduct();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Google Schema.org FAQPage Structured Data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-cream-200/50 border-b border-cream-300/80">
      {/* JSON-LD Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 bg-cream-50 text-herbal-900 text-xs font-bold px-3.5 py-1.5 rounded-full border border-cream-300">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-herbal-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
            Everything you need to know about Zulviq Herbal Hair Oil, delivery, ingredients, and safe application.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {product.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-cream-50 border-gold-400 shadow-sm"
                    : "bg-cream-50/80 border-cream-300 hover:border-cream-400"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-herbal-950">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-herbal-800 text-cream-50 rotate-180" : "bg-cream-200 text-charcoal-700"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-charcoal-700 leading-relaxed border-t border-cream-200/60">
                    {faq.answer}
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
