import { AuthProvider } from "@/lib/auth/auth-context";
import AdminShell from "@/components/admin/AdminShell";

export const metadata = {
  title: "Admin Panel | Immidox",
  description: "Immidox admin dashboard - manage users, content, and applications",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <AdminShell>{children}</AdminShell>
    </AuthProvider>
  );
}
