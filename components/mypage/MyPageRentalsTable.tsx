"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import {Page} from "@/types/Pagination";
import Pagination from "@/components/Pagination";
import {useState} from "react";
import {Rental} from "@/types/Book";
import RentalRow from "@/components/admin/books/rentals/RentalRow";
import MyPageRentalRow from "@/components/mypage/MyPageRentalRow";

interface RentalSearchFormProps {
  page: Page<Rental>;
  query: { bookName: string, isbn: string, author: string, returned: string },
}

export default function MyPageRentalsTable({page, query}: RentalSearchFormProps) {
  const [rentals] = useState<Rental[]>(page.content);
  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 py-2 text-left">책이름</TableHead>
              <TableHead className="px-4 py-2 text-left">isbn</TableHead>
              <TableHead className="px-4 py-2 text-left">저자</TableHead>
              <TableHead className="px-4 py-2 text-left">대출일자</TableHead>
              <TableHead className="px-4 py-2 text-left">반납일자</TableHead>
              <TableHead className="px-4 py-2 text-left"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rentals.length > 0 ? (
              rentals.map((rental, index) => (
                <MyPageRentalRow key={index} rental={rental} />
              ))
            ) : (
              <TableRow>
                <TableCell className="px-4 py-2" colSpan={6}>
                  대출 건을 찾을 수 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Pagination page={page} query={query} />
      </div>
    </>
  );
}