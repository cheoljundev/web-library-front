import BooksClient from "@/components/books/BooksClient";
import config from "@/config";
import axios from "axios";
import {Book} from "@/types/Book";
import {notFound} from "next/navigation";
import {Page} from "@/types/Pagination";

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
      <article className="container mx-auto max-w-7xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">도서 관리</h1>
        <BooksClient page={bookPage} admin={true} />
      </article>
    )
  } catch (e) {
    notFound();
  }
}

