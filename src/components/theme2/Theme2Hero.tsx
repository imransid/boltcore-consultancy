import Link from "next/link";

export default function Theme2Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-28">
      {/* Background with dark overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#212844]/90" />
      </div>

      {/* Two white circular elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border-2 border-white/30 flex items-center justify-center hidden lg:flex">
        <span className="text-white/80 text-xs font-semibold text-center px-4">Expert Team</span>
      </div>
      <div className="absolute bottom-1/3 left-1/5 w-28 h-28 rounded-full border-2 border-white/30 flex items-center justify-center hidden lg:flex">
        <span className="text-white/80 text-xs font-semibold text-center px-3">98% Success</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            People Immigration{" "}
            <span className="text-[#F05A4E]">Confidently</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
            Expert visa and immigration services. We guide you through every
            step of your journey with confidence and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/theme-2#contact"
              className="inline-flex justify-center px-8 py-4 bg-[#F05A4E] text-white font-bold rounded uppercase hover:bg-[#e04a3e] transition-colors"
            >
              Get a Visa
            </Link>
            <Link
              href="/theme-2#about"
              className="inline-flex justify-center px-8 py-4 border-2 border-white text-white font-bold rounded uppercase hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
