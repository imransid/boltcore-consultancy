/**
 * Role-based access control (RBAC) for Immidox admin panel
 */

export type Role = "admin" | "moderator" | "student";

export const ROLES: Record<Role, { label: string; description: string }> = {
  admin: {
    label: "Administrator",
    description: "Full system access - users, content, settings, analytics",
  },
  moderator: {
    label: "Moderator",
    description: "Content moderation, user management (view/edit)",
  },
  student: {
    label: "Student",
    description: "Basic user - profile, applications, limited dashboard",
  },
};

/** Permission keys for granular access control */
export type Permission =
  | "users:read"
  | "users:write"
  | "users:delete"
  | "content:read"
  | "content:write"
  | "content:delete"
  | "settings:read"
  | "settings:write"
  | "analytics:read"
  | "applications:read"
  | "applications:write";

/** Role → permissions mapping */
export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  admin: [
    "users:read",
    "users:write",
    "users:delete",
    "content:read",
    "content:write",
    "content:delete",
    "settings:read",
    "settings:write",
    "analytics:read",
    "applications:read",
    "applications:write",
  ],
  moderator: [
    "users:read",
    "users:write",
    "content:read",
    "content:write",
    "content:delete",
    "applications:read",
    "applications:write",
  ],
  student: ["applications:read", "applications:write"],
};

export function hasPermission(role: Role, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}
