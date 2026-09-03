import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import CartDrawer from "@/components/common/CartDrawer";
import Toast from "@/components/common/Toast";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1b382b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zulviq.com"),
  title: {
    default: "Zulviq Herbal Hair Oil | Natural Hair Growth & Fall Control in Pakistan",
    template: "%s | Zulviq Herbal Botanicals",
  },
  description:
    "Discover Zulviq Herbal Hair Oil: 100% natural, cold-pressed botanical hair oil crafted from Amla, Bhringraj, Rosemary & Black Seed. Clinically proven to reduce hair fall and stimulate rapid hair regrowth across Pakistan.",
  keywords: [
    "herbal hair oil Pakistan",
    "best hair growth oil Pakistan",
    "hair fall control oil",
    "natural hair oil for hair growth",
    "Zulviq hair oil",
    "organic hair oil",
    "rosemary and bhringraj hair oil",
    "hair regrowth oil",
    "hair fall treatment Lahore Karachi Islamabad",
  ],
  authors: [{ name: "Zulviq Botanicals" }],
  creator: "Zulviq",
  publisher: "Zulviq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zulviq Herbal Hair Oil – Natural Hair Growth & Fall Control",
    description:
      "Crafted from 14 potent Ayurvedic herbs and cold-pressed oils. Clinically proven to reduce hair fall within 21 days and stimulate visible new hair growth.",
    url: "https://zulviq.com",
    siteName: "Zulviq Herbal Botanicals",
    images: [
      {
        url: "/images/zulviq-bottle-box.jpg",
        width: 1200,
        height: 1200,
        alt: "Zulviq Herbal Hair Oil Premium Packaging",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zulviq Herbal Hair Oil – Pure Botanical Hair Growth",
    description:
      "100% natural herbal hair oil for hair fall control, regrowth, and dandruff elimination in Pakistan.",
    images: ["/images/zulviq-bottle-box.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/zulviq-icon.png",
    apple: "/images/zulviq-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zulviq",
    url: "https://zulviq.com",
    logo: "https://zulviq.com/images/zulviq-logo-transparent.png",
    description:
      "Zulviq is a premium herbal wellness and organic hair care brand based in Pakistan, formulating natural hair growth and fall control remedies.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressLocality: "Lahore",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+923136221191",
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zulviq",
    url: "https://zulviq.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://zulviq.com/products/zulviq-herbal-hair-oil",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(typeof window!=='undefined'&&window.location.hostname==='www.zulviq.com'){window.location.replace('https://zulviq.com'+window.location.pathname+window.location.search);}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream-100 text-charcoal-900 font-sans antialiased selection:bg-gold-400 selection:text-herbal-950">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <CartDrawer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
