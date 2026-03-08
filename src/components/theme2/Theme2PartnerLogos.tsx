const partners = [
  "Theme Forest",
  "Envato",
  "Creative Market",
  "Template Monster",
  "ThemeIsle",
];

export default function Theme2PartnerLogos() {
  return (
    <section id="partners" className="py-12 lg:py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-slate-400 font-semibold text-lg opacity-60 hover:opacity-80 transition-opacity"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
