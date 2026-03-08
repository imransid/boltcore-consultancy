import { Award, Clock, Headphones, Globe } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Industry Certified",
    description: "Our consultants hold certifications from leading immigration bodies and education councils.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Streamlined processes and direct embassy relations ensure quicker turnaround times.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for urgent queries and application updates.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Partnerships with universities and employers across 50+ countries.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#0c4a6e] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=50')",
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/30 text-white font-semibold rounded-full text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Excellence in Every Application
          </h2>
          <p className="text-lg text-white/90">
            We go beyond standard consultancy—we become your partners in achieving
            your goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 bg-[#d4af37] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-[#0c4a6e]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                {reason.title}
              </h3>
              <p className="text-white/80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
