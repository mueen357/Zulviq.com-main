"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { WHATSAPP_DISPLAY_NUMBER, getWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Hair Care Consultation",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-cream-100 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-herbal-100 text-herbal-900 text-xs font-bold px-3.5 py-1.5 rounded-full border border-herbal-200">
            <PhoneCall className="w-3.5 h-3.5 text-herbal-700" />
            <span>We are Here to Help</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-herbal-950 tracking-tight">
            Get in Touch With Zulviq
          </h1>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
            Have questions about applying Zulviq, tracking your parcel, or choosing the best bundle for your hair?
            Reach out to our herbal advisory team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-xs space-y-6">
              <h2 className="font-serif text-2xl font-bold text-herbal-950">Direct Channels</h2>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-cream-100/70 border border-cream-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-herbal-950">WhatsApp Order Hotline</h3>
                    <p className="text-charcoal-600 text-xs mt-0.5">{WHATSAPP_DISPLAY_NUMBER}</p>
                    <a
                      href={getWhatsAppGeneralInquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:underline mt-1 inline-block"
                    >
                      Start WhatsApp Chat →
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-cream-100/70 border border-cream-200">
                  <div className="w-10 h-10 rounded-xl bg-herbal-100 text-herbal-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-herbal-950">Email Support</h3>
                    <a
                      href="mailto:zulviqcare@gmail.com"
                      className="text-xs font-semibold text-herbal-800 hover:text-gold-600 transition-colors mt-0.5 block"
                    >
                      zulviqcare@gmail.com
                    </a>
                    <span className="text-[11px] text-charcoal-500">Replies within 12 business hours</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-cream-100/70 border border-cream-200">
                  <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-herbal-950">Fulfillment Hubs</h3>
                    <p className="text-charcoal-600 text-xs mt-0.5">
                      Gulberg III, Lahore & Clifton, Karachi, Pakistan
                    </p>
                    <span className="text-[11px] text-charcoal-500">Direct courier dispatches across all Pakistan</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-cream-100/70 border border-cream-200">
                  <div className="w-10 h-10 rounded-xl bg-charcoal-100 text-charcoal-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-herbal-950">Customer Advisory Hours</h3>
                    <p className="text-charcoal-600 text-xs mt-0.5">
                      Monday to Saturday: 9:00 AM – 9:00 PM PKT
                    </p>
                    <span className="text-[11px] text-charcoal-500">Sunday: Closed for order packaging</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map Representation */}
            <div className="bg-cream-50 rounded-3xl p-6 border border-cream-300 space-y-3">
              <h3 className="font-serif text-base font-bold text-herbal-950 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-herbal-800" />
                Nationwide Delivery Coverage
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                We deliver tracked parcels via Leopards, TCS, and Call Courier to over 150+ cities across
                Punjab, Sindh, KPK, Balochistan, Islamabad, and Azad Kashmir.
              </p>
              <div className="h-44 w-full rounded-2xl bg-herbal-950 text-cream-100 flex flex-col items-center justify-center p-4 text-center space-y-2 border border-herbal-850">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                  Pakistan Operations Center
                </span>
                <p className="text-[11px] text-herbal-300 max-w-xs">
                  Central fulfillment center located in Lahore with secondary dispatch facilities in Karachi.
                </p>
                <div className="flex items-center gap-2 text-[10px] text-emerald-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Dispatch active today</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-xs space-y-6">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl font-bold text-herbal-950">Send an Inquiry</h2>
                <p className="text-xs text-charcoal-600">
                  Leave your details and message below. Our herbalist team will respond via WhatsApp or call.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-lg font-bold text-emerald-950">
                    Message Received Successfully!
                  </h3>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}. A Zulviq representative will contact you on{" "}
                    <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", subject: "Hair Care Consultation", message: "" });
                    }}
                    className="text-xs font-bold text-herbal-800 underline underline-offset-2 pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="space-y-1">
                    <label className="block font-bold text-charcoal-800">
                      Your Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Zaid Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-cream-100 border border-cream-300 rounded-xl px-4 py-3 text-charcoal-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block font-bold text-charcoal-800">
                      WhatsApp / Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-cream-100 border border-cream-300 rounded-xl px-4 py-3 text-charcoal-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block font-bold text-charcoal-800">Topic of Inquiry</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-cream-100 border border-cream-300 rounded-xl px-4 py-3 text-charcoal-900 focus:outline-none focus:border-gold-500"
                    >
                      <option value="Hair Care Consultation">Hair Care / Usage Consultation</option>
                      <option value="Order Status & Tracking">Order Status & Courier Tracking</option>
                      <option value="Bank Transfer Confirmation">Bank Transfer Confirmation</option>
                      <option value="Bulk / Salon Inquiries">Wholesale / Salon Inquiries</option>
                      <option value="Other">Other Question</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-bold text-charcoal-800">
                      Your Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your hair type, shedding concerns, or order query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-cream-100 border border-cream-300 rounded-xl px-4 py-3 text-charcoal-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-cream-50 font-bold py-4 rounded-xl shadow-md transition-all text-xs sm:text-sm tracking-wide"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
