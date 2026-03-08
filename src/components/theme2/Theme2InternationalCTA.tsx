import Link from "next/link";

const countries = [
  { name: "Australia", flag: "🇦🇺" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "USA", flag: "🇺🇸" },
  { name: "UK", flag: "🇬🇧" },
  { name: "New Zealand", flag: "🇳🇿" },
];

export default function Theme2InternationalCTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#212844] relative overflow-hidden">
      {/* USA flag motifs - stars and stripes pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=30')",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80')",
              }}
            />
          </div>

          <div>
            <span className="inline-block text-[#F05A4E] font-bold text-sm uppercase mb-4">
              Countries
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Looking For Quickest Process Plan In 28 Days?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg">
              We provide expert visa and immigration services for Australia,
              Canada, USA, UK and many more countries. Start your journey today.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white font-medium hover:bg-white/20 transition-colors"
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span>{country.name}</span>
                </div>
              ))}
            </div>

            <Link
              href="/theme-2#contact"
              className="inline-flex px-8 py-4 bg-[#F05A4E] text-white font-bold rounded uppercase hover:bg-[#e04a3e] transition-colors"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
