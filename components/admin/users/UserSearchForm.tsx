"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {Role} from "@/types/User";

const searchFormSchema = z.object({
  username: z.string(),
  role: z.string(),
});

export type SearchFormValues = z.infer<typeof searchFormSchema>;

interface UserSearchFormProps {
  onSubmitAction: (data: SearchFormValues) => void;
  roles: Role[];
  query: { username: string; role: string };
}

export default function UserSearchForm({ onSubmitAction, roles, query }: UserSearchFormProps) {
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      username: query.username,
      role: query.role,
    },
  });

  // 선택된 역할의 description을 찾아 반환하는 헬퍼 함수
  const getSelectedRoleDescription = (selectedRole: string) => {
    const foundRole = roles.find(role => role.name === selectedRole);
    return foundRole ? foundRole.description : "권한 선택";
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitAction)} className="space-y-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>권한</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>{getSelectedRoleDescription(field.value)}</SelectTrigger>
                    <SelectContent>
                      {
                        roles.map((role) => (
                          <SelectItem key={role.name} value={role.name}>{role.description}</SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">검색</Button>
      </form>
    </Form>
  );
}