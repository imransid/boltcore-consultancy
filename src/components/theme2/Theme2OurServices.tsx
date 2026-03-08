import Link from "next/link";
import { Globe, FileCheck, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Student Visa",
    description:
      "Expert guidance for students aiming to study abroad. We handle documentation and application processes.",
    href: "/theme-2#services",
  },
  {
    icon: FileCheck,
    title: "Skilled Visa",
    description:
      "Professional support for skilled workers seeking to migrate. Streamlined process for PR applications.",
    href: "/theme-2#services",
  },
  {
    icon: Users,
    title: "Family Visa",
    description:
      "Reunite with your loved ones. We assist with family sponsorship and reunification visa applications.",
    href: "/theme-2#services",
  },
];

export default function Theme2OurServices() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle world map background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=10')",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#212844] text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-[#666666] max-w-2xl mx-auto mb-16">
          Comprehensive visa and immigration solutions tailored to your needs
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow border border-slate-100 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#F05A4E]/10 flex items-center justify-center mb-6 group-hover:bg-[#F05A4E] transition-colors">
                <service.icon className="w-7 h-7 text-[#F05A4E] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-[#212844] text-xl mb-3">{service.title}</h3>
              <p className="text-[#666666] mb-6 leading-relaxed">{service.description}</p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-[#F05A4E] font-bold text-sm uppercase hover:gap-3 transition-all"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
