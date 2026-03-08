"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    location: "Toronto, Canada",
    content:
      "Immidox made my work visa process seamless. Their team was professional, responsive, and guided me through every document. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Ahmed Hassan",
    role: "MBA Student",
    location: "London, UK",
    content:
      "The student consultancy team helped me secure admission to my dream university with a scholarship. They exceeded my expectations in every way.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Maria Garcia",
    role: "Family Reunification",
    location: "Sydney, Australia",
    content:
      "After years of separation, Immidox helped reunite our family. Their expertise and compassion made a difficult process manageable. Thank you!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/20 text-[#0c4a6e] font-semibold rounded-full text-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600">
            Trusted by thousands of individuals and families worldwide.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 shadow-lg border border-slate-100">
            <Quote className="w-12 h-12 text-[#d4af37]/50 mb-6" />
            <p className="text-xl sm:text-2xl text-slate-700 mb-8 leading-relaxed">
              &ldquo;{testimonials[current].content}&rdquo;
            </p>
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url('${testimonials[current].image}')` }}
              />
              <div>
                <div className="font-semibold text-slate-900">
                  {testimonials[current].name}
                </div>
                <div className="text-slate-600 text-sm">
                  {testimonials[current].role} · {testimonials[current].location}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() =>
                setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
              }
              className="w-12 h-12 rounded-full bg-[#0c4a6e] text-white flex items-center justify-center hover:bg-[#082f49] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() =>
                setCurrent((prev) => (prev + 1) % testimonials.length)
              }
              className="w-12 h-12 rounded-full bg-[#0c4a6e] text-white flex items-center justify-center hover:bg-[#082f49] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-[#0c4a6e] w-6" : "bg-slate-300"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
