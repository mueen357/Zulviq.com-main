"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, PhoneCall, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { WHATSAPP_DISPLAY_NUMBER, getWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Zulviq Hair Oil", href: "/products/zulviq-herbal-hair-oil" },
    { name: "Benefits", href: "/#benefits" },
    { name: "Ingredients", href: "/#ingredients" },
    { name: "How to Use", href: "/#how-to-use" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-herbal-800 text-cream-100 text-xs py-2 px-4 text-center border-b border-herbal-700/60">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap font-medium tracking-wide">
          <span className="inline-flex items-center gap-1.5 text-gold-400">
            <Sparkles className="w-3.5 h-3.5" />
            100% Pure Cold-Pressed Herbs
          </span>
          <span className="hidden md:inline text-herbal-600">•</span>
          <span className="hidden sm:inline">FREE Tracked Shipping across Pakistan on 2+ Bottles</span>
          <span className="hidden md:inline text-herbal-600">•</span>
          <span className="text-gold-300">Bank Transfer & COD Available</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-cream-300/80 py-3"
            : "bg-cream-100/90 backdrop-blur-sm border-b border-cream-200 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Wordmark */}
          <Link href="/" className="group flex items-center focus:outline-none py-1">
            <Image
              src="/images/zulviq-logo-transparent.png"
              alt="Zulviq Organic Herbal Botanicals"
              width={160}
              height={50}
              priority
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-herbal-700 py-1 relative ${
                    isActive ? "text-herbal-900 font-semibold" : "text-charcoal-700"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* WhatsApp Quick Link */}
            <a
              href={getWhatsAppGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-herbal-900 bg-herbal-100/80 hover:bg-herbal-200/90 px-3.5 py-2 rounded-full border border-herbal-200 transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <PhoneCall className="w-3.5 h-3.5 text-herbal-700" />
              <span className="hidden md:inline">{WHATSAPP_DISPLAY_NUMBER}</span>
              <span className="md:hidden">WhatsApp</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full text-herbal-900 bg-cream-200 hover:bg-cream-300 transition-colors focus:outline-none focus:ring-2 focus:ring-herbal-800"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-herbal-900" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-herbal-950 text-[11px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-sm animate-scale">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-herbal-900 hover:bg-cream-200 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[96px] bg-cream-100/98 backdrop-blur-lg border-b border-cream-300 shadow-xl py-6 px-6 transition-all duration-300 z-50">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-charcoal-800 hover:text-herbal-800 py-2 border-b border-cream-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href={getWhatsAppGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-cream-100 py-3 rounded-xl font-medium text-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-gold-400" />
                Chat with Zulviq Herbalists on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
