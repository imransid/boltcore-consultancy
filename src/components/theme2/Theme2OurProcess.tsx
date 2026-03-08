import Link from "next/link";
import { MapPin, ClipboardCheck, FileText, FileCheck, MessageCircle, Plane } from "lucide-react";

const steps = [
  { icon: MapPin, label: "Choose Your Country" },
  { icon: ClipboardCheck, label: "Free Assessment" },
  { icon: FileText, label: "Apply For Visa" },
  { icon: FileCheck, label: "Document Preparation" },
  { icon: MessageCircle, label: "Interview Preparation" },
  { icon: Plane, label: "Get Visa" },
];

export default function Theme2OurProcess() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F8F8F8] relative overflow-hidden">
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
              Our Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#212844] mb-6">
              Summary List For Immigration
            </h2>
            <p className="text-[#666666] mb-8 leading-relaxed">
              We guide you through every step of your immigration journey with
              expertise and care. Our streamlined process ensures a smooth path
              from assessment to visa approval.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {steps.map((step, index) => (
                <div
                  key={step.label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F05A4E] flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-[#212844] text-sm">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/theme-2#contact"
              className="inline-flex px-8 py-4 bg-[#F05A4E] text-white font-bold rounded uppercase hover:bg-[#e04a3e] transition-colors"
            >
              Free Assessment
            </Link>
          </div>
          <div>
            <div
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
