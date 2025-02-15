import AdminAside from "@/components/admin/AdminAside";
import AdminTitle from "@/components/admin/AdminTitle";
import {Metadata} from "next";

export const metadata : Metadata = {
  title: "온라인 도서관 관리자 페이지",
  description: "관리자 페이지",
}

export default function AdminLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <AdminTitle/>
      <AdminAside/>
      {children}
    </main>
  );
}