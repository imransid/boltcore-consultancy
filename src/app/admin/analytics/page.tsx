"use client";

import { PermissionGuard } from "@/lib/auth/permission-guard";
import { BarChart3, Users, TrendingUp, FileText } from "lucide-react";

const analyticsData = [
  { label: "Jan", visitors: 1200, applications: 45 },
  { label: "Feb", visitors: 1900, applications: 62 },
  { label: "Mar", visitors: 1500, applications: 58 },
  { label: "Apr", visitors: 2200, applications: 78 },
  { label: "May", visitors: 2800, applications: 95 },
];

export default function AnalyticsPage() {
  return (
    <PermissionGuard permission="analytics:read">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800 font-display">
            Analytics
          </h1>
          <p className="text-slate-600 mt-1">
            Platform metrics and performance
          </p>
        </div>

        {/* Summary cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Total visitors",
              value: "9.6K",
              change: "+23%",
              icon: Users,
              color: "bg-primary/10 text-primary",
            },
            {
              label: "Applications",
              value: "338",
              change: "+12%",
              icon: FileText,
              color: "bg-emerald-100 text-emerald-700",
            },
            {
              label: "Conversion rate",
              value: "3.5%",
              change: "+0.2%",
              icon: TrendingUp,
              color: "bg-amber-100 text-amber-700",
            },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className={`rounded-lg p-2.5 w-fit ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="mt-4 text-2xl font-semibold text-slate-800">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600">{stat.label}</p>
                <p className="mt-1 text-sm font-medium text-emerald-600">
                  {stat.change} vs last month
                </p>
              </div>
            );
          })}
        </div>

        {/* Chart placeholder */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-slate-600" />
            <h2 className="font-semibold text-slate-800">Traffic & applications</h2>
          </div>
          <div className="h-64 flex items-end gap-4">
            {analyticsData.map((d) => (
              <div
                key={d.label}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <div
                  className="w-full rounded-t-lg bg-primary/20 transition-all hover:bg-primary/30"
                  style={{ height: `${(d.visitors / 3000) * 100}%`, minHeight: "20px" }}
                  title={`${d.visitors} visitors`}
                />
                <span className="text-xs font-medium text-slate-600">
                  {d.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PermissionGuard>
  );
}
