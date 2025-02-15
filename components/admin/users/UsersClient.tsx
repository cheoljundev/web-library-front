'use client'

import UserSearchForm from "@/components/admin/users/UserSearchForm";
import UsersTable from "@/components/admin/users/UsersTable";
import {Page} from "@/types/Pagination";
import {User} from "@/types/User";

const onSearchSubmit = async (query : {username : string, role : string}) => {
  location.href = `?username=${query.username}&role=${query.role}`;
};

export default function UsersClient({userPage} : {userPage : Page<User>}) {
  return (
    <>
      <UserSearchForm onSubmitAction={onSearchSubmit}/>
      <UsersTable page={userPage}/>
    </>
  );
}