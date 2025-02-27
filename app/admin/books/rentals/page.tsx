import config from "@/config";
import axios from "axios";
import {Page} from "@/types/Pagination";
import {notFound} from "next/navigation";
import {headers} from "next/headers";
import RentalsClient from "@/components/admin/books/rentals/RentalsClient";
import {Rental} from "@/types/Book";
import {createHref} from "@/utils";

interface UsersPageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function UserManagementPage({searchParams}: UsersPageProps) {
  const cookie = (await headers()).get("cookie") || "";
  const host = config.host;

  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page, 10) : 1;
  const username = resolvedSearchParams.username || '';
  const bookName = resolvedSearchParams.bookName || '';
  const isbn = resolvedSearchParams.isbn || '';
  const author = resolvedSearchParams.author || '';
  const returned = resolvedSearchParams.returned || '';

  const query = {username, bookName, isbn, author, returned};

  const queryString = createHref(page, query);

  try {
    const {data : page} = await axios.get<Page<Rental>>(`${host}/api/books/rentals${queryString}`,
      { headers: { cookie } });

    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl font-bold mb-4">대출 관리</h1>
        <RentalsClient page={page} query={query} />
      </div>
    );
  } catch {
    notFound();
  }

}