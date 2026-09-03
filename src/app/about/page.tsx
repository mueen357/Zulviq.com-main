import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaf, ShieldCheck, HeartPulse, Award, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us | Zulviq Herbal Botanicals",
  description:
    "Learn about Zulviq: Our heritage, dedication to cold-pressed botanical formulations, and mission to deliver authentic herbal hair care solutions across Pakistan.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-herbal-100 text-herbal-900 text-xs font-bold px-3.5 py-1.5 rounded-full border border-herbal-200">
            <Leaf className="w-3.5 h-3.5 text-herbal-700" />
            <span>Our Natural Heritage</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-herbal-950 tracking-tight">
            Rooted in Nature. Crafted for Hair Health.
          </h1>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
            At Zulviq, we believe that true hair vitality comes from the earth, not synthetic laboratories.
            We slow-infuse wild-harvested botanicals to create remedies that genuinely work with your scalp’s biology.
          </p>
        </div>

        {/* Brand Story 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative aspect-square rounded-3xl overflow-hidden bg-cream-200 border border-cream-300 shadow-xl">
            <Image
              src="/images/zulviq-bottle-box.jpg"
              alt="Zulviq Herbal Hair Care Bottle and Packaging"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-herbal-950">
              The Story Behind Zulviq
            </h2>
            <p>
              Zulviq was born out of frustration with modern hair care products in Pakistan. Walk down any supermarket
              aisle and you will find shelves packed with hair oils claiming to be &quot;natural&quot;—yet flip the bottle over,
              and 80% of the ingredient list consists of cheap mineral oils (liquid paraffin), synthetic colorants, and heavy perfumes.
            </p>
            <p>
              These synthetic oils suffocate hair follicles, attract dust and pollutants, and fail to provide the essential
              lipids required for healthy cell division at the hair bulb.
            </p>
            <p>
              We resolved to do things differently. Consulting classical Ayurvedic and Unani botanical manuscripts, we
              handpicked 14 extraordinary herbs known for centuries for their restorative effects on hair—including Bhringraj,
              fresh Amla, wild Rosemary, and cold-pressed Kalonji (Black Seed).
            </p>
            <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 text-herbal-900 font-serif italic text-sm">
              &ldquo;Our promise is simple: If an ingredient doesn’t nourish your follicles or promote scalp health,
              it does not belong in a bottle of Zulviq.&rdquo;
            </div>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-herbal-950">Our Four Guiding Pillars</h2>
            <p className="text-xs text-charcoal-600">The standards we maintain in every single handcrafted batch.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-cream-50 p-6 rounded-2xl border border-cream-300 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-herbal-100 text-herbal-800 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-herbal-950">Cold-Pressed Potency</h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Extracted at low temperatures without destructive heat to preserve sensitive polyphenols and vitamins.
              </p>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-cream-300 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-herbal-100 text-herbal-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-herbal-950">Zero Toxic Fillers</h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Never diluted with mineral oils, silicones, sulfates, artificial colors, or petroleum derivatives.
              </p>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-cream-300 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-herbal-100 text-herbal-800 flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-herbal-950">Holistic Scalp Care</h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Treats both the root cause of shedding and creates an optimal micro-environment for healthy new growth.
              </p>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-cream-300 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-herbal-100 text-herbal-800 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-herbal-950">Ethically Made in Pakistan</h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Formulated and packaged with pride in Pakistan, supporting sustainable local organic botanical farming.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-herbal-900 rounded-3xl p-8 sm:p-12 text-center text-cream-50 space-y-4 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">Experience the Zulviq Difference</h3>
          <p className="text-xs sm:text-sm text-herbal-200 max-w-xl mx-auto">
            Give your hair the pure nourishment it deserves. See why thousands across Pakistan trust Zulviq.
          </p>
          <div className="pt-2">
            <Link
              href="/products/zulviq-herbal-hair-oil"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-herbal-950 font-bold px-7 py-3.5 rounded-xl text-xs shadow-md transition-colors"
            >
              Order Zulviq Herbal Hair Oil
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
