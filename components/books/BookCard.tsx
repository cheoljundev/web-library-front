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
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={book.coverUrl}
          alt={`Cover of ${book.title}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p className="text-sm">저자: {book.author}</p>
        <p className="text-sm">ISBN: {book.isbn}</p>
        <p className="text-sm line-clamp-2">{book.description}</p>
        <div className="card-actions flex justify-center mt-5">
          <button className="btn btn-primary">자세히</button>
        </div>
      </div>
    </div>
  )
}