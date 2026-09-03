"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Leaf,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { WHATSAPP_DISPLAY_NUMBER, getWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-herbal-950 text-cream-200 border-t border-herbal-850 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-herbal-850">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-herbal-900 border border-herbal-800 flex items-center justify-center shrink-0 text-gold-400">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cream-50">100% Pure Herbs</h4>
              <p className="text-xs text-herbal-300">Cold-pressed botanical actives</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-herbal-900 border border-herbal-800 flex items-center justify-center shrink-0 text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cream-50">Zero Harsh Chemicals</h4>
              <p className="text-xs text-herbal-300">No sulfates, parabens or dyes</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-herbal-900 border border-herbal-800 flex items-center justify-center shrink-0 text-gold-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cream-50">Fast Tracked Delivery</h4>
              <p className="text-xs text-herbal-300">2-4 days across Pakistan</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-herbal-900 border border-herbal-800 flex items-center justify-center shrink-0 text-gold-400">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cream-50">WhatsApp Support</h4>
              <p className="text-xs text-herbal-300">Direct order & hair assistance</p>
            </div>
          </div>
        </div>

        {/* 4 Columns Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-herbal-850">
          {/* Col 1: Brand story */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/zulviq-logo-light.png"
                alt="Zulviq Organic Herbal Botanicals"
                width={170}
                height={55}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs leading-relaxed text-herbal-300 max-w-sm">
              Zulviq is an artisanal Pakistani herbal wellness brand formulated on timeless botanical
              science. Our flagship herbal hair oil combines ancient cold-infusion traditions with potent
              bioactive plant actives to solve root causes of hair loss and promote thick, healthy hair naturally.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-herbal-950 bg-gold-400 hover:bg-gold-300 px-4 py-2.5 rounded-full transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Message Us on WhatsApp ({WHATSAPP_DISPLAY_NUMBER})
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-gold-400">Quick Links</h4>
            <ul className="space-y-2 text-xs text-herbal-300">
              <li>
                <Link href="/" className="hover:text-cream-50 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products/zulviq-herbal-hair-oil" className="hover:text-cream-50 transition-colors">
                  Zulviq Herbal Hair Oil
                </Link>
              </li>
              <li>
                <Link href="/#benefits" className="hover:text-cream-50 transition-colors">
                  Key Benefits
                </Link>
              </li>
              <li>
                <Link href="/#ingredients" className="hover:text-cream-50 transition-colors">
                  Potent Herbs & Actives
                </Link>
              </li>
              <li>
                <Link href="/#how-to-use" className="hover:text-cream-50 transition-colors">
                  Application Ritual
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-cream-50 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-gold-400">Customer Care</h4>
            <ul className="space-y-2 text-xs text-herbal-300">
              <li>
                <Link href="/about" className="hover:text-cream-50 transition-colors">
                  About Our Brand
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream-50 transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-cream-50 transition-colors">
                  Shipping & Delivery Policy
                </Link>
              </li>
              <li>
                <Link href="/return-refund-policy" className="hover:text-cream-50 transition-colors">
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-cream-50 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-cream-50 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter / Connect */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-gold-400">Stay Connected</h4>
            <p className="text-xs text-herbal-300">
              Receive natural hair care tips, seasonal scalp routines, and special member offers.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-gold-300 bg-herbal-900 border border-herbal-800 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Thank you for subscribing to Zulviq!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-herbal-900 border border-herbal-800 text-cream-50 text-xs px-3.5 py-2.5 rounded-xl placeholder-herbal-400 focus:outline-none focus:border-gold-400"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-gold-500 hover:bg-gold-400 text-herbal-950 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-herbal-400 block">We respect your privacy. No spam.</span>
              </form>
            )}

            <div className="pt-2 text-xs space-y-1.5 text-herbal-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Lahore, Karachi & Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Support: Mon - Sat (9:00 AM - 9:00 PM PKT)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-herbal-400">
          <p>© {new Date().getFullYear()} Zulviq. All rights reserved. Crafted with pure natural herbs.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-cream-100 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-cream-100 transition-colors">
              Terms
            </Link>
            <Link href="/shipping-policy" className="hover:text-cream-100 transition-colors">
              Shipping
            </Link>
            <Link href="/return-refund-policy" className="hover:text-cream-100 transition-colors">
              Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
