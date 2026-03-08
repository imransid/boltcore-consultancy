import Link from "next/link";
import { Play } from "lucide-react";

const posts = [
  {
    title: "Complete Guide to Australian Student Visa 2025",
    excerpt:
      "Everything you need to know about applying for a student visa to Australia. Requirements, fees, and step-by-step process.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
  },
  {
    title: "Canada Express Entry: Latest Updates and Tips",
    excerpt:
      "Stay updated with the latest Express Entry draws and learn how to improve your CRS score for Canadian immigration.",
    image:
      "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=600&q=80",
  },
  {
    title: "UK Skilled Worker Visa - A Comprehensive Guide",
    excerpt:
      "Navigate the UK Skilled Worker visa process with our expert tips and requirements checklist.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
  },
];

export default function Theme2Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#212844] text-center mb-16">
          Latest Immigration News & Updates
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-100"
            >
              <div className="relative aspect-video overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
                <div className="absolute inset-0 bg-[#212844]/40 group-hover:bg-[#212844]/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#F05A4E] flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#212844] text-lg mb-3 line-clamp-2 group-hover:text-[#F05A4E] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#666666] text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href="/blog"
                  className="inline-flex text-[#F05A4E] font-bold text-sm uppercase hover:underline"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
