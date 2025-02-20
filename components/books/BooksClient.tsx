"use client"

import { useState } from "react"
import BookSearchForm from "@/components/books/BookSearchForm";
import BookList from "@/components/books/BookList"
import Pagination from "@/components/Pagination";
import {Page} from "@/types/Pagination";
import {Book} from "@/types/Book";

interface BooksClientProps {
  page: Page<Book>,
  admin: boolean,
  query: { bookName: string; isbn: string; author: string }
}


export default function BooksClient({ page, admin, query }: BooksClientProps) {
  const [books] = useState(page.content)

  const handleSearch = (query: { bookName: string; isbn: string; author: string }) => {
    location.href = `?bookName=${query.bookName}&isbn=${query.isbn}&author=${query.author}`
  }

  return (
    <>
      <BookSearchForm onSearch={handleSearch} query={query} />
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">검색 결과</h2>
        <BookList books={books} admin={admin}/>
        <Pagination page={page} query={query}/>
      </div>
    </>
  )
}

