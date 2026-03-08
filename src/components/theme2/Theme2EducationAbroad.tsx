import Link from "next/link";
import { GraduationCap, Award, Globe, BookOpen } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Top Universities",
    description: "Get into leading universities worldwide with our expert guidance.",
  },
  {
    icon: Award,
    title: "Scholarships",
    description: "We help you find and apply for scholarships and financial aid.",
  },
  {
    icon: Globe,
    title: "Study Destinations",
    description: "Australia, UK, USA, Canada, New Zealand, and more.",
  },
  {
    icon: BookOpen,
    title: "Student Support",
    description: "From application to arrival, we support you every step.",
  },
];

const countries = [
  { name: "Australia", flag: "🇦🇺", universities: "43 universities" },
  { name: "UK", flag: "🇬🇧", universities: "100+ universities" },
  { name: "USA", flag: "🇺🇸", universities: "4000+ colleges" },
  { name: "Canada", flag: "🇨🇦", universities: "96 universities" },
  { name: "New Zealand", flag: "🇳🇿", universities: "8 universities" },
];

export default function Theme2EducationAbroad() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[#F8F8F8] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=10')",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[#F05A4E] font-bold text-sm uppercase mb-4">
              Quality Education
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#212844] leading-tight mb-6">
              Looking for Quality Education In Abroad?
            </h2>
            <p className="text-[#666666] mb-8 max-w-lg leading-relaxed">
              Study at world-class universities and colleges. We help students
              secure admissions, scholarships, and student visas in top study
              destinations like Australia, UK, USA, Canada, and New Zealand.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F05A4E]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#F05A4E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#212844] text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#666666] text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/theme-2#services"
              className="inline-flex px-8 py-4 bg-[#F05A4E] text-white font-bold rounded uppercase hover:bg-[#e04a3e] transition-colors"
            >
              Apply Now
            </Link>
          </div>

          <div>
            <div
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80')",
              }}
            />
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex flex-col items-center gap-1 p-3 bg-white rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span className="font-semibold text-[#212844] text-sm">
                    {country.name}
                  </span>
                  <span className="text-[#666666] text-xs">{country.universities}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
