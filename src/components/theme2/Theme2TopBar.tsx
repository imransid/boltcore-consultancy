import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Theme2TopBar() {
  return (
    <div className="hidden lg:block bg-[#212844] text-white/90 text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+0123456789"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call: +01 234 567 89
            </a>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email: hello@example.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/faqs" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/login" className="hover:text-white transition-colors">
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-1.5 bg-[#22c55e] text-white font-semibold rounded hover:bg-[#16a34a] transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
