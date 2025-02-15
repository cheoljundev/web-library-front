"use client"

import { useState } from "react"
import BookSearchForm from "@/components/books/BookSearchForm";
import BookList from "@/components/books/BookList"
import Pagination from "@/components/Pagination";
import {Page} from "@/types/Pagination";
import {Book} from "@/types/Book";

interface BooksClientProps {
  page: Page<Book>
  admin: boolean
}


export default function BooksClient({ page, admin }: BooksClientProps) {
  const [books] = useState(page.content)

  const handleSearch = (query: { title: string; isbn: string; author: string }) => {
    location.href = `?title=${query.title}&isbn=${query.isbn}&author=${query.author}`
  }

  return (
    <>
      <BookSearchForm onSearch={handleSearch} />
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">검색 결과</h2>
        <BookList books={books} admin={admin}/>
        <Pagination page={page}/>
      </div>
    </>
  )
}

