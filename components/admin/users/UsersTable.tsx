"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import {Page} from "@/types/Pagination";
import {User} from "@/types/User";
import Pagination from "@/components/Pagination";
import {useState} from "react";


function onEdit(id: number) {
  console.log("수정 클릭", id);
}

function onDelete(id: number) {
  console.log("삭제 클릭", id);
}

export default function UsersTable({ page }: { page: Page<User> }) {
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
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="px-4 py-2">{user.username}</TableCell>
                  <TableCell className="px-4 py-2">{
                    user.roles.map((role) => role.description).join(', ')
                  }</TableCell>
                  <TableCell className="px-4 py-2">
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => onEdit(user.id)}>
                        권한 변경
                      </Button>
                      <Button variant="destructive" onClick={() => onDelete(user.id)}>
                        삭제
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
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
      <Pagination page={page} />
    </>
  );
}