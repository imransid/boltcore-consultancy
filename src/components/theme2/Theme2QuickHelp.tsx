import Link from "next/link";
import { Globe, MessageCircle, FileText } from "lucide-react";

const quickServices = [
  { icon: Globe, label: "Visa Services" },
  { icon: MessageCircle, label: "Travel Insurance" },
  { icon: FileText, label: "Study Abroad" },
];

export default function Theme2QuickHelp() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F8F8] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=10')",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#212844] mb-4">
              24 Hour Services For Work Quick Help
            </h2>
            <span className="inline-block text-[#F05A4E] font-bold text-sm uppercase mb-6">
              Work Quick Help
            </span>
            <div className="flex flex-wrap gap-6 mb-8">
              {quickServices.map((service) => (
                <div
                  key={service.label}
                  className="w-24 h-24 rounded-full border-2 border-[#F05A4E] bg-white flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <service.icon className="w-8 h-8 text-[#212844] mb-1" />
                  <span className="text-xs font-semibold text-[#212844] text-center px-1">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/theme-2#contact"
              className="inline-flex px-8 py-4 bg-[#F05A4E] text-white font-bold rounded uppercase hover:bg-[#e04a3e] transition-colors"
            >
              Get Help
            </Link>
          </div>

          <div>
            <div
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
