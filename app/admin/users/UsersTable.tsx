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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface User {
  id: number;
  username: string;
  roles: string[];
}

interface UsersTableProps {
  users: User[];
  onEdit: (userId: number) => void;
  onDelete: (userId: number) => void;
}

export default function UsersTable({ users, onEdit, onDelete }: UsersTableProps) {
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
                  <TableCell className="px-4 py-2">{user.roles.join(", ")}</TableCell>
                  <TableCell className="px-4 py-2">
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => onEdit(user.id)}>
                        수정
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
      <Pagination className="my-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">50</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}