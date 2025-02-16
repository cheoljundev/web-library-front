"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";

const loginSchema = z.object({
  username: z.string()
    .nonempty({ message: "유저네임을 입력해주세요." }),
  password: z.string()
    .nonempty({ message: "비밀번호를 입력해주세요." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await axios.post(`/api/login`, data);
      location.href = "/";
    } catch (error) {
      // AxiosError 타입인지 체크합니다.
      if (axios.isAxiosError(error) && error.response) {
        const errors = error.response.data;
        if (errors["username"]) {
          form.setError("username", { message: errors["username"] });
        }
        if (errors["password"]) {
          form.setError("password", { message: errors["password"] });
        }
        if (errors["root"]) {
          form.setError("root", { message: errors["root"] });
        }
      } else {
        console.error("알 수 없는 에러", error);
      }
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-center">로그인</CardTitle>
      </CardHeader>
      <CardContent>
        {/* 전역 에러 메시지 출력 */}
        {form.formState.errors.root && (
          <p className="text-red-500 text-center mb-4">
            {form.formState.errors.root.message}
          </p>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>유저네임</FormLabel>
                  <FormControl>
                    <Input placeholder="유저네임 입력" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="비밀번호 입력" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              로그인
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}