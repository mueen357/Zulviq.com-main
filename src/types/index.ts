export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge?: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  volume: string;
  shortDescription: string;
  fullDescription: string;
  images: {
    url: string;
    alt: string;
    title: string;
  }[];
  keyBenefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  ingredients: {
    name: string;
    botanicalName: string;
    role: string;
    description: string;
  }[];
  howToUse: {
    step: number;
    title: string;
    instruction: string;
    tip?: string;
  }[];
  timeline: {
    period: string;
    title: string;
    description: string;
  }[];
  bundles: Bundle[];
  faqs: {
    question: string;
    answer: string;
  }[];
  reviews: Review[];
}

export interface Bundle {
  id: string;
  name: string;
  bottles: number;
  price: number;
  originalPrice: number;
  savings: number;
  badge?: string;
  perBottlePrice: number;
  freeGift?: string;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  content: string;
}

export interface CartItem {
  id: string; // product.id + bundle.id
  product: Product;
  bundle: Bundle;
  quantity: number;
}

export interface CustomerInfo {
  fullName: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  province: string;
  notes?: string;
}

export interface Order {
  id: string;
  customer: CustomerInfo;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: "bank_transfer" | "cod";
  paymentProofUrl?: string;
  paymentProofName?: string;
  status: "pending" | "confirmed";
  createdAt: string;
}
