import { FileText, Search, Handshake } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Consultation",
    description: "Share your goals with our experts. We assess your eligibility and create a tailored plan.",
  },
  {
    number: 2,
    icon: Search,
    title: "Documentation",
    description: "We guide you through gathering and preparing all required documents for your application.",
  },
  {
    number: 3,
    icon: Handshake,
    title: "Success",
    description: "We handle submissions, follow-ups, and support until you receive your visa approval.",
  },
];

export default function Theme2HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#212844] text-center mb-16">
          3 Easy Steps For Quick Help
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 rounded-full border-4 border-[#F05A4E] bg-white flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-[#F05A4E] font-bold text-3xl">{step.number}</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#F05A4E] flex items-center justify-center shadow-md">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-[#212844] text-xl mb-3">{step.title}</h3>
              <p className="text-[#666666] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
