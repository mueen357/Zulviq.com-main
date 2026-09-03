# Zulviq Herbal Botanicals – Official E-Commerce Website

A modern, high-converting, SEO-optimized e-commerce website for **Zulviq**, a premium herbal hair care brand formulated with cold-pressed botanicals for hair fall reduction, scalp health, and hair regrowth.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, pre-configured for static export and deployment on **Cloudflare Pages**.

---

## 🌿 Tech Stack & Architecture

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with custom organic herbal and gold palette tokens
- **Icons:** `lucide-react`
- **Fonts:** Google Fonts via `next/font` (`Playfair Display` for serif headings and `Plus Jakarta Sans` for body text)
- **State Management:** React Context (`CartContext`) with `localStorage` persistence
- **Deployment Target:** **Cloudflare Pages** (Static HTML Export `output: 'export'`)
  - Full SEO and Google schema capabilities pre-rendered at build time
  - Zero server cold starts, 100% edge cached across 300+ Cloudflare edge locations worldwide
  - No database or Node.js runtime required for manual order processing

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.x or 20.x+
- npm (or pnpm / yarn)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build Static Export (Cloudflare Pages Ready)
```bash
npm run build
```
This will compile the entire application into pure static HTML, CSS, JavaScript, and JSON-LD schemas inside the `out/` directory.

You can preview the production static build locally using:
```bash
npx serve out
```

---

## 📦 How to Add New Products

The product architecture is completely decoupled from UI presentation. To introduce a new product (e.g., *Zulviq Herbal Shampoo* or *Zulviq Hair Serum*):

1. Open `src/data/products.ts`.
2. Add a new object to the `products` array conforming to the `Product` interface in `src/types/index.ts`:

```typescript
{
  id: "zulviq-herbal-shampoo-250ml",
  slug: "zulviq-herbal-shampoo",
  name: "Zulviq Scalp Clarifying Herbal Shampoo",
  tagline: "Sulfate-Free Cold-Infused Botanical Hair Cleanse",
  badge: "New Arrival",
  price: 1850,
  originalPrice: 2400,
  discountPercent: 23,
  rating: 5.0,
  reviewCount: 24,
  inStock: true,
  volume: "250 ml",
  shortDescription: "...",
  fullDescription: "...",
  images: [
    { url: "/images/shampoo-front.jpg", alt: "Zulviq Herbal Shampoo", title: "Front Bottle" }
  ],
  keyBenefits: [ ... ],
  ingredients: [ ... ],
  howToUse: [ ... ],
  timeline: [ ... ],
  bundles: [
    {
      id: "shampoo-single",
      name: "Single Bottle (250ml)",
      bottles: 1,
      price: 1850,
      originalPrice: 2400,
      savings: 550,
      perBottlePrice: 1850,
    }
  ],
  faqs: [ ... ],
  reviews: [ ... ],
}
```

3. Re-run `npm run build`. Next.js `generateStaticParams()` will automatically generate:
   - `/products/zulviq-herbal-shampoo/`
   - Schema.org Product markup
   - Updated `sitemap.xml` entries

---

## ☁️ Deploying to Cloudflare Pages

### Option A: Via GitHub (Recommended)
1. Push this repository to GitHub or GitLab.
2. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Configure build settings:
   - **Framework preset:** `Next.js (Static HTML Export)` or `None`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version:** Set Environment Variable `NODE_VERSION` to `20` or higher.
5. Click **Save and Deploy**. Cloudflare Pages will build and deploy your site to a free `*.pages.dev` subdomain with automatic SSL and CDN caching.

### Option B: Via Wrangler CLI
```bash
npm run build
npx wrangler pages deploy out --project-name=zulviq
```

---

## 🔌 Connecting a Real Backend (Future Scaling)

The application currently uses a client-side cart + Bank Transfer screenshot upload + pre-filled WhatsApp order generation flow.

To connect a serverless backend or transactional email service without redesigning the frontend:

### 1. Payment Screenshot Upload (Cloudflare R2)
In `src/app/checkout/page.tsx`, update `handleSubmitOrder`:
- Send the `proofFile` via `FormData` to a Cloudflare Worker or Next.js API route that writes to a Cloudflare R2 bucket.

### 2. Database Storage (Cloudflare D1 / Supabase / Neon)
In `src/app/checkout/page.tsx`, post the `newOrder` object to a REST API endpoint to insert the order record into a SQL table.

### 3. Automated Notifications (Resend / WhatsApp Business API)
In your order handler, send an instant email notification to `orders@zulviq.com` using [Resend](https://resend.com):
```typescript
await resend.emails.send({
  from: 'Zulviq Orders <orders@zulviq.com>',
  to: ['support@zulviq.com', order.customer.email],
  subject: `New Order ${order.id} - Rs. ${order.total}`,
  html: `<p>Customer: ${order.customer.fullName} (${order.customer.phone})</p>...`
});
```

---

## 🔍 SEO & Structured Data Implementation

- **Google Guidelines Compliant:** Pre-rendered HTML for search engine crawlers.
- **Structured Data (Schema.org / JSON-LD):**
  - `Organization` in root layout
  - `WebSite` in root layout
  - `Product` with price, currency (PKR), availability, and reviews on `/products/zulviq-herbal-hair-oil/`
  - `FAQPage` on homepage FAQ accordion
  - `BreadcrumbList` on all product and legal pages
- **Canonical URLs:** Configured on every single route.
- **Sitemap & Robots:** Auto-generated via `src/app/sitemap.ts` and `src/app/robots.ts`.
