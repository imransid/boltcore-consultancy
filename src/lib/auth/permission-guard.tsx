"use client";

import { type ReactNode } from "react";
import { useAuth } from "./auth-context";
import { hasPermission, type Permission } from "./roles";

interface PermissionGuardProps {
  permission: Permission;
  fallback?: ReactNode;
  children: ReactNode;
}

/** Renders children only if the current user has the required permission */
export function PermissionGuard({
  permission,
  fallback = null,
  children,
}: PermissionGuardProps) {
  const { user } = useAuth();

  if (!user || !hasPermission(user.role, permission)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
