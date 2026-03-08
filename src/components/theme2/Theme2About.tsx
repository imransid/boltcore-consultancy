import Link from "next/link";
import { Check } from "lucide-react";

const points = [
  "Experienced & Expert Team",
  "Best Solutions",
  "Customer Satisfaction",
  "Visa Interview Services",
];

export default function Theme2About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F8F8] relative overflow-hidden">
      {/* Subtle world map graphic */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=10')",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80')",
              }}
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#F05A4E] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              20+
            </div>
          </div>

          <div>
            <span className="text-[#F05A4E] font-bold text-sm uppercase tracking-wide">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#212844] mt-2 mb-6">
              We Are Professional Visa & Immigration Firm
            </h2>
            <p className="text-[#666666] leading-relaxed mb-6">
              With over 20 years of experience, we have helped thousands of
              individuals and families achieve their dreams of studying abroad,
              relocating for work, and reuniting with loved ones. Our certified
              consultants provide personalized guidance for every application.
            </p>
            <ul className="space-y-3 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#F05A4E] flex-shrink-0" />
                  <span className="text-[#212844] font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/theme-2#blog"
              className="inline-flex px-8 py-4 bg-[#F05A4E] text-white font-bold rounded uppercase hover:bg-[#e04a3e] transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
