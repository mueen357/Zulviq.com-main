import React from "react";
import { Leaf, ShieldAlert, Truck, Banknote, UserCheck } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: Leaf,
      title: "100% Natural Herbs",
      subtitle: "Cold-pressed extraction",
    },
    {
      icon: ShieldAlert,
      title: "Zero Harmful Chemicals",
      subtitle: "No parabens or silicones",
    },
    {
      icon: Banknote,
      title: "Cash on Delivery",
      subtitle: "Bank Transfer & COD",
    },
    {
      icon: Truck,
      title: "Free Shipping 2+ Bottles",
      subtitle: "2-4 days across Pakistan",
    },
    {
      icon: UserCheck,
      title: "For Men & Women",
      subtitle: "Safe for all hair textures",
    },
  ];

  return (
    <section className="bg-cream-50 border-b border-cream-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-cream-100/60 border border-cream-200/80 transition-all hover:bg-cream-100 hover:shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-herbal-100/80 text-herbal-800 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-herbal-950 leading-snug">{badge.title}</h3>
                  <p className="text-[11px] text-charcoal-600">{badge.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
