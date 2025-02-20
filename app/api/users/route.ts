import {NextResponse} from 'next/server';
import {Page} from "@/types/Pagination";
import {blockSize} from "@/utils";
import {User} from "@/types/User";

const users: User[] = [
  {id: 1, username: "alice", roles: ["admin"]},
  {id: 2, username: "bob", roles: ["user"]},
  {id: 3, username: "charlie", roles: ["moderator", "user"]},
];

export async function GET(request: Request) {
  const cookie = request.headers.get('cookie') || '';

  console.log('/api/users/ cookie: ',cookie); // 비어 있다.
  const {searchParams} = new URL(request.url);
  const page = searchParams.get("page"); // query string의 page 값을 가져옵니다.
  const currentPage: number = page ? parseInt(page, 10) - 1 : 0;

  const totalPage: number = 50;

  const {startPage, endPage, pageNumbers} = blockSize(5, currentPage, totalPage);

  const first: boolean = currentPage === 0;
  const last: boolean = currentPage === totalPage - 1;

  const userPage: Page<User> = {
    startPage: startPage,
    endPage: endPage,
    pageNumbers: pageNumbers,
    currentPage: currentPage + 1,
    totalPages: totalPage,
    first: first,
    last: last,
    content: users,
  }

  return NextResponse.json(userPage);
}