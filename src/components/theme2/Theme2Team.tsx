import { Check, Facebook, Twitter, Linkedin } from "lucide-react";

const team = [
  {
    name: "John Smith",
    role: "Lead Immigration Consultant",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sarah Johnson",
    role: "Student Visa Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Ahmed Hassan",
    role: "Work Migration Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Maria Garcia",
    role: "Family Visa Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

const socialIcons = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Theme2Team() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#212844] text-center mb-16">
          Our Reputable Team
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative inline-block mb-4">
                <div
                  className="w-48 h-48 rounded-full mx-auto bg-cover bg-center border-4 border-white shadow-lg"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#F05A4E] rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-[#212844] text-lg mb-1">{member.name}</h3>
              <p className="text-[#666666] text-sm mb-4">{member.role}</p>
              <div className="flex justify-center gap-2">
                {socialIcons.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-[#212844] text-white flex items-center justify-center hover:bg-[#F05A4E] transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
