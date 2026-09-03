import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Zulviq Herbal Botanicals",
  description: "Read Zulviq’s shipping policy: Delivery timelines across Pakistan, shipping charges, tracking details, and order processing.",
  alternates: {
    canonical: "/shipping-policy/",
  },
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: "Shipping Policy" }]} />

        <div className="bg-cream-50 rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-xs space-y-6 text-charcoal-800 text-xs sm:text-sm leading-relaxed">
          <div className="border-b border-cream-200 pb-4">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-herbal-950">
              Shipping & Delivery Policy
            </h1>
            <p className="text-xs text-charcoal-500 mt-1">
              Last updated: September 2026 • Template intended for legal review
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">1. Order Processing Time</h2>
            <p>
              All Zulviq orders are freshly packaged and dispatched from our fulfillment facilities within 24 to 48 hours
              of order placement and payment verification (excluding Sundays and national public holidays).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">2. Delivery Destinations & Timelines</h2>
            <p>
              We deliver to all cities, towns, and postal areas across Pakistan through licensed courier partners including
              TCS, Leopards Courier, Trax, and Call Courier:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-700">
              <li><strong>Major Metros (Lahore, Karachi, Islamabad, Rawalpindi):</strong> 2 to 3 business days.</li>
              <li><strong>Secondary Cities (Faisalabad, Multan, Gujranwala, Sialkot, Peshawar, Quetta):</strong> 3 to 4 business days.</li>
              <li><strong>Remote / Rural Regions & Azad Kashmir:</strong> 4 to 6 business days.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">3. Shipping Charges</h2>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-700">
              <li><strong>Orders of 2+ Bottles (Over Rs. 3,000):</strong> FREE Tracked Shipping nationwide.</li>
              <li><strong>Single Bottle Starter Orders:</strong> Standard flat courier fee of Rs. 199.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">4. Order Tracking</h2>
            <p>
              Once your parcel has been handed over to the courier, an automated SMS containing your unique tracking number
              will be sent to the phone number provided at checkout. You can track your shipment directly on the courier’s portal.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-herbal-900">5. Cash on Delivery (COD) Guidelines</h2>
            <p>
              For Cash on Delivery orders, please ensure the exact payable amount is available when the courier rider arrives.
              Riders are not permitted to open parcels prior to payment collection. If you encounter any issue with your parcel,
              please contact Zulviq customer support on WhatsApp for prompt resolution.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
