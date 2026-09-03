"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Popover Bubble on Hover / Desktop */}
      <div
        className={`hidden sm:flex items-center mr-3 bg-cream-50 text-herbal-950 text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg border border-cream-200 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-ping" />
        <span>Chat & Order on WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href={getWhatsAppGeneralInquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Order or Chat on WhatsApp"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-40 animate-ping -z-10" />

        {/* Icon */}
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
