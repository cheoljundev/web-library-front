"use client"

import { useState } from "react"

interface SearchFormProps {
  onSearch: (query: { title: string; isbn: string; author: string }) => void
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [title, setTitle] = useState("")
  const [isbn, setIsbn] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch({ title, isbn, author })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-2">
        <input type="text" placeholder="책 제목"
               className="input input-bordered w-full"
               value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="ISBN"
               className="input input-bordered w-full"
               value={isbn} onChange={(e) => setIsbn(e.target.value)} />
        <input type="text" placeholder="저자"
               className="input input-bordered w-full"
               value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <button type="submit" className="btn w-1/6 btn-neutral mx-auto block">
        검색
      </button>
    </form>
  )
}

