import AdminAside from "@/components/admin/AdminAside";
import AdminTitle from "@/components/admin/AdminTitle";

export default function AdminLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <AdminTitle/>
      <AdminAside/>
      {children}
    </main>
  );
}