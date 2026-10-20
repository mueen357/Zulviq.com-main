import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service | Zulviq Herbal Botanicals",
  description: "Terms and conditions governing the use of Zulviq's website and purchasing of herbal hair products.",
  alternates: {
    canonical: "/terms-of-service/",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-cream-100 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} />

        <div className="bg-cream-50 rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-xs space-y-6 text-charcoal-800 text-xs sm:text-sm leading-relaxed">
          <div className="border-b border-cream-200 pb-4">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-herbal-950">
              Terms of Service
            </h1>
            <p className="text-xs text-charcoal-500 mt-1">
              Last updated: September 2026
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">1. Acceptance of Terms</h2>
            <p>
              By accessing the website at Zulviq.com or placing an order via our online store or WhatsApp channel,
              you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">2. Product Information & Disclaimers</h2>
            <p>
              Zulviq Herbal Hair Oil is formulated with 100% natural, botanical ingredients. While our customers consistently
              experience significant reduction in shedding and visible hair revitalization, individual hair textures and
              underlying biological conditions vary. As with any topical herbal product, we recommend conducting a patch test
              behind the ear 24 hours prior to full scalp application.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">3. Orders and Pricing</h2>
            <p>
              Prices for products and bundles are listed in Pakistani Rupees (PKR) and are subject to change without notice.
              We reserve the right to refuse or cancel any order in the event of stock shortages or inaccurate pricing.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">4. Intellectual Property</h2>
            <p>
              All trademarks, product names, formulations, copy, photography, and brand graphics are the exclusive
              intellectual property of Zulviq and may not be reproduced without written authorization.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">5. Contact & Support</h2>
            <p>
              For legal inquiries, customer rights, or store assistance, please contact us via email at{" "}
              <a href="mailto:zulviqcare@gmail.com" className="text-herbal-800 underline font-semibold">
                zulviqcare@gmail.com
              </a>{" "}
              or via WhatsApp at <strong>0334 6847116</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
