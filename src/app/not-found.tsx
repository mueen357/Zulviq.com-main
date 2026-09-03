import React from "react";
import Link from "next/link";
import { ArrowLeft, Leaf, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cream-100 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-cream-50 p-8 sm:p-10 rounded-3xl border border-cream-300 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center mx-auto">
          <Leaf className="w-8 h-8 text-herbal-700" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-gold-600 uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="font-serif text-3xl font-bold text-herbal-950">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            The page you are seeking may have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-cream-50 font-bold px-6 py-3 rounded-xl text-xs transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <Link
            href="/products/zulviq-herbal-hair-oil"
            className="inline-flex items-center justify-center gap-2 bg-cream-200 hover:bg-cream-300 text-herbal-950 font-semibold px-6 py-3 rounded-xl text-xs transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            View Hair Oil
          </Link>
        </div>
      </div>
    </div>
  );
}
