import {NextResponse} from 'next/server';
import {Page} from "@/types/Pagination";
import {Rental} from "@/types/Book";
import {blockSize, createHref} from "@/utils";
import axios from "axios";
import config from "@/config";

export async function GET(request: Request) {

  const url = config.apiUrl;
  const {searchParams} = new URL(request.url);
  const page = searchParams.get("page"); // query string의 page 값을 가져옵니다.
  const currentPage: number = page ? parseInt(page, 10) - 1 : 0;
  const cookie = request.headers.get('cookie') || '';
  searchParams.set('page', currentPage.toString());
  const queryString = createHref(null, null, searchParams);
  console.log(`queryString : ${queryString}`);

  try {
    const response = await axios.get(`${url}/books/rentals${queryString}`, {headers: {cookie}});

    const {
      first,
      last,
      totalPages,
      content: rentals,
    } = response.data;

    const {startPage, endPage, pageNumbers} = blockSize(5, currentPage, totalPages);

    rentals.map((rental: Rental) => {
      rental.book.coverImage = `${config.apiUrl}${rental.book.coverImage}`;
    });

    const bookPage: Page<Rental> = {
      startPage: startPage,
      endPage: endPage,
      pageNumbers: pageNumbers,
      currentPage: currentPage + 1,
      totalPages: totalPages,
      first: first,
      last: last,
      content: rentals,
    }

    console.log('bookPage : ', bookPage);

    return NextResponse.json(bookPage);
  } catch {
    return NextResponse.json({error: '서버 에러'}, {status: 500});
  }
}