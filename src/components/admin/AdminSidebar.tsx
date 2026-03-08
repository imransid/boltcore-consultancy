"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  BarChart3,
  ClipboardList,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/lib/auth/auth-context";
import { hasPermission, type Permission, type Role } from "@/lib/auth/roles";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  permission?: Permission;
  roles?: Role[];
}

const navItems: NavItem[] = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
    roles: ["admin", "moderator", "student"],
  },
  {
    href: "/admin/users",
    label: "Users",
    icon: Users,
    permission: "users:read",
    roles: ["admin", "moderator"],
  },
  {
    href: "/admin/content",
    label: "Content",
    icon: FileText,
    permission: "content:read",
    roles: ["admin", "moderator"],
  },
  {
    href: "/admin/applications",
    label: "Applications",
    icon: ClipboardList,
    permission: "applications:read",
    roles: ["admin", "moderator", "student"],
  },
  {
    href: "/admin/analytics",
    label: "Analytics",
    icon: BarChart3,
    permission: "analytics:read",
    roles: ["admin"],
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: Settings,
    permission: "settings:read",
    roles: ["admin"],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const visibleItems = navItems.filter((item) => {
    if (!user) return false;
    if (item.roles && !item.roles.includes(user.role)) return false;
    if (item.permission && !hasPermission(user.role, item.permission))
      return false;
    return true;
  });

  return (
    <aside
      className={`${
        collapsed ? "w-[72px]" : "w-64"
      } bg-slate-900 text-white flex flex-col border-r border-slate-700/50 transition-all duration-300 ease-in-out shrink-0`}
    >
      {/* Brand */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700/50">
        {!collapsed && (
          <Link
            href="/admin"
            className="flex items-center gap-2 font-display font-semibold text-lg text-white"
          >
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </span>
            Immidox
          </Link>
        )}
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {visibleItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Role badge */}
      {!collapsed && user && (
        <div className="p-4 border-t border-slate-700/50">
          <div className="px-3 py-2 rounded-lg bg-slate-800/50">
            <p className="text-xs text-slate-400 uppercase tracking-wider">
              Logged in as
            </p>
            <p className="text-sm font-medium truncate">{user.name}</p>
            <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-primary/20 text-amber-200">
              {user.role}
            </span>
          </div>
        </div>
      )}
    </aside>
  );
}
