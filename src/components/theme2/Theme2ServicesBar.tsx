import { Plane, Shield, GraduationCap, Users, Heart } from "lucide-react";

const services = [
  { icon: Plane, label: "Visa Services" },
  { icon: Shield, label: "Travel Insurance" },
  { icon: GraduationCap, label: "Study Abroad" },
  { icon: Users, label: "Immigration Services" },
  { icon: Heart, label: "Health Care" },
];

export default function Theme2ServicesBar() {
  return (
    <section id="services" className="py-16 bg-[#F05A4E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {services.map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center gap-4 text-white group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <service.icon className="w-8 h-8" />
              </div>
              <span className="font-semibold text-center text-sm">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
