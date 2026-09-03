import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "zulviq-herbal-hair-oil-120ml",
    slug: "zulviq-herbal-hair-oil",
    name: "Zulviq Herbal Hair Oil",
    tagline: "Pure Cold-Pressed Botanical Elixir for Visible Hair Growth & Fall Control",
    badge: "Bestseller — 100% Herbal",
    price: 2450,
    originalPrice: 3200,
    discountPercent: 23,
    rating: 4.9,
    reviewCount: 384,
    inStock: true,
    volume: "120 ml / 4.05 fl. oz.",
    shortDescription:
      "A potent Ayurvedic-inspired botanical formulation infused with 14 organic herbs, cold-pressed oils, and pure essential plant actives. Formulated to awaken dormant follicles, drastically reduce hair fall within 21 days, nourish an itchy scalp, and stimulate resilient new hair growth.",
    fullDescription:
      "Zulviq Herbal Hair Oil is crafted through an age-old slow infusion process where handpicked medicinal herbs are gently steeped in cold-pressed virgin oils to extract maximum bio-active potency. Free from mineral oils, parabens, silicones, and artificial fragrances, this non-greasy elixir deeply penetrates your scalp to reinforce hair roots, reverse follicle miniaturization, and restore voluminous natural shine for both men and women.",
    images: [
      {
        url: "/images/zulviq-bottle-front.jpg",
        alt: "Zulviq Herbal Hair Oil 120ml Amber Glass Dropper Bottle on Stone Slab",
        title: "Zulviq Flagship Herbal Hair Oil Bottle",
      },
      {
        url: "/images/zulviq-bottle-box.jpg",
        alt: "Zulviq Herbal Hair Oil with Luxury Forest Green and Gold Foil Packaging Box",
        title: "Zulviq Bottle & Premium Packaging",
      },
      {
        url: "/images/zulviq-oil-dropper.jpg",
        alt: "Macro Close-up of Golden Zulviq Herbal Hair Oil Dropper Dispensing Pure Botanical Elixir",
        title: "Pure Golden Botanical Extract Dropper",
      },
    ],
    keyBenefits: [
      {
        title: "Halts Excessive Hair Fall",
        description:
          "Clinically proven botanicals strengthen the dermal papilla, reducing hair shedding by up to 85% within 3 to 4 weeks of regular use.",
        icon: "ShieldAlert",
      },
      {
        title: "Stimulates Rapid New Growth",
        description:
          "Stimulates scalp micro-circulation and delivers concentrated phytonutrients that awaken dormant follicles to fill sparse areas.",
        icon: "TrendingUp",
      },
      {
        title: "Deeply Strengthens Roots & Shaft",
        description:
          "Rich in organic sulfur, fatty acids, and essential vitamins that reinforce the hair's keratin structure, drastically reducing split ends and breakage.",
        icon: "Sparkles",
      },
      {
        title: "Heals & Soothes Scalp Health",
        description:
          "Natural antibacterial and antifungal properties eliminate dandruff, combat flakes, balance excess sebum, and soothe scalp irritation.",
        icon: "HeartPulse",
      },
      {
        title: "Restores Natural Lustre & Softness",
        description:
          "Replenishes moisture to dry, coarse, or heat-damaged hair without leaving a greasy or heavy residue, leaving locks silky and vibrant.",
        icon: "Sun",
      },
      {
        title: "100% Pure, Zero Chemicals",
        description:
          "Formulated with zero sulfates, parabens, phthalates, mineral oils, artificial colours, or synthetic perfumes. Safe for sensitive skin.",
        icon: "Leaf",
      },
    ],
    ingredients: [
      {
        name: "Bhringraj (King of Herbs)",
        botanicalName: "Eclipta Alba",
        role: "Follicle Reactivator",
        description:
          "Celebrated in herbal texts for centuries, Bhringraj extends the anagen (growth) phase of hair follicles and boosts blood flow to sluggish roots.",
      },
      {
        name: "Fresh Amla",
        botanicalName: "Phyllanthus Emblica",
        role: "Vitamin C & Collagen Booster",
        description:
          "A potent source of tannins and Vitamin C, Amla prevents oxidative stress, strengthens collagen matrices around roots, and delays premature greying.",
      },
      {
        name: "Rosemary Leaf Extract",
        botanicalName: "Rosmarinus Officinalis",
        role: "Natural DHT Blocker",
        description:
          "Clinically recognized to rival conventional hair restoration ingredients by increasing cellular turnover and inhibiting DHT-induced follicle shrinkage.",
      },
      {
        name: "Cold-Pressed Kalonji (Black Seed)",
        botanicalName: "Nigella Sativa",
        role: "Antioxidant & Scalp Healer",
        description:
          "Packed with thymoquinone and essential nigellone, black seed oil relieves scalp inflammation, balances sebum, and repairs damaged hair fibers.",
      },
      {
        name: "Pure Castor Oil",
        botanicalName: "Ricinus Communis",
        role: "Keratin Density Builder",
        description:
          "Dense with ricinoleic acid and omega-9 fatty acids, castor oil seals moisture into the cuticle, coats strands to prevent breakage, and encourages thick growth.",
      },
      {
        name: "Red Onion Extract",
        botanicalName: "Allium Cepa",
        role: "Sulfur Strengthening Agent",
        description:
          "Supplies dietary sulfur vital for synthesizing strong keratin bonds, reducing follicle breakage and visibly thickening thinning hair lines.",
      },
      {
        name: "Fenugreek (Methi) Seeds",
        botanicalName: "Trigonella Foenum-Graecum",
        role: "Protein Replenisher",
        description:
          "Rich in plant proteins, lecithin, and nicotinic acid to mend brittle, heat-treated hair and create a protective barrier against humidity.",
      },
      {
        name: "Virgin Coconut & Sweet Almond Base",
        botanicalName: "Cocos Nucifera & Prunus Dulcis",
        role: "Deep Penetrating Lipid Carrier",
        description:
          "Unrefined cold-pressed carrier oils with low molecular weight that transport the active herbal botanicals deep into the cortex rather than sitting on the surface.",
      },
    ],
    howToUse: [
      {
        step: 1,
        title: "Dispense & Warm",
        instruction:
          "Use the targeted glass dropper to dispense 5 to 10 ml of Zulviq Herbal Hair Oil into your palms. Gently rub your hands together to warm the botanical actives.",
        tip: "Slightly warming the oil enhances cuticle permeability and nutrient absorption.",
      },
      {
        step: 2,
        title: "Stimulating Scalp Massage",
        instruction:
          "Part your hair into manageable sections and apply the oil directly onto your scalp. Use your fingertips to massage in firm, circular motions for 5 to 10 minutes.",
        tip: "Focus extra attention on thinning spots, the crown, and the receding hairline.",
      },
      {
        step: 3,
        title: "Coat Lengths & Ends",
        instruction:
          "Smooth any remaining oil down the length of your hair strands to the very tips to seal split ends and create a moisture barrier against environmental pollutants.",
      },
      {
        step: 4,
        title: "Rest & Cleanse",
        instruction:
          "Leave the oil in for a minimum of 2 hours, or leave it overnight wrapped in a soft silk or satin scarf for intensive repair. Wash thoroughly with a mild sulfate-free shampoo.",
        tip: "Use 2 to 3 times weekly consistently for best visible results.",
      },
    ],
    timeline: [
      {
        period: "Week 1 - 2",
        title: "Scalp Detox & Hydration",
        description:
          "Scalp dryness, itchiness, and flakes subside. The roots feel deeply nourished, excess oiliness is balanced, and hair feels noticeably softer with a healthy sheen.",
      },
      {
        period: "Week 3 - 4",
        title: "Significant Hair Fall Reduction",
        description:
          "You will notice far fewer loose strands in your shower drain, comb, and pillow. Follicles grip tighter as the root anchor points regain structural strength.",
      },
      {
        period: "Week 6 - 8",
        title: "New Baby Hair & Density",
        description:
          "Fine baby hairs begin sprouting along the hairline, parting line, and crown. Overall hair shaft thickness improves, and hair feels denser when tied.",
      },
      {
        period: "Week 10 - 12+",
        title: "Full Volume & Long-Term Health",
        description:
          "Noticeable transformation in hair volume, bounce, and strength. Continued maintenance usage keeps the scalp rejuvenated and locks resilient against environmental stress.",
      },
    ],
    bundles: [
      {
        id: "single-120ml",
        name: "Starter Supply (1 Bottle)",
        bottles: 1,
        price: 2450,
        originalPrice: 3200,
        savings: 750,
        perBottlePrice: 2450,
        badge: "1 Month Supply",
      },
      {
        id: "duo-240ml",
        name: "Regrowth Pack (2 Bottles)",
        bottles: 2,
        price: 4450,
        originalPrice: 6400,
        savings: 1950,
        perBottlePrice: 2225,
        badge: "Most Popular — Save Rs. 1,950",
      },
      {
        id: "trio-360ml",
        name: "Ultimate Transformation (3 Bottles)",
        bottles: 3,
        price: 5950,
        originalPrice: 9600,
        savings: 3650,
        perBottlePrice: 1983,
        badge: "Best Value — Save Rs. 3,650",
        freeGift: "Free Herbal Scalp Stimulator Brush included",
      },
    ],
    faqs: [
      {
        question: "How quickly can I expect to see visible results with Zulviq?",
        answer:
          "Most customers notice a dramatic reduction in hair fall and a calmer, flake-free scalp within 2 to 3 weeks of consistent application (2-3 times per week). Visible new baby hair and increased hair thickness typically begin showing between weeks 6 and 8 as dormant follicles re-enter their active growth phase.",
      },
      {
        question: "Is Zulviq Herbal Hair Oil safe for color-treated or chemically straightened hair?",
        answer:
          "Yes, absolutely. Zulviq contains 100% natural, cold-pressed plant extracts with zero sulfates, mineral oils, or harsh synthetic preservatives. It does not strip hair color; in fact, the natural antioxidants in Amla and Rosemary help seal the hair cuticle, preventing color fading and restoring moisture lost during chemical treatments.",
      },
      {
        question: "How often should I apply Zulviq Herbal Hair Oil?",
        answer:
          "For optimal hair regrowth and fall control, we recommend applying Zulviq 2 to 3 times per week. Leave it on for at least 2 hours, or leave it overnight for deeper scalp therapy before washing with a gentle herbal shampoo.",
      },
      {
        question: "Is this hair oil suitable for both men and women?",
        answer:
          "Yes! Zulviq's botanical formulation is engineered to address the underlying root causes of thinning and shedding common to both men (such as receding hairlines and crown thinning) and women (post-partum shedding, hormonal thinning, and stress-related hair fall).",
      },
      {
        question: "How do you deliver across Pakistan, and what are the shipping charges?",
        answer:
          "We offer fast, tracked courier delivery across all cities and towns in Pakistan (including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, and more). Delivery typically takes 2 to 4 business days. Delivery is completely FREE on orders over Rs. 3,000 (such as our 2-bottle and 3-bottle bundles) or Rs. 199 for a single bottle.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We offer convenient Direct Bank Transfer (Meezan Bank, Nayapay, SadaPay, Raast) where you can easily upload your payment screenshot during checkout, as well as Cash on Delivery (COD) for orders placed directly through our WhatsApp hotline.",
      },
      {
        question: "What is your return and satisfaction policy?",
        answer:
          "We stand firmly behind the authenticity and quality of Zulviq. If your order arrives damaged, leaking, or incorrect, contact our WhatsApp support team within 7 days of delivery with your order ID and photos, and we will send a free replacement or full refund immediately.",
      },
      {
        question: "Does the oil have a strong chemical smell?",
        answer:
          "No. Zulviq does not contain any artificial perfumes or synthetic deodorizers. It carries a pleasant, calming, natural herbal scent derived directly from fresh rosemary, black seed, and botanical oils.",
      },
    ],
    reviews: [
      {
        id: "rev-1",
        author: "Ayesha Malik",
        city: "Lahore",
        rating: 5,
        date: "August 24, 2026",
        verified: true,
        title: "Hair fall reduced by 80% in just 3 weeks!",
        content:
          "I was dealing with severe postpartum hair fall and had loose strands everywhere. A friend recommended Zulviq, and within 3 weeks of using it twice weekly, my shower drain was practically clear. The non-sticky texture and herbal aroma are so soothing.",
      },
      {
        id: "rev-2",
        author: "Hamza Tariq",
        city: "Islamabad",
        rating: 5,
        date: "August 18, 2026",
        verified: true,
        title: "Visible baby hair along my receding temples",
        content:
          "As a guy in my late 20s, I noticed my hairline starting to thin out. I ordered the 2-bottle bundle and massage it every alternate night. After 7 weeks, fine new baby hairs have started sprouting along my forehead and temples. Truly natural and genuinely works.",
      },
      {
        id: "rev-3",
        author: "Fatima Noor",
        city: "Karachi",
        rating: 5,
        date: "August 11, 2026",
        verified: true,
        title: "Cured my stubborn dandruff and added unbelievable shine",
        content:
          "Karachi's humid weather and hard tap water ruined my scalp with flaking and dryness. Zulviq healed the itchiness after the first 2 applications. My hair now looks glossy and feels so strong. Best herbal oil in Pakistan hands down.",
      },
      {
        id: "rev-4",
        author: "Zainab Raza",
        city: "Faisalabad",
        rating: 5,
        date: "July 29, 2026",
        verified: true,
        title: "Premium packaging, prompt delivery, and amazing results",
        content:
          "The packaging feels so luxury and high-end! The dropper makes application mess-free. I bought the 3-bottle pack with the free scalp brush and it has transformed my entire hair care routine. Customer service on WhatsApp was super helpful too.",
      },
      {
        id: "rev-5",
        author: "Bilal Ahmed",
        city: "Rawalpindi",
        rating: 5,
        date: "July 15, 2026",
        verified: true,
        title: "Zero chemicals, pure herbal goodness",
        content:
          "You can immediately tell by the authentic herbal color and mild natural aroma that there are no synthetic perfumes or mineral oil fillers here. It rinses off cleanly with mild shampoo without leaving grease. Highly recommended.",
      },
    ],
  },
];

// Helper functions for easy extensibility
export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProduct(): Product {
  return products[0];
}
