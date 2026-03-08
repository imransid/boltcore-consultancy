import Link from "next/link";
import {
  Plane,
  GraduationCap,
  Briefcase,
  Users,
  FileCheck,
  Shield,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Visa Services",
    description:
      "Complete visa assistance for tourist, business, student, and work visas. Expert guidance through every step.",
    href: "/services/visa",
  },
  {
    icon: GraduationCap,
    title: "Student Consultancy",
    description:
      "University placements, scholarship guidance, and study abroad counseling for top destinations worldwide.",
    href: "/services/student",
  },
  {
    icon: Briefcase,
    title: "Work Migration",
    description:
      "Skilled migration, employer-sponsored visas, and career relocation support for professionals.",
    href: "/services/work",
  },
  {
    icon: Users,
    title: "Family Reunification",
    description:
      "Family sponsorship and reunion visa services. Reunite with loved ones in your new home country.",
    href: "/services/family",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description:
      "Expert document preparation, verification, and translation services for smooth application process.",
    href: "/services/docs",
  },
  {
    icon: Shield,
    title: "Legal Support",
    description:
      "Immigration lawyers and legal consultation for complex cases and appeals.",
    href: "/services/legal",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/20 text-[#0c4a6e] font-semibold rounded-full text-sm mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive Immigration Solutions
          </h2>
          <p className="text-lg text-slate-600">
            From visa applications to study abroad counseling, we offer end-to-end
            support for your migration journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-[#d4af37]/30"
            >
              <div className="w-14 h-14 bg-[#0c4a6e] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition-colors">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-[#0c4a6e] font-semibold hover:text-[#d4af37] transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
