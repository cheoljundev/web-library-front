import AdminAside from "@/app/admin/AdminAside";
import AdminTitle from "@/app/admin/AdminTitle";

export default function AdminLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <AdminTitle/>
      <AdminAside/>
      {children}
    </main>
  );
}