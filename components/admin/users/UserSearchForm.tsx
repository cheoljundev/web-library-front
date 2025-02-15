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

const searchFormSchema = z.object({
  username: z.string(),
  role: z.enum(["DEFAULT", "ADMIN"]),
});

export type SearchFormValues = z.infer<typeof searchFormSchema>;

interface UserSearchFormProps {
  onSubmitAction: (data: SearchFormValues) => void;
}

export default function UserSearchForm({ onSubmitAction }: UserSearchFormProps) {
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      username: "",
      role: "DEFAULT",
    },
  });

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
                    <SelectTrigger>{field.value || "Select a role"}</SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DEFAULT">DEFAULT</SelectItem>
                      <SelectItem value="ADMIN">ADMIN</SelectItem>
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