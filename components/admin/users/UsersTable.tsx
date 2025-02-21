"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import {Page} from "@/types/Pagination";
import {Role, User} from "@/types/User";
import Pagination from "@/components/Pagination";
import {useState} from "react";
import UserRow from "@/components/admin/users/UserRow";

interface UserSearchFormProps {
  page: Page<User>;
  query: { username: string; role: string };
  roles: Role[];
}

export default function UsersTable({ roles, page, query }: UserSearchFormProps) {
  const [users] = useState<User[]>(page.content);
  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 py-2 text-left">Username</TableHead>
              <TableHead className="px-4 py-2 text-left">권한</TableHead>
              <TableHead className="px-4 py-2 text-left"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0 ? (
              users.map((user) =>(
                <UserRow key={user.id} user={user} roles={roles} />
              ))
            ) : (
              <TableRow>
                <TableCell className="px-4 py-2" colSpan={3}>
                  유저를 찾을 수 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination page={page} query={query} />
    </>
  );
}