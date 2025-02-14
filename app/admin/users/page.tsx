// app/users/page.tsx
"use client";

import { useState } from "react";
import UserSearchForm, { SearchFormValues } from "./UserSearchForm";
import UsersTable from "./UsersTable";

interface User {
  id: number;
  username: string;
  roles: string[];
}

// 예시 더미 데이터 (초기 렌더링용)
const initialUsers: User[] = [
  { id: 1, username: "alice", roles: ["admin"] },
  { id: 2, username: "bob", roles: ["user"] },
  { id: 3, username: "charlie", roles: ["moderator", "user"] },
];

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const onSearchSubmit = async (data: SearchFormValues) => {
    console.log("검색폼 제출 데이터:", data);
    // 추후 fetch를 통해 검색 결과를 받아와 상태를 업데이트
    // 예: const response = await fetch(`/api/users?...`);
    // setUsers(결과);
  };

  const handleEdit = (userId: number) => {
    console.log("Edit user", userId);
  };

  const handleDelete = (userId: number) => {
    console.log("Delete user", userId);
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl font-bold mb-4">유저 관리</h1>
      <UserSearchForm onSubmit={onSearchSubmit} />
      <UsersTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}