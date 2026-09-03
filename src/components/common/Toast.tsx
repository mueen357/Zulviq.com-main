"use client";

import React, { useEffect } from "react";
import { CheckCircle, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Toast() {
  const { toastMessage, clearToast } = useCart();

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      clearToast();
    }, 4000);
    return () => clearTimeout(timer);
  }, [toastMessage, clearToast]);

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 animate-bounce">
      <div className="bg-herbal-900 text-cream-50 px-4 py-3 rounded-2xl shadow-xl border border-herbal-700 flex items-center gap-3 text-xs font-medium">
        <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
        <span>{toastMessage}</span>
        <button
          onClick={clearToast}
          className="text-herbal-400 hover:text-cream-100 p-0.5"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
