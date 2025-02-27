import {Role, User} from "@/types/User";
import config from "@/config";
import axios from "axios";
import {Page} from "@/types/Pagination";
import {notFound} from "next/navigation";
import UsersClient from "@/components/admin/users/UsersClient";
import {headers} from "next/headers";

interface UsersPageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function UserManagementPage({searchParams}: UsersPageProps) {
  const cookie = (await headers()).get("cookie") || "";
  const host = config.host;

  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page, 10) : 1;
  const username = resolvedSearchParams.username || '';
  const role = resolvedSearchParams.role || '';

  const query = {username, role};

  try {
    const {data : userPage} = await axios.get<Page<User>>(`${host}/api/users?page=${page}&username=${username}&role=${role}`,
      { headers: { cookie } });

    const {data: roles} = await axios.get<Role[]>(`${host}/api/users/roles`,
      { headers: { cookie } });

    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl font-bold mb-4">유저 관리</h1>
        <UsersClient userPage={userPage} roles={roles} query={query}/>
      </div>
    );
  } catch {
    notFound();
  }

}