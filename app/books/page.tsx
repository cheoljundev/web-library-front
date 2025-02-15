import BooksClient from "@/components/books/BooksClient"
import axios from "axios";
import {Page} from "@/types/Pagination";
import {Book} from "@/types/Book";
import {notFound} from "next/navigation";
import config from "@/config";

interface BooksPageProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function BooksPage({ searchParams }: BooksPageProps) {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page, 10) : 1;
  const host = config.host;

  try {
  const {data : bookPage} = await axios.get<Page<Book>>(`${host}/api/books?page=${page}`);
  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">도서 검색</h1>
      <BooksClient page={bookPage} admin={false} />
    </main>
  )
  } catch (e) {
    notFound();
  }

}

