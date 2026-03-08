"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";
import { useAuth } from "@/lib/auth/auth-context";
import { ROLES, type Role } from "@/lib/auth/roles";

export default function AdminLoginPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/admin");
    }
  }, [isAuthenticated, router]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("admin");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    const success = await login(email.trim(), password, role);
    if (success) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 p-12 flex-col justify-between">
        <div>
          <Link href="/theme-2" className="flex items-center gap-2 text-white">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-semibold text-xl">Immidox</span>
          </Link>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-white mb-4">
            Admin Panel
          </h2>
          <p className="text-slate-400 max-w-md">
            Manage users, content, and applications. Sign in with your admin,
            moderator, or student credentials to access your dashboard.
          </p>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Immidox. Immigration & Student Consultancy.
        </p>
      </div>

      {/* Right: Login form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-50">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Link href="/theme-2" className="flex items-center gap-2 text-slate-800">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-semibold text-lg">Immidox</span>
            </Link>
          </div>

          <h1 className="text-2xl font-semibold text-slate-800 mb-2">
            Sign in to Admin
          </h1>
          <p className="text-slate-600 mb-8">
            Choose your role and enter credentials (demo: any email/password works)
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role selector */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Sign in as
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["admin", "moderator", "student"] as Role[]).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      role === r
                        ? "bg-primary text-white"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    {ROLES[r].label}
                  </button>
                ))}
              </div>
              <p className="mt-1.5 text-xs text-slate-500">
                {ROLES[role].description}
              </p>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@immidox.com"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                autoComplete="email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              Sign in <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            <Link href="/theme-2" className="text-primary hover:underline">
              ← Back to site
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
