'use client'

import UserSearchForm from "@/components/admin/users/UserSearchForm";
import UsersTable from "@/components/admin/users/UsersTable";
import {Page} from "@/types/Pagination";
import {Role, User} from "@/types/User";
import {onSearchSubmit} from "@/utils";

interface UsersClientProps {
  userPage : Page<User>;
  roles: Role[];
  query: {username: string, role: string};
}

export default function UsersClient({userPage, roles, query} : UsersClientProps) {
  return (
    <>
      <UserSearchForm roles={roles} onSubmitAction={onSearchSubmit} query={query}/>
      <UsersTable roles={roles} page={userPage} query={query}/>
    </>
  );
}