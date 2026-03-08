import Link from "next/link";
import { GraduationCap, Briefcase, Plane, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Study abroad at top universities. Expert guidance for student visas.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
  },
  {
    icon: Briefcase,
    title: "Job Seeker",
    description: "Work permits and skilled migration. Fast-track your career overseas.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  },
  {
    icon: Plane,
    title: "Business Visa",
    description: "Expand your business globally. Corporate visa solutions.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
  },
];

export default function Theme2WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#212844]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Background With Your College
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group rounded-lg overflow-hidden shadow-xl relative bg-white/5"
            >
              <div
                className="aspect-[4/3] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${program.image}')` }}
              />
              <div className="absolute inset-0 bg-[#212844]/60 group-hover:bg-[#212844]/40 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="w-12 h-12 rounded-full bg-[#F05A4E] flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{program.title}</h3>
                <p className="text-white/80 text-sm mb-4">{program.description}</p>
                <Link
                  href="/theme-2#services"
                  className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12 gap-2">
          <span className="w-8 h-1 bg-[#F05A4E] rounded" />
          <span className="w-2 h-2 rounded-full bg-[#F05A4E]" />
        </div>
      </div>
    </section>
  );
}
