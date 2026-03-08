"use client";

import { useAuth } from "@/lib/auth/auth-context";
import { PermissionGuard } from "@/lib/auth/permission-guard";
import { Search, Filter, FileText } from "lucide-react";

const applications = [
  { id: "APP-001", applicant: "Maria Santos", type: "Student Visa", status: "In Review", date: "2024-03-01" },
  { id: "APP-002", applicant: "John Doe", type: "Work Permit", status: "Pending", date: "2024-03-03" },
  { id: "APP-003", applicant: "Sarah Chen", type: "Student Visa", status: "Approved", date: "2024-02-20" },
];

export default function ApplicationsPage() {
  const { user } = useAuth();

  return (
    <PermissionGuard permission="applications:read">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800 font-display">
            Applications
          </h1>
          <p className="text-slate-600 mt-1">
            {user?.role === "student"
              ? "View and track your immigration applications"
              : "Manage visa and student applications"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="search"
              placeholder="Search applications..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          {(user?.role === "admin" || user?.role === "moderator") && (
            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 font-medium transition-colors">
              <Filter className="w-5 h-5" /> Filter
            </button>
          )}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
          <div className="divide-y divide-slate-100">
            {applications.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between p-4 hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">{app.id}</h3>
                    <p className="text-sm text-slate-500">
                      {app.applicant} · {app.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      app.status === "Approved"
                        ? "bg-emerald-100 text-emerald-700"
                        : app.status === "In Review"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {app.status}
                  </span>
                  <span className="text-sm text-slate-500">{app.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PermissionGuard>
  );
}
