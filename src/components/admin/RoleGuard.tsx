"use client";

import { useAuth } from "@/lib/auth/auth-context";
import type { Role } from "@/lib/auth/roles";
import Link from "next/link";

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles?: Role[];
  fallback?: React.ReactNode;
}

/** Protects content - only renders children if user has one of the allowed roles */
export function RoleGuard({
  children,
  allowedRoles,
  fallback,
}: RoleGuardProps) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 gap-6 p-8">
        <p className="text-slate-600 text-center">
          You must be logged in to access the admin panel.
        </p>
        <Link
          href="/admin/login"
          className="px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    if (fallback) return <>{fallback}</>;

    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 p-8">
        <div className="text-center max-w-md">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Access Denied
          </h2>
          <p className="text-slate-600 mb-4">
            Your role ({user.role}) does not have permission to view this page.
          </p>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
