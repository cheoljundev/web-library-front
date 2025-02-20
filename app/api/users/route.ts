import {NextResponse} from 'next/server';
import {Page} from "@/types/Pagination";
import {blockSize} from "@/utils";
import {User} from "@/types/User";
import axios from "axios";
import config from "@/config";

export async function GET(request: Request)
{
  const url = config.apiUrl;
  const cookie = request.headers.get('cookie') || '';
  const {searchParams} = new URL(request.url);
  const page = searchParams.get("page"); // query string의 page 값을 가져옵니다.
  const username = searchParams.get("username") || '';
  const role = searchParams.get("role") || '';
  const currentPage: number = page ? parseInt(page, 10) - 1 : 0;

  const response = await axios.get(`${url}/users?page=${currentPage}&username=${username}&role=${role}`, {
    headers: {
      cookie: cookie
    }
  });

  const {
    first,
    last,
    totalPages,
    content: users,
  } = response.data;

  const {startPage, endPage, pageNumbers} = blockSize(5, currentPage, totalPages);

  const userPage: Page<User> = {
    startPage: startPage,
    endPage: endPage,
    pageNumbers: pageNumbers,
    currentPage: currentPage + 1,
    totalPages,
    first,
    last,
    content: users,
  }

  return NextResponse.json(userPage);
}