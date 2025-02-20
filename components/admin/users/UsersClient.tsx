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
}

export default async function UsersClient({userPage, roles} : UsersClientProps) {
  return (
    <>
      <UserSearchForm roles={roles} onSubmitAction={onSearchSubmit}/>
      <UsersTable page={userPage}/>
    </>
  );
}