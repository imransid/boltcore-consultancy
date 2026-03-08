"use client";

import Link from "next/link";
import { LogOut, User, ExternalLink } from "lucide-react";
import { useAuth } from "@/lib/auth/auth-context";

export default function AdminHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-slate-800">
          Admin Panel
        </h1>
        <Link
          href="/theme-2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-primary transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          View site
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium">{user.name}</span>
              <span className="text-slate-400">({user.role})</span>
            </div>
            <button
              type="button"
              onClick={logout}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}
