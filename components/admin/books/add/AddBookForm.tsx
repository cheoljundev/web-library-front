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

const schema = z.object({
  title: z.string().min(1, "도서명은 필수입니다."),
  isbn: z.string().min(1, "ISBN은 필수입니다."),
  author: z.string().min(1, "저자 이름은 필수입니다."),
  description: z.string().min(1, "설명은 필수입니다."),
  cover: z
    .any()
    .refine((files) => files && files.length > 0, "책표지는 필수입니다."),
});

type AddBookFormValues = z.infer<typeof schema>;

function onSubmit(values: AddBookFormValues) {
  // cover는 FileList 형태로 넘어오므로 첫번째 파일을 추출합니다.
  const coverFile = values.cover[0];
  const formData = {
    ...values,
    cover: coverFile,
  };

  console.log(formData);
  // 여기서 API 요청 등 추가 로직을 구현할 수 있습니다.
}

export default function AddBookForm() {

  const form = useForm<AddBookFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      isbn: "",
      author: "",
      description: "",
      cover: null,
    },
  });

  // 책 표지 파일 감지를 위해 form.watch 사용
  const coverFiles = form.watch("cover");
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  useEffect(() => {
    if (coverFiles && coverFiles.length > 0) {
      const file = coverFiles[0];
      const previewURL = URL.createObjectURL(file);
      setCoverPreview(previewURL);
      // 컴포넌트 언마운트 시 URL 해제
      return () => URL.revokeObjectURL(previewURL);
    } else {
      setCoverPreview(null);
    }
  }, [coverFiles]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
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
          name="cover"
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
        {coverPreview && (
          <div className="mt-4">
            <img
              src={coverPreview}
              alt="책 표지 미리보기"
              className="max-w-xs border rounded"
            />
          </div>
        )}
        <Button type="submit">추가하기</Button>
      </form>
    </Form>
  );
}