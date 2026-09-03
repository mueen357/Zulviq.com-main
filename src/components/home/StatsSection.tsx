"use client";

import React, { useEffect, useState, useRef } from "react";

interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      id: "bottles",
      value: 35000,
      suffix: "+",
      label: "Bottles Delivered",
      description: "Across Karachi, Lahore, Islamabad & 120+ cities in Pakistan",
    },
    {
      id: "rating",
      value: 4.9,
      suffix: "★",
      label: "Average Rating",
      description: "Based on 380+ verified customer reviews",
    },
    {
      id: "herbs",
      value: 14,
      suffix: "+",
      label: "Pure Botanical Herbs",
      description: "Slow-infused in small batches for bio-active potency",
    },
    {
      id: "retention",
      value: 94,
      suffix: "%",
      label: "Noticeable Fall Reduction",
      description: "Reported by customers within 3 to 4 weeks of use",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 sm:py-20 bg-cream-200/60 text-charcoal-900 border-y border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="space-y-2 flex flex-col items-center">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-herbal-700">
                <Counter target={stat.value} isDecimal={stat.value % 1 !== 0} start={hasAnimated} />
                <span>{stat.suffix}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-herbal-950">{stat.label}</h3>
              <p className="text-[11px] sm:text-xs text-charcoal-600 max-w-xs">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({
  target,
  isDecimal,
  start,
}: {
  target: number;
  isDecimal: boolean;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const duration = 1800; // ms

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * target;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [start, target]);

  if (isDecimal) {
    return <span>{count.toFixed(1)}</span>;
  }

  return <span>{Math.floor(count).toLocaleString("en-PK")}</span>;
}
