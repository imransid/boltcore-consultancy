"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "K+", label: "Satisfied Clients" },
  { value: 200, suffix: "+", label: "Case Success" },
  { value: 1500, suffix: "+", label: "Country Cover" },
];

function StatItem({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    if (!start || animated.current) return;
    animated.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(
          value >= 10 ? Math.floor(current) : Math.round(current * 10) / 10
        );
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, start]);

  return (
    <div className="text-center text-white">
      <div className="text-4xl sm:text-5xl font-bold mb-2">
        {displayValue}
        {suffix}
      </div>
      <div className="text-white/90 font-medium">{label}</div>
    </div>
  );
}

export default function Theme2Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="py-16 lg:py-20 bg-[#F05A4E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
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
