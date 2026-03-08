"use client";

import { useAuth } from "@/lib/auth/auth-context";
import { PermissionGuard } from "@/lib/auth/permission-guard";
import { Search, MoreHorizontal } from "lucide-react";

// Demo data
const users = [
  { id: "1", name: "Maria Santos", email: "maria@example.com", role: "student", status: "Active", joined: "2024-01-15" },
  { id: "2", name: "John Doe", email: "john@example.com", role: "student", status: "Active", joined: "2024-02-20" },
  { id: "3", name: "Sarah Chen", email: "sarah@example.com", role: "moderator", status: "Active", joined: "2024-01-10" },
  { id: "4", name: "Admin User", email: "admin@immidox.com", role: "admin", status: "Active", joined: "2023-12-01" },
];

export default function UsersPage() {
  const { user } = useAuth();

  return (
    <PermissionGuard permission="users:read">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800 font-display">Users</h1>
          <p className="text-slate-600 mt-1">Manage users and their roles</p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="search"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          {user?.role === "admin" && (
            <button className="px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
              Add user
            </button>
          )}
        </div>

        {/* Table */}
        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/50">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">
                    Role
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">
                    Joined
                  </th>
                  <th className="w-10" />
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr
                    key={u.id}
                    className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-slate-800">
                      {u.name}
                    </td>
                    <td className="py-4 px-4 text-slate-600">{u.email}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          u.role === "admin"
                            ? "bg-amber-100 text-amber-800"
                            : u.role === "moderator"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {u.role}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{u.status}</td>
                    <td className="py-4 px-4 text-slate-500 text-sm">
                      {u.joined}
                    </td>
                    <td className="py-4 px-4">
                      <button
                        type="button"
                        className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
                        aria-label="More actions"
                      >
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PermissionGuard>
  );
}
