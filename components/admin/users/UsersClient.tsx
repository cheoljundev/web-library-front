'use client'

import UserSearchForm from "@/components/admin/users/UserSearchForm";
import UsersTable from "@/components/admin/users/UsersTable";
import {Page} from "@/types/Pagination";
import {Role, User} from "@/types/User";

const onSearchSubmit = async (query : {username : string, role : string}) => {
  location.href = `?username=${query.username}&role=${query.role}`;
};

interface UsersClientProps {
  userPage : Page<User>;
  roles: Role[];
  query: {username: string, role: string};
}

export default async function UsersClient({userPage, roles, query} : UsersClientProps) {
  return (
    <>
      <UserSearchForm roles={roles} onSubmitAction={onSearchSubmit} query={query}/>
      <UsersTable page={userPage} query={query}/>
    </>
  );
}