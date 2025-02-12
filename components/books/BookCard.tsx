import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface Book {
  id: string
  title: string
  author: string
  isbn: string
  description: string
  coverUrl: string
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <Card className="block sm:flex md:block lg:flex items-center justify-around">
      <CardHeader className="flex-row">
        <img
          src={book.coverUrl}
          alt={`Cover of ${book.title}`}
          className="max-h-[150px]"
        />
      </CardHeader>
      <CardContent className="lg:w-[300px]">
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>저자 : {book.author}</CardDescription>
        <CardDescription>isbn : {book.isbn}</CardDescription>
        <CardDescription>{book.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <Link href={`/books/${book.id}`}>자세히</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}