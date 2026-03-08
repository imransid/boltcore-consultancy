"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Your Journey to Success",
    subtitle: "Begins Here",
    description:
      "Expert immigration and student consultancy services. We guide you through every step of your visa and study abroad journey.",
    bgImage: "linear-gradient(135deg, rgba(12,74,110,0.9) 0%, rgba(8,47,73,0.95) 100%)",
    overlay: "bg-gradient-to-br from-[#0c4a6e]/95 via-[#082f49]/90 to-slate-900/95",
  },
  {
    title: "Visa Solutions",
    subtitle: "That Work",
    description:
      "Comprehensive visa assistance for work, study, family reunification, and skilled migration. Trusted by thousands worldwide.",
    bgImage: "linear-gradient(135deg, rgba(12,74,110,0.9) 0%, rgba(8,47,73,0.95) 100%)",
    overlay: "bg-gradient-to-br from-[#0c4a6e]/95 via-[#082f49]/90 to-slate-900/95",
  },
  {
    title: "Study Abroad",
    subtitle: "Dream Big",
    description:
      "Top university placements, scholarship guidance, and student visa support. Your academic future is our priority.",
    bgImage: "linear-gradient(135deg, rgba(12,74,110,0.9) 0%, rgba(8,47,73,0.95) 100%)",
    overlay: "bg-gradient-to-br from-[#0c4a6e]/95 via-[#082f49]/90 to-slate-900/95",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')",
          }}
        />
        <div className={`absolute inset-0 transition-opacity duration-1000 ${slides[currentSlide].overlay}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-6">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {slides[currentSlide].title}{" "}
            <span className="text-[#d4af37]">{slides[currentSlide].subtitle}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d4af37] text-[#0c4a6e] font-semibold rounded-lg hover:bg-[#e8c547] transition-all shadow-lg"
            >
              Get Started <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide ? "bg-[#d4af37] w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
