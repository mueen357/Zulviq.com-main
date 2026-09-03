"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Building2,
  Copy,
  Check,
  UploadCloud,
  FileText,
  Trash2,
  MessageCircle,
  Sparkles,
  ArrowLeft,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { Order, CustomerInfo } from "@/types";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { getWhatsAppOrderConfirmationUrl } from "@/lib/whatsapp";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();

  // Form State
  const [formData, setFormData] = useState<CustomerInfo>({
    fullName: "",
    phone: "",
    address: "",
    city: "Lahore",
    province: "Punjab",
    notes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<"bank_transfer" | "cod">("bank_transfer");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // File Upload State
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [proofPreviewUrl, setProofPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const FREE_SHIPPING_THRESHOLD = 3000;
  const isFreeShipping = cartTotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = cart.length === 0 ? 0 : isFreeShipping ? 0 : 199;
  const grandTotal = cartTotal + shippingFee;

  // Copy to clipboard helper
  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2500);
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrorMsg("Please upload an image file (JPG, PNG, WebP).");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg("File size must be under 10MB.");
        return;
      }
      setErrorMsg(null);
      setProofFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setProofPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeProof = () => {
    setProofFile(null);
    setProofPreviewUrl(null);
  };

  // Submit Order
  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Form validation
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setErrorMsg("Please fill in all required delivery details.");
      return;
    }

    if (cart.length === 0) {
      setErrorMsg("Your cart is empty. Please add products before placing an order.");
      return;
    }

    setIsSubmitting(true);

    const orderId = `ZLQ-${Math.floor(10000 + Math.random() * 90000)}`;

    const newOrder: Order = {
      id: orderId,
      customer: formData,
      items: cart,
      subtotal: cartTotal,
      shipping: shippingFee,
      total: grandTotal,
      paymentMethod,
      paymentProofUrl: proofPreviewUrl || undefined,
      paymentProofName: proofFile?.name || undefined,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    /*
     * --------------------------------------------------------------------------
     * BACKEND INTEGRATION HOOK (FOR PRODUCTION)
     * --------------------------------------------------------------------------
     * When ready to connect to a production backend:
     * 1. Send `newOrder` and `proofFile` to a Cloudflare Worker API endpoint
     *    (e.g., fetch('/api/orders', { method: 'POST', body: formData }))
     * 2. Save order in Cloudflare D1 database or PostgreSQL.
     * 3. Send automated confirmation email using Resend / SendGrid / Postmark.
     * 4. Upload payment screenshot to Cloudflare R2 bucket.
     * --------------------------------------------------------------------------
     */

    try {
      // Save order to localStorage for tracking & confirmation display
      localStorage.setItem("zulviq_last_order", JSON.stringify(newOrder));

      // Clear the active cart
      clearCart();

      // Navigate to order confirmation page
      router.push(`/order-confirmation?orderId=${orderId}`);
    } catch (err) {
      console.error("Order submission error:", err);
      setIsSubmitting(false);
      setErrorMsg("Failed to place order. Please try again or order directly on WhatsApp.");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 bg-cream-100 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-herbal-950">Your cart is empty</h2>
        <p className="text-xs text-charcoal-600">Please add Zulviq Herbal Hair Oil to your cart first.</p>
        <Link
          href="/products/zulviq-herbal-hair-oil"
          className="bg-herbal-800 text-cream-50 text-xs font-bold px-6 py-3 rounded-xl"
        >
          View Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream-100 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Cart", href: "/cart" },
            { label: "Checkout" },
          ]}
        />

        <div className="border-b border-cream-200 pb-4">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-herbal-950">
            Secure Checkout
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
            Complete your delivery details and choose your preferred payment option.
          </p>
        </div>

        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-800 text-xs p-4 rounded-xl font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmitOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Delivery Form & Payment Method */}
            <div className="lg:col-span-7 space-y-6">
              {/* Delivery Details Card */}
              <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-xs space-y-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h2 className="font-serif text-xl font-bold text-herbal-950">Delivery Information</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2 space-y-1">
                    <label className="block text-xs font-bold text-charcoal-800">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayesha Malik"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-cream-100/80 border border-cream-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="block text-xs font-bold text-charcoal-800">
                      WhatsApp / Mobile Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-cream-100/80 border border-cream-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-gold-500"
                    />
                    <p className="text-[11px] text-charcoal-500">
                      Our courier will contact you on this number before delivery.
                    </p>
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="block text-xs font-bold text-charcoal-800">
                      Complete Street Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="House/Apartment #, Street name, Area/Sector"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-cream-100/80 border border-cream-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal-800">
                      City <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lahore"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-cream-100/80 border border-cream-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal-800">Province</label>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full bg-cream-100/80 border border-cream-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-gold-500"
                    >
                      <option value="Punjab">Punjab</option>
                      <option value="Sindh">Sindh</option>
                      <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                      <option value="Islamabad Capital Territory">Islamabad Capital Territory</option>
                      <option value="Balochistan">Balochistan</option>
                      <option value="Azad Kashmir">Azad Kashmir</option>
                      <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="block text-xs font-bold text-charcoal-800">
                      Order Instructions or Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Near City Hospital or Deliver between 2 PM to 5 PM"
                      value={formData.notes || ""}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-cream-100/80 border border-cream-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selection Card */}
              <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-xs space-y-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-herbal-100 text-herbal-800 flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <h2 className="font-serif text-xl font-bold text-herbal-950">Payment Method</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Bank Transfer Option */}
                  <label
                    className={`cursor-pointer p-4 rounded-2xl border-2 flex items-start gap-3 transition-all ${
                      paymentMethod === "bank_transfer"
                        ? "bg-cream-100 border-gold-500 shadow-xs ring-1 ring-gold-300"
                        : "bg-cream-50 border-cream-300 hover:border-cream-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank_transfer"
                      checked={paymentMethod === "bank_transfer"}
                      onChange={() => setPaymentMethod("bank_transfer")}
                      className="mt-1 text-gold-600 focus:ring-gold-500"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-herbal-800" />
                        <span className="text-xs font-bold text-herbal-950">Direct Bank Transfer</span>
                      </div>
                      <p className="text-[11px] text-charcoal-600 mt-1">
                        Transfer via Meezan, Nayapay, SadaPay, or Raast & upload receipt.
                      </p>
                    </div>
                  </label>

                  {/* Cash on Delivery Option */}
                  <label
                    className={`cursor-pointer p-4 rounded-2xl border-2 flex items-start gap-3 transition-all ${
                      paymentMethod === "cod"
                        ? "bg-cream-100 border-gold-500 shadow-xs ring-1 ring-gold-300"
                        : "bg-cream-50 border-cream-300 hover:border-cream-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="mt-1 text-gold-600 focus:ring-gold-500"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-emerald-700" />
                        <span className="text-xs font-bold text-herbal-950">Cash on Delivery (COD)</span>
                      </div>
                      <p className="text-[11px] text-charcoal-600 mt-1">
                        Pay cash directly to the courier rider upon delivery.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Bank Account Details Display (When Bank Transfer is selected) */}
                {paymentMethod === "bank_transfer" && (
                  <div className="pt-3 space-y-4">
                    <div className="bg-herbal-950 text-cream-100 p-5 rounded-2xl border border-herbal-850 space-y-4">
                      <div className="flex items-center justify-between border-b border-herbal-850 pb-3">
                        <div>
                          <h3 className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                            Official Bank Account Details
                          </h3>
                          <p className="text-[11px] text-herbal-300">
                            Transfer exact total <strong className="text-cream-50">{formatPrice(grandTotal)}</strong> to:
                          </p>
                        </div>
                        <Building2 className="w-5 h-5 text-gold-400" />
                      </div>

                      {/* Meezan Bank Details */}
                      <div className="space-y-2.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-herbal-300">Bank:</span>
                          <span className="font-bold text-cream-50">Meezan Bank Ltd.</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-herbal-300">Account Title:</span>
                          <span className="font-bold text-cream-50">Zulviq Natural Wellness</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-herbal-300">Account Number:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-gold-300">0102-0105829102</span>
                            <button
                              type="button"
                              onClick={() => copyToClipboard("01020105829102", "acc")}
                              className="text-herbal-300 hover:text-gold-300 transition-colors p-1"
                              title="Copy Account Number"
                            >
                              {copiedField === "acc" ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-herbal-300">IBAN:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] font-bold text-gold-300">
                              PK42MEZN0001020105829102
                            </span>
                            <button
                              type="button"
                              onClick={() => copyToClipboard("PK42MEZN0001020105829102", "iban")}
                              className="text-herbal-300 hover:text-gold-300 transition-colors p-1"
                              title="Copy IBAN"
                            >
                              {copiedField === "iban" ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-herbal-850/80 pt-2 text-[11px]">
                          <span className="text-herbal-300">Raast / Nayapay / SadaPay:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-gold-300">0313 6221191</span>
                            <button
                              type="button"
                              onClick={() => copyToClipboard("03136221191", "raast")}
                              className="text-herbal-300 hover:text-gold-300 transition-colors p-1"
                              title="Copy Number"
                            >
                              {copiedField === "raast" ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Screenshot Upload Field */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-charcoal-800">
                        Upload Payment Screenshot / Transfer Receipt
                      </label>

                      {proofPreviewUrl ? (
                        <div className="p-4 rounded-2xl bg-cream-100 border border-cream-300 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-lg bg-cream-200 overflow-hidden shrink-0 border border-cream-300">
                              <Image
                                src={proofPreviewUrl}
                                alt="Payment Proof"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-herbal-950 line-clamp-1">
                                {proofFile?.name}
                              </p>
                              <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                                <Check className="w-3 h-3" /> Screenshot Attached
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removeProof}
                            className="text-charcoal-400 hover:text-red-600 p-2 transition-colors"
                            title="Remove Screenshot"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <label className="border-2 border-dashed border-cream-300 hover:border-gold-500 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer bg-cream-100/60 hover:bg-cream-100 transition-all text-center group">
                          <UploadCloud className="w-8 h-8 text-charcoal-400 group-hover:text-gold-600 transition-colors" />
                          <span className="text-xs font-bold text-herbal-900 mt-2">
                            Click to upload payment screenshot
                          </span>
                          <span className="text-[11px] text-charcoal-500 mt-0.5">
                            PNG, JPG or WebP (Max 10MB)
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      )}

                      <p className="text-[11px] text-charcoal-500 italic">
                        Note: You can also send the receipt screenshot directly to our WhatsApp number with your Order ID.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Order Summary & Confirmation CTA */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-cream-50 rounded-3xl p-6 sm:p-7 border border-cream-300 shadow-sm space-y-5 sticky top-28">
                <h3 className="font-serif text-xl font-bold text-herbal-950 border-b border-cream-200 pb-3">
                  Your Order Breakdown
                </h3>

                {/* Items preview list */}
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-10 h-10 rounded-lg bg-cream-200 overflow-hidden shrink-0 border border-cream-300">
                          <Image
                            src={item.product.images[0]?.url || "/images/zulviq-bottle-front.jpg"}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-herbal-950 line-clamp-1">{item.product.name}</h4>
                          <p className="text-[11px] text-charcoal-600">
                            {item.bundle.name} x{item.quantity}
                          </p>
                        </div>
                      </div>
                      <span className="font-serif font-bold text-herbal-900 shrink-0">
                        {formatPrice(item.bundle.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Subtotals & Grand Total */}
                <div className="space-y-2 text-xs pt-3 border-t border-cream-200">
                  <div className="flex justify-between text-charcoal-700">
                    <span>Subtotal</span>
                    <span className="font-semibold text-herbal-950">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-700">
                    <span>Shipping</span>
                    <span className={isFreeShipping ? "font-bold text-emerald-700" : "font-semibold text-herbal-950"}>
                      {isFreeShipping ? "FREE" : formatPrice(shippingFee)}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-cream-200 flex justify-between items-baseline">
                    <span className="font-bold text-herbal-950 text-base">Total Payable</span>
                    <span className="font-serif font-bold text-2xl text-herbal-900">
                      {formatPrice(grandTotal)}
                    </span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-herbal-800 hover:bg-herbal-900 text-cream-50 font-bold py-4 rounded-xl shadow-lg transition-all text-sm tracking-wide disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Placing Your Order...</span>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>Confirm & Place Order</span>
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <span className="text-[11px] text-charcoal-500">or</span>
                  </div>

                  {/* Direct WhatsApp Alternative Order button */}
                  <a
                    href={getWhatsAppOrderConfirmationUrl({
                      id: `ZLQ-DIRECT`,
                      customer: formData,
                      items: cart,
                      subtotal: cartTotal,
                      shipping: shippingFee,
                      total: grandTotal,
                      paymentMethod,
                      status: "pending",
                      createdAt: new Date().toISOString(),
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 rounded-xl shadow-md transition-all text-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Place Order via WhatsApp Chat
                  </a>
                </div>

                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-charcoal-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Secure Checkout & Order Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
