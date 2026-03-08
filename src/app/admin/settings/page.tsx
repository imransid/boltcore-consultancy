"use client";

import { PermissionGuard } from "@/lib/auth/permission-guard";
import { Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <PermissionGuard permission="settings:read">
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800 font-display">
            Settings
          </h1>
          <p className="text-slate-600 mt-1">
            System configuration (Admin only)
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800">General</h2>
            <p className="text-sm text-slate-500 mt-1">
              Site-wide settings
            </p>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Site name
              </label>
              <input
                type="text"
                defaultValue="Immidox"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Support email
              </label>
              <input
                type="email"
                defaultValue="info@immidox.com"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <div className="p-6 border-t border-slate-100">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
              <Save className="w-5 h-5" /> Save changes
            </button>
          </div>
        </div>
      </div>
    </PermissionGuard>
  );
}
