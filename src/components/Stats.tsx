"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Happy Clients" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Countries" },
];

function StatItem({
  end,
  suffix,
  label,
  start,
}: {
  end: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!start || animatedRef.current) return;
    animatedRef.current = true;
    startTime.current = null;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / 2000, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, start]);

  return (
    <div className="text-center">
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#d4af37] mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-600 font-medium">{label}</div>
    </div>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              end={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              start={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
