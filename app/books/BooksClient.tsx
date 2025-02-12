"use client"

import { useState } from "react"
import SearchForm from "@/components/books/SearchForm";
import BookList from "@/components/books/BookList"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink, PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

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
        book.title.toLowerCase().includes(query.title.toLowerCase()) ||
        book.isbn.includes(query.isbn) ||
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
        <Pagination className="my-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#"/>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">50</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}

