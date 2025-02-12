import React from "react";
import Link from "next/link";

export default function Header(){
  return (
    <div className="sticky top-0 z-[1] bg-base-100">
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
              <li><Link href="/admin">관리자</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link className="btn btn-ghost text-xl" href="/">온라인 도서관</Link>
        </div>
        <div className="navbar-end">
        </div>
      </div>

    </div>
  );
}