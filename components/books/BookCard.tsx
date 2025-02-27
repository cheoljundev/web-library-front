'use client'

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Book} from "@/types/Book";
import axios from "axios";
import config from "@/config";
import Image from "next/image";

export default function BookCard({ book, admin }: { book: Book, admin:boolean }) {
  const {host} = config;
  async function handleDelete() {
    if (confirm("정말 삭제하시겠습니까?")) {
      try {
        await axios.delete(`${host}/api/books/${book.id}`);
        location.reload();
      } catch (error) {
        // AxiosError 타입인지 체크합니다.
        if (axios.isAxiosError(error) && error.response) {

          if (error.response.status === 403) {
            alert(error.response.data);
          }

        } else {
          alert("서버 에러가 발생했습니다.");
        }
      }
    }
  }

  return (
    <Card className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 p-5">
      <CardHeader className="flex-row sm:col-span-2 md:col-span-2">
        <Image
          src={book.coverImage}
          width={150}
          height={300}
          alt={`Cover of ${book.bookName}`}
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-center col-span-1 sm:col-span-3 md:col-span-5">
        <CardTitle>{book.bookName}</CardTitle>
        <CardDescription>저자 : {book.author}</CardDescription>
        <CardDescription>isbn : {book.isbn}</CardDescription>
        <CardDescription className="line-clamp-4">{book.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2 sm:col-span-2 md:col-span-4">
        <Button asChild>
          <Link href={`/books/${book.id}`}>보기</Link>
        </Button>
        {admin && (
          <>
          <Button asChild variant="outline">
            <Link href={`/admin/books/modify/${book.id}`}>수정</Link>
          </Button>
          <Button variant="destructive" onClick={handleDelete}>삭제</Button>
          </>
        )}
      </CardFooter>
    </Card>
  )
}