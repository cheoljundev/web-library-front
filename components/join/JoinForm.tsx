"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";

const joinSchema = z
  .object({
    username: z
      .string()
      .min(5, {message: "유저네임은 최소 5자 이상이어야 합니다."})
      .refine(
        (value) => /^[a-z][a-z0-9]*$/.test(value),
        { message: "아이디는 첫 글자가 소문자 영문이어야 하며, 소문자 영문과 숫자만 올 수 있습니다." }
      ),
    password: z.string()
      .min(5, {message: "비밀번호는 최소 5자 이상이어야 합니다."})
      .refine(
        (value) => /^\S+$/.test(value),
        {message: "비밀번호는 공백을 포함할 수 없습니다."}
      ),
    confirmPassword: z.string().min(5, {message: "비밀번호는 최소 5자 이상이어야 합니다."}),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

type JoinFormValues = z.infer<typeof joinSchema>;

export default function JoinForm() {
  const form = useForm<JoinFormValues>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: JoinFormValues) => {
    try {
      await axios.post(`/api/join`, data);
      location.href = "/join/done";
    } catch (error) {
      // AxiosError 타입인지 체크합니다.
      if (axios.isAxiosError(error) && error.response) {
        const errors = error.response.data;
        if (errors.username) {
          form.setError("username", {message: errors.username});
        }
        if (errors.password) {
          form.setError("password", {message: errors.password});
        }
        if (errors.root) {
          form.setError("root", {message: errors.root});
        }
        if (error.response.status === 500) {
          form.setError("root", {message: "서버에 문제가 발생했습니다. 관리자에게 문의해주세요."});
        }
      } else {
        console.error("알 수 없는 에러", error);
      }
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-center">회원 가입</CardTitle>
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
              render={({field}) => (
                <FormItem>
                  <FormLabel>유저네임</FormLabel>
                  <FormControl>
                    <Input placeholder="유저네임 입력" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="비밀번호 입력" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({field}) => (
                <FormItem>
                  <FormLabel>비밀번호 확인</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="비밀번호 확인" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              회원 가입
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}