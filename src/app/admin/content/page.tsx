"use client";

import { PermissionGuard } from "@/lib/auth/permission-guard";
import { useAuth } from "@/lib/auth/auth-context";
import { Search, Plus, Edit2 } from "lucide-react";

const contentItems = [
  { id: "1", title: "Visa Requirements Guide", type: "Page", status: "Published", updated: "2024-03-01" },
  { id: "2", title: "Student Visa FAQ", type: "Page", status: "Published", updated: "2024-02-28" },
  { id: "3", title: "Blog: Study Abroad Tips", type: "Blog", status: "Draft", updated: "2024-03-05" },
];

export default function ContentPage() {
  const { user } = useAuth();

  return (
    <PermissionGuard permission="content:read">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800 font-display">
            Content
          </h1>
          <p className="text-slate-600 mt-1">
            Manage pages, blog posts, and resources
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="search"
              placeholder="Search content..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          {user && (user.role === "admin" || user.role === "moderator") && (
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
              <Plus className="w-5 h-5" /> Add content
            </button>
          )}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
          <div className="divide-y divide-slate-100">
            {contentItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 hover:bg-slate-50/50 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-slate-800">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {item.type} · Updated {item.updated}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === "Published"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {item.status}
                  </span>
                  <button
                    type="button"
                    className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
                    aria-label="Edit"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PermissionGuard>
  );
}
