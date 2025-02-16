import {User} from "@/types/User";
import config from "@/config";
import axios from "axios";
import {Page} from "@/types/Pagination";
import {notFound} from "next/navigation";
import UsersManagementClient from "@/components/admin/users/UsersClient";

interface UsersPageProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function UserManagementPage({searchParams}: UsersPageProps) {
  const host = config.host;
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page, 10) : 1;

  try {
    const {data : userPage} = await axios.get<Page<User>>(`${host}/api/users?page=${page}`);
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl font-bold mb-4">유저 관리</h1>
        <UsersManagementClient userPage={userPage}/>
      </div>
    );
  } catch {
    notFound();
  }

}