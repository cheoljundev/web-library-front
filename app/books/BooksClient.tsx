"use client"

import { useState } from "react"
import SearchForm from "@/components/books/SearchForm";
import BookList from "@/components/books/BookList"

interface Book {
  id: string
  title: string
  author: string
  isbn: string
  description: string
  coverUrl: string
}

interface BooksClientProps {
  initialBooks: Book[]
}

const ITEMS_PER_PAGE = 10

export default function BooksClient({ initialBooks }: BooksClientProps) {
  const [books, setBooks] = useState(initialBooks)
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearch = (query: { title: string; isbn: string; author: string }) => {
    const filteredBooks = initialBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(query.title.toLowerCase()) &&
        book.isbn.includes(query.isbn) &&
        book.author.toLowerCase().includes(query.author.toLowerCase()),
    )
    setBooks(filteredBooks)
    setCurrentPage(1)
  }

  const paginatedBooks = books.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">검색 결과</h2>
        <BookList books={paginatedBooks}/>
        <div className="flex justify-center my-8">
          <div className="join mx-auto">
            <button className="join-item btn">«</button>
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    </>
  )
}

