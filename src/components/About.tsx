import { CheckCircle2 } from "lucide-react";

const features = [
  "15+ years of immigration expertise",
  "98% visa success rate",
  "5000+ successful applications",
  "Personalized consultation approach",
  "Multilingual support team",
  "24/7 application tracking",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-[#0c4a6e]/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-semibold text-lg">
                  Trusted by 5000+ clients worldwide
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4af37] rounded-2xl -z-10" />
            <div className="absolute top-1/2 -left-6 w-20 h-20 border-4 border-[#0c4a6e] rounded-full -z-10" />
          </div>

          <div>
            <span className="inline-block px-4 py-1.5 bg-[#d4af37]/20 text-[#0c4a6e] font-semibold rounded-full text-sm mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Your Trusted Partner in Immigration & Education
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              With over 15 years of experience, Immidox has helped thousands of
              individuals and families achieve their dreams of studying abroad,
              relocating for work, and reuniting with loved ones.
            </p>
            <p className="text-slate-600 mb-8">
              Our team of certified consultants and immigration experts provides
              personalized guidance, ensuring your application stands out. We
              combine industry knowledge with a client-first approach to deliver
              exceptional results.
            </p>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
