import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProducts, getProductBySlug } from "@/data/products";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";
import ReviewsSection from "@/components/home/ReviewsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = `${product.name} – Natural Hair Growth & Fall Control`;
  const description = `${product.name} (120ml): Pure cold-pressed herbal hair oil formulated with Amla, Bhringraj, Rosemary & Black Seed for hair regrowth & scalp health.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://zulviq.com/products/${product.slug}/`,
      images: [
        {
          url: product.images[0]?.url || "/images/zulviq-bottle-front.jpg",
          width: 1000,
          height: 1000,
          alt: product.images[0]?.alt || product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.images[0]?.url || "/images/zulviq-bottle-front.jpg"],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Schema.org Product Structured Data (JSON-LD)
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => `https://zulviq.com${img.url}`),
    description: product.shortDescription,
    sku: product.id,
    mpn: "ZLQ-OIL-120",
    brand: {
      "@type": "Brand",
      name: "Zulviq",
    },
    offers: {
      "@type": "AggregateOffer",
      url: `https://zulviq.com/products/${product.slug}/`,
      priceCurrency: "PKR",
      lowPrice: product.bundles[2]?.price || product.price,
      highPrice: product.price,
      offerCount: product.bundles.length,
      offers: product.bundles.map((bundle) => ({
        "@type": "Offer",
        name: bundle.name,
        price: bundle.price,
        priceCurrency: "PKR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        url: `https://zulviq.com/products/${product.slug}/`,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="bg-cream-100 min-h-screen py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products/zulviq-herbal-hair-oil" },
              { label: product.name },
            ]}
          />

          {/* Product Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Gallery Column */}
            <div className="lg:col-span-6">
              <ProductGallery images={product.images} productName={product.name} />
            </div>

            {/* Info & Buying Column */}
            <div className="lg:col-span-6">
              <ProductInfo product={product} />
            </div>
          </div>

          {/* Detailed Tabs */}
          <div className="pt-8">
            <ProductTabs product={product} />
          </div>

          {/* Related / Upcoming Products */}
          <RelatedProducts />
        </div>
      </div>

      {/* Customer Reviews Section */}
      <ReviewsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Final CTA */}
      <CtaBanner />
    </>
  );
}
