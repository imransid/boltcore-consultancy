import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=50')",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Get a free consultation with our experts. We&apos;ll assess your case and
          guide you to the best path forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d4af37] text-[#0c4a6e] font-semibold rounded-lg hover:bg-[#e8c547] transition-all"
          >
            Book Free Consultation <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            href="tel:+1234567890"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
          >
            Call Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}
