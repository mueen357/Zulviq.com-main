"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface ProductGalleryProps {
  images: {
    url: string;
    alt: string;
    title: string;
  }[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = images[selectedIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative aspect-square w-full rounded-3xl bg-cream-50 border border-cream-300/80 shadow-lg overflow-hidden group">
        <Image
          src={selectedImage.url}
          alt={selectedImage.alt || productName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Brand Guarantee Badge */}
        <div className="absolute top-4 left-4 bg-herbal-900/90 backdrop-blur-md text-cream-50 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-herbal-700 shadow-md flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Cold-Pressed Botanical Elixir</span>
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((img, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`relative aspect-square rounded-2xl overflow-hidden bg-cream-200 border-2 transition-all duration-200 focus:outline-none ${
                  isSelected
                    ? "border-gold-500 shadow-md ring-2 ring-gold-200"
                    : "border-cream-300 opacity-70 hover:opacity-100"
                }`}
                aria-label={`View product image ${idx + 1}`}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
