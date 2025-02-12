"use client"

import {useForm} from "react-hook-form";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

interface SearchFormProps {
  onSearch: (query: z.infer<typeof schema>) => void
}

const schema = z.object({
  title: z.string().min(1, "책 제목은 필수입니다."),
  isbn: z.string().min(1, "ISBN은 필수입니다."),
  author: z.string().min(1, "저자 이름은 필수입니다."),
});

export default function SearchForm({onSearch}: SearchFormProps) {

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      isbn: '',
      author: '',
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    onSearch(values);
    console.log(values)
  }

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField control={form.control} name="title" render={({field}) => (
          <FormItem>
            <FormLabel>책 이름</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}/>
        <FormField control={form.control} name="isbn" render={({field}) => (
          <FormItem>
            <FormLabel>ISBN</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}/>
        <FormField control={form.control} name="author" render={({field}) => (
          <FormItem>
            <FormLabel>저자</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}/>
        <Button type="submit">검색</Button>
      </form>
    </Form>
  )
}

