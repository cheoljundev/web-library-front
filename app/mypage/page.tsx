import axios from "axios";
import {Page} from "@/types/Pagination";
import {Rental} from "@/types/Book";
import {headers} from "next/headers";
import config from "@/config";
import {createHref} from "@/utils";
import MyPageRentalClient from "@/components/mypage/MyPageRentalClient";
import MyPageDashboard from "@/components/mypage/MyPageDashboard";
import {User} from "@/types/User";

interface MyPageProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function MyPage({searchParams}: MyPageProps) {
  const cookie = (await headers()).get("cookie") || "";
  const host = config.host;

  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page, 10) : 1;
  const bookName = resolvedSearchParams.bookName || '';
  const isbn = resolvedSearchParams.isbn || '';
  const author = resolvedSearchParams.author || '';
  const returned = resolvedSearchParams.returned || '';

  const query = {bookName, isbn, author, returned};

  const queryString = createHref(page, query);

  try {
    const {data : page} = await axios.get<Page<Rental>>(`${host}/api/users/rentals${queryString}`,
      { headers: { cookie } });
    const {data : user} = await axios.get<User>(`${host}/api/users/me`,
      { headers: { cookie } });
    return (
      <main className="container mx-auto max-w-7xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">마이페이지</h1>
        <h2 className="text-2xl font-bold mb-8">내 정보</h2>
        <MyPageDashboard username={user.username} remainingRentals={user.remainingRents} roles={user.roles}/>
        <h2 className="text-2xl font-bold mb-8">대출 도서 확인</h2>
        <MyPageRentalClient page={page} query={query}/>
      </main>
    )
  } catch {
    throw new Error("Internal Server Error");
  }
}