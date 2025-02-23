"use client";

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";
import {Button} from "@/components/ui/button";

const searchFormSchema = z.object({
  username: z.string(),
  bookName: z.string(),
  isbn: z.string(),
  author: z.string(),
  returned: z.string(),
});

export type SearchFormValues = z.infer<typeof searchFormSchema>;

interface RentalSearchFormProps {
  onSubmitAction: (data: SearchFormValues) => void;
  query: { username: string, bookName: string, isbn: string, author: string, returned: string };
}

export default function RentalSearchForm({onSubmitAction, query}: RentalSearchFormProps) {
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      username: query.username,
      bookName: query.bookName,
      isbn: query.isbn,
      author: query.author,
      returned: query.returned,
    },
  });

  const getSelectedReturnedDescription = (selectedReturned: string) => {
    if (selectedReturned === `false`) {
      return `미반납`;
    } else if (selectedReturned === `true`) {
      return `반납`;
    } else {
      return `전체`;
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitAction)} className="space-y-4 mb-6">
        <FormField
          control={form.control}
          name="username"
          render={({field}) => (
            <FormItem className="w-full">
              <FormLabel>유저네임</FormLabel>
              <FormControl>
                <Input placeholder="유저네임" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bookName"
          render={({field}) => (
            <FormItem className="w-full">
              <FormLabel>책 이름</FormLabel>
              <FormControl>
                <Input placeholder="책 이름" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isbn"
          render={({field}) => (
            <FormItem className="w-full">
              <FormLabel>isbn</FormLabel>
              <FormControl>
                <Input placeholder="isbn" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({field}) => (
            <FormItem className="w-full">
              <FormLabel>저자</FormLabel>
              <FormControl>
                <Input placeholder="저자" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="returned"
          render={({field}) => (
            <FormItem className="w-full">
              <FormLabel>반납</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>{getSelectedReturnedDescription(field.value)}</SelectTrigger>
                  <SelectContent>
                    <SelectItem value={`false`}>미반납</SelectItem>
                    <SelectItem value={`true`}>반납</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit">검색</Button>
      </form>
    </Form>
  );
}