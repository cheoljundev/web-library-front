"use client";

import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import axios from "axios";
import config from "@/config";

const schema = z.object({
  bookName: z.string().min(1, "도서명은 필수입니다."),
  isbn: z.string().min(1, "ISBN은 필수입니다."),
  author: z.string().min(1, "저자 이름은 필수입니다."),
  description: z.string().min(1, "설명은 필수입니다."),
  coverImage: z
    .any()
    .refine((files) => files && files.length > 0, "책표지는 필수입니다."),
});

type AddBookFormValues = z.infer<typeof schema>;

const host = config.host;

export default function AddBookForm() {

  const form = useForm<AddBookFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      bookName: "",
      isbn: "",
      author: "",
      description: "",
      coverImage: null,
    },
  });

  async function onSubmit(values: AddBookFormValues) {
    const { coverImage, ...rest } = values;
    const coverImageFile = coverImage[0];

    const formData = new FormData();
    formData.append("bookData", new Blob([JSON.stringify(rest)], { type: "application/json" }));
    formData.append("coverImage", coverImageFile);

    try {
      const {data} = await axios.post(`${host}/api/books/add`, formData, { withCredentials: true });
      alert(data)
      location.href = "/admin/books";
    } catch (error) {
      // AxiosError 타입인지 체크합니다.
      if (axios.isAxiosError(error) && error.response) {

        if (error.response.status === 403) {
          form.setError("root", {message: error.response.data});
        }

        const errors = error.response.data;
        if (errors.bookName) {
          form.setError("bookName", {message: errors.bookName});
        }
        if (errors.isbn) {
          form.setError("isbn", {message: errors.isbn});
        }
        if (errors.author) {
          form.setError("author", {message: errors.author});
        }
        if (errors.description) {
          form.setError("description", {message: errors.description});
        }
        if (errors.coverImage) {
          form.setError("coverImage", {message: errors.coverImage});
        }
        if (errors.root) {
          form.setError("root", {message: errors.root});
        }
        if (error.response.status === 500) {
          form.setError("root", {message: "서버에 문제가 발생했습니다. 관리자에게 문의해주세요."});
        }
      }
    }

  }

  // 책 표지 파일 감지를 위해 form.watch 사용
  const coverImageFiles = form.watch("coverImage");
  const [coverImagePreview, setCoverPreview] = useState<string | null>(null);

  useEffect(() => {
    if (coverImageFiles && coverImageFiles.length > 0) {
      const file = coverImageFiles[0];
      const previewURL = URL.createObjectURL(file);
      setCoverPreview(previewURL);
      // 컴포넌트 언마운트 시 URL 해제
      return () => URL.revokeObjectURL(previewURL);
    } else {
      setCoverPreview(null);
    }
  }, [coverImageFiles]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {form.formState.errors.root && (
          <div className="text-red-500">{form.formState.errors.root.message}</div>
        )}
        <FormField
          control={form.control}
          name="bookName"
          render={({field}) => (
            <FormItem>
              <FormLabel>도서명</FormLabel>
              <FormControl>
                <Input placeholder="도서명을 입력하세요" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isbn"
          render={({field}) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input placeholder="ISBN을 입력하세요" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({field}) => (
            <FormItem>
              <FormLabel>저자</FormLabel>
              <FormControl>
                <Input placeholder="저자 이름을 입력하세요" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({field}) => (
            <FormItem>
              <FormLabel>설명</FormLabel>
              <FormControl>
                <Textarea placeholder="도서 설명을 입력하세요" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="coverImage"
          render={({field}) => (
            <FormItem>
              <FormLabel>책표지</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  // react-hook-form의 FileList로 변경
                  onChange={(e) => field.onChange(e.target.files)}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        {coverImagePreview && (
          <div className="mt-4">
            <img
              src={coverImagePreview}
              alt="책 표지 미리보기"
              className="max-w-xs border rounded max-h-[200px]"
            />
          </div>
        )}
        <Button type="submit">추가하기</Button>
      </form>
    </Form>
  );
}