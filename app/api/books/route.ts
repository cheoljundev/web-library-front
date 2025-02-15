import {NextResponse} from 'next/server';
import {Page} from "@/types/Pagination";
import {Book} from "@/types/Book";
import {blockSize} from "@/utils";
import axios from "axios";
import config from "@/config";


export async function GET(request: Request) {

  const url = config.apiUrl;
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page"); // query string의 page 값을 가져옵니다.
  const currentPage : number = page ? parseInt(page, 10) - 1 : 0;

  const response = await axios.get(`${url}/books?page=${currentPage}`);

  const {
    first,
    last,
    totalPages,
    content : books,
  } = response.data;

  const {startPage, endPage, pageNumbers} = blockSize(5, currentPage, totalPages);

  books.map((book: Book) => {
    book.coverImage = `${config.apiUrl}${book.coverImage}`;

  });

  const bookPage: Page<Book> = {
    startPage: startPage,
    endPage: endPage,
    pageNumbers: pageNumbers,
    currentPage: currentPage + 1,
    totalPages: totalPages,
    first: first,
    last: last,
    content: books,
  }

  return NextResponse.json(bookPage);
}