import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Book} from "@/types/Book";

export default function BookCard({ book, admin }: { book: Book, admin:boolean }) {
  return (
    <Card className="block sm:flex md:block lg:flex items-center justify-around p-4">
      <CardHeader className="flex-row">
        <img
          src={book.coverImage}
          alt={`Cover of ${book.bookName}`}
          className="max-h-[150px]"
        />
      </CardHeader>
      <CardContent className="lg:w-[300px]">
        <CardTitle>{book.bookName}</CardTitle>
        <CardDescription>저자 : {book.author}</CardDescription>
        <CardDescription>isbn : {book.isbn}</CardDescription>
        <CardDescription className="line-clamp-4">{book.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-start sm:justify-between md:justify-start lg:justify-between gap-2">
        <Button asChild>
          <Link href={`/books/${book.id}`}>자세히</Link>
        </Button>
        {admin && (
          <Button asChild variant="outline">
            <Link href={`/admin/books/modify/${book.id}`}>수정</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}