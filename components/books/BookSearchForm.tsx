"use client"

import {useForm} from "react-hook-form";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

interface SearchFormProps {
  onSearchSubmit: (query: z.infer<typeof schema>) => void,
  query: { bookName: string; isbn: string; author: string }

}

const schema = z.object({
  bookName: z.string(),
  isbn: z.string(),
  author: z.string(),
});

export default function BookSearchForm({onSearchSubmit, query}: SearchFormProps) {

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      bookName: query.bookName,
      isbn: query.isbn,
      author: query.author,
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    onSearchSubmit(values);
  }

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField control={form.control} name="bookName" render={({field}) => (
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

