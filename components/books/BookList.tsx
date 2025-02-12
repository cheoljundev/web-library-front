import BookCard from "./BookCard"

interface Book {
  id: string
  title: string
  author: string
  isbn: string
  description: string
  coverUrl: string
}

export default function BookList({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}

