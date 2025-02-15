import BookCard from "./BookCard"
import {Book} from "@/types/Book";

export default function BookList({ books, admin }: { books: Book[], admin:boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} admin={admin} />
      ))}
    </div>
  )
}

