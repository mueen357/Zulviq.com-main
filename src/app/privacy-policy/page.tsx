import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Zulviq Herbal Botanicals",
  description: "Zulviq's privacy practices: how we collect, protect, and handle your order information.",
  alternates: {
    canonical: "/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="bg-cream-50 rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-xs space-y-6 text-charcoal-800 text-xs sm:text-sm leading-relaxed">
          <div className="border-b border-cream-200 pb-4">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-herbal-950">
              Privacy Policy
            </h1>
            <p className="text-xs text-charcoal-500 mt-1">
              Last updated: September 2026
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">1. Information We Collect</h2>
            <p>
              When you purchase or inquire on Zulviq, we collect personal information necessary to fulfill your delivery:
              Full name, mobile/WhatsApp telephone number, delivery street address, city, and optional order preferences.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">2. How We Use Your Data</h2>
            <p>
              Your contact and shipping information is used solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-700">
              <li>Process, dispatch, and coordinate courier delivery of your Zulviq hair care orders.</li>
              <li>Provide order verification and delivery tracking status via SMS or WhatsApp.</li>
              <li>Offer direct hair consultation support when initiated by you.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">3. Third-Party Sharing</h2>
            <p>
              We do <strong>not</strong> sell, rent, or lease your private contact information to any third parties or marketing
              brokers. Your delivery address and contact number are shared strictly with our contracted courier partners
              (e.g., TCS, Leopards) solely for the physical delivery of your order.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">4. Data Security</h2>
            <p>
              We maintain appropriate technical and physical safeguards to prevent unauthorized access, alteration, or
              disclosure of your personal data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">5. Privacy Inquiries</h2>
            <p>
              If you have any questions or data requests regarding our Privacy Policy, contact our team at{" "}
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
