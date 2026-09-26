import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Zulviq Herbal Botanicals",
  description: "Zulviq's satisfaction guarantee, return conditions, refund timeline, and damaged shipment replacement policy.",
  alternates: {
    canonical: "/return-refund-policy/",
  },
};

export default function ReturnRefundPolicyPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Return & Refund Policy" }]} />

        <div className="bg-cream-50 rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-xs space-y-6 text-charcoal-800 text-xs sm:text-sm leading-relaxed">
          <div className="border-b border-cream-200 pb-4">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-herbal-950">
              Return & Refund Policy
            </h1>
            <p className="text-xs text-charcoal-500 mt-1">
              Last updated: September 2026
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">1. Authenticity & Quality Guarantee</h2>
            <p>
              At Zulviq, every batch of herbal hair oil is cold-pressed and laboratory inspected for purity. We want
              you to feel entirely confident in your hair wellness journey with our botanical products.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">2. Damaged or Leaking Bottles</h2>
            <p>
              In the unlikely event that your bottle arrives damaged, cracked, or leaking during transit:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-700">
              <li>Take clear photos of the damaged bottle and outer courier packaging within <strong>48 hours</strong> of delivery.</li>
              <li>Send the photos along with your Order ID to our WhatsApp hotline at <strong>0334 6847116</strong> or email <strong>zulviqstore@gmail.com</strong>.</li>
              <li>We will dispatch a brand-new replacement bottle immediately at zero additional delivery charge.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">3. Return Eligibility</h2>
            <p>
              Due to hygiene, cosmetic safety standards, and the natural composition of our herbal oils, bottles that
              have been opened or unsealed cannot be returned for restock. Unopened bottles in their original packaging
              may be returned within <strong>7 days</strong> of delivery. Return courier shipping costs are the responsibility
              of the customer.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">4. Refund Processing</h2>
            <p>
              Approved refunds are disbursed via Bank Transfer (IBAN), EasyPaisa, or JazzCash within <strong>3 to 5 business days</strong>{" "}
              following inspection of the returned merchandise.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">5. Assistance & Inquiries</h2>
            <p>
              For return inquiries or status updates, reach our team via WhatsApp at <strong>0334 6847116</strong> or email us at{" "}
              <a href="mailto:zulviqstore@gmail.com" className="text-herbal-800 underline font-semibold">
                zulviqstore@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
