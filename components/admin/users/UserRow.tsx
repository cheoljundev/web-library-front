'use client'

import {Role, User} from "@/types/User";
import {TableCell, TableRow} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {useState} from "react";
import axios from "axios";

const onDelete = (id: number) => {
  console.log("삭제 클릭", id);
}

export default function UserRow({user, roles}: { user: User, roles: Role[] }) {
  const initialRoles = user.roles.map((role) => role.name);

  const [selectedRoles, setSelectedRoles] = useState<string[]>(initialRoles);


  const handleCheckboxChange = (roleName: string) => {
    setSelectedRoles((prev) =>
      prev.includes(roleName)
        ? prev.filter((name) => name !== roleName)
        : [...prev, roleName]
    );
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // 모달이 닫힐 때 selectedRoles를 초기 상태로 복원
      setSelectedRoles(initialRoles);
    }
  };

  const handleSetRoles = async () => {
    try {
      const {data} = await axios.put(`/api/users/${user.id}/roles`, {roles: selectedRoles});
      alert(data);
      location.reload();
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        alert(e.response.data);
      } else {
        alert('알 수 없는 에러 발생');
      }
    }
  }

  return <TableRow key={user.id}>
    <TableCell className="px-4 py-2">{user.username}</TableCell>
    <TableCell className="px-4 py-2">{
      user.roles.map((role) => role.description).join(', ')
    }</TableCell>
    <TableCell className="px-4 py-2">
      <div className="flex gap-2">
        <Dialog onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <Button>권한 변경</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>권한 변경</DialogTitle>
              <DialogDescription>
                권한을 선택해서 변경할 수 있습니다.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-2">
              {roles.map((role) => (
                <div className="flex items-center gap-1" key={role.name}>
                  <Checkbox id={role.name}
                            checked={selectedRoles.includes(role.name)}
                            disabled={role.name === 'DEFAULT'}
                            onCheckedChange={() => handleCheckboxChange(role.name)}
                  />
                  <label htmlFor={role.name}
                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >{role.description}</label>
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button onClick={handleSetRoles}>저장</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button variant="destructive" onClick={() => onDelete(user.id)}>
          삭제
        </Button>
      </div>
    </TableCell>
  </TableRow>;
}