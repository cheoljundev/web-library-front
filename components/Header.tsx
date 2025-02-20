'use client';
import React, {useState, useEffect} from "react";
import Link from "next/link";
import axios from "axios";
import config from "@/config";

const handleSignOut = async () => {
  try {
    const host = config.host;
    const {data} = await axios.post(`${host}/api/signout`);
    alert(data);
    location.href = "/";
  } catch (error) {
    // AxiosError 타입인지 체크합니다.
    if (axios.isAxiosError(error) && error.response) {
      const message = error.response.data;
      alert(message);
    } else {
      console.error("알 수 없는 에러", error);
    }
  }
}

const handleCheckUser = async () => {
  try {
    const host = config.host;
    const {data} = await axios.post(`${host}/api/auth-status`);
    return data;
  } catch (error) {
    console.error("알 수 없는 에러", error);
    return null;
  }
}

const handleCheckAdmin = async () => {
  try {
    const host = config.host;
    const {data} = await axios.post(`${host}/api/is-admin`);
    return data;
  } catch (error) {
    console.error("알 수 없는 에러", error);
    return null;
  }
}

export default function Header() {
  const [isUser, setIsUser] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    // 컴포넌트 마운트 후 사용자 상태를 비동기적으로 체크
    const checkUser = async () => {
      const result = await handleCheckUser();
      // result 값에 따른 로직 처리 (예를 들어, result가 true이면 로그인 상태)
      setIsUser(result);
    };

    // 컴포넌트 마운트 후 사용자 상태를 비동기적으로 체크
    const checkAdmin = async () => {
      const result = await handleCheckAdmin();
      // result 값에 따른 로직 처리 (예를 들어, result가 true이면 관리자)
      setIsAdmin(result);
    };

    checkUser();
    checkAdmin();
  }, []);

  return (
    <header className="sticky top-0 z-[1] bg-base-100">
      <div className="navbar mx-auto max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"/>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href="/">홈</Link></li>
              <li><Link href="/books">도서 목록</Link></li>
              {isAdmin && <li><Link href="/admin/books">관리자</Link></li>}
              {!isUser && <li><Link href="/login">로그인</Link></li>}
              {!isUser && <li><Link href="/join">회원가입</Link></li>}
              {isUser && <li><a onClick={handleSignOut}>로그아웃</a></li>}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link className="btn btn-ghost text-xl" href="/">온라인 도서관</Link>
        </div>
        <div className="navbar-end">
        </div>
      </div>
    </header>
  );
}