"use client";

import { useAuth } from "@/lib/auth/auth-context";
import { hasPermission } from "@/lib/auth/roles";
import {
  Users,
  FileText,
  BarChart3,
  ClipboardList,
  TrendingUp,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Total Users",
    value: "1,248",
    change: "+12%",
    icon: Users,
    href: "/admin/users",
    permission: "users:read" as const,
  },
  {
    label: "Applications",
    value: "342",
    change: "+8%",
    icon: ClipboardList,
    href: "/admin/applications",
    permission: "applications:read" as const,
  },
  {
    label: "Content Items",
    value: "56",
    change: "+3",
    icon: FileText,
    href: "/admin/content",
    permission: "content:read" as const,
  },
  {
    label: "Analytics",
    value: "98%",
    change: "Uptime",
    icon: BarChart3,
    href: "/admin/analytics",
    permission: "analytics:read" as const,
  },
];

export default function AdminDashboardPage() {
  const { user } = useAuth();

  const visibleStats = stats.filter(
    (s) => user && hasPermission(user.role, s.permission)
  );

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800 font-display">
          Welcome back, {user?.name}
        </h1>
        <p className="text-slate-600 mt-1">
          Here&apos;s what&apos;s happening with your {user?.role} dashboard.
        </p>
      </div>

      {/* Role-based quick links */}
      {user?.role === "student" && (
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="font-medium text-slate-800 mb-3">Quick actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/admin/applications"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/5 text-primary hover:bg-primary/10 transition-colors font-medium"
            >
              <ClipboardList className="w-5 h-5" />
              My Applications
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            As a student, you have access to view and manage your immigration
            applications.
          </p>
        </div>
      )}

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visibleStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="group block rounded-xl border border-slate-200 bg-white p-6 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-emerald-600">
                  {stat.change}
                </span>
              </div>
              <p className="mt-4 text-2xl font-semibold text-slate-800">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          );
        })}
      </div>

      {/* Recent activity - for admin/moderator */}
      {(user?.role === "admin" || user?.role === "moderator") && (
        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800">Recent activity</h2>
            <p className="text-sm text-slate-600 mt-1">
              Latest updates across the platform
            </p>
          </div>
          <div className="divide-y divide-slate-100">
            {[
              {
                action: "New application submitted",
                user: "Maria Santos",
                time: "2 min ago",
                icon: GraduationCap,
              },
              {
                action: "Content updated",
                user: "Moderator",
                time: "15 min ago",
                icon: FileText,
              },
              {
                action: "User registered",
                user: "John Doe",
                time: "1 hour ago",
                icon: Users,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.action + item.time}
                  className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="rounded-lg bg-slate-100 p-2.5">
                    <Icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-800 truncate">
                      {item.action}
                    </p>
                    <p className="text-sm text-slate-500">{item.user}</p>
                  </div>
                  <span className="text-sm text-slate-400 shrink-0">
                    {item.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Student-specific CTA */}
      {user?.role === "student" && (
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-3">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                Track your application status
              </h3>
              <p className="text-slate-600 mt-1 text-sm">
                View and manage your immigration or student visa applications in
                one place.
              </p>
              <Link
                href="/admin/applications"
                className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:underline"
              >
                Go to Applications <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
