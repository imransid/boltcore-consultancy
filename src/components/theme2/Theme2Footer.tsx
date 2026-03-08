import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  about: [
    { label: "Visa For Students", href: "/theme-2#services" },
    { label: "Permanent Residency", href: "/theme-2#services" },
    { label: "Work Permit", href: "/theme-2#services" },
    { label: "Travel Insurance", href: "/theme-2#services" },
    { label: "Visa Interview", href: "/theme-2#services" },
  ],
  services: [
    { label: "Study Visa", href: "/theme-2#services" },
    { label: "Skilled Visa", href: "/theme-2#services" },
    { label: "Business Visa", href: "/theme-2#services" },
    { label: "Family Visa", href: "/theme-2#services" },
    { label: "Tourist Visa", href: "/theme-2#services" },
  ],
};

const recentPosts = [
  {
    title: "How Does An Immigration Lawyer Work?",
    date: "Mar 5, 2026",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=80&h=80&fit=crop",
  },
  {
    title: "Latest Student Visa Updates 2026",
    date: "Mar 2, 2026",
    image: "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=80&h=80&fit=crop",
  },
  {
    title: "Canada Express Entry Changes",
    date: "Feb 28, 2026",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=80&h=80&fit=crop",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const instagramImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=150&q=80",
  "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=150&q=80",
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=150&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&q=80",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=150&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
];

export default function Theme2Footer() {
  return (
    <footer className="bg-[#212844] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/theme-2" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#F05A4E] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#F05A4E]" />
              </div>
              <span className="font-bold text-xl text-white">
                Immidox <span className="text-[#F05A4E]">Immigration</span>
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              Your trusted partner for immigration and visa services. We guide
              you through every step of your journey with expertise and care.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F05A4E] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* About Us Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">About Us</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#F05A4E] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#F05A4E] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Post */}
          <div>
            <h4 className="font-bold text-lg mb-4">Recent Post</h4>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.title}>
                  <Link
                    href="/theme-2#blog"
                    className="flex gap-3 group hover:opacity-90 transition-opacity"
                  >
                    <div
                      className="w-16 h-16 rounded flex-shrink-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${post.image}')` }}
                    />
                    <div>
                      <span className="text-white/90 group-hover:text-[#F05A4E] transition-colors line-clamp-2 text-sm font-medium">
                        {post.title}
                      </span>
                      <span className="text-white/50 text-xs block mt-1">{post.date}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instagram Feed */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h4 className="font-bold text-lg mb-4">Instagram Feed</h4>
          <div className="grid grid-cols-6 gap-2">
            {instagramImages.map((img, i) => (
              <a
                key={i}
                href="#"
                className="aspect-square rounded overflow-hidden group"
              >
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url('${img}')` }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/50 text-sm text-center">
            Copyright © {new Date().getFullYear()} Immidox. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
