'use client'

import {Page} from "@/types/Pagination";
import {onSearchSubmit} from "@/utils";
import {Rental} from "@/types/Book";
import RentalSearchForm from "@/components/admin/books/rentals/RentalSearchForm";
import RentalsTable from "@/components/admin/books/rentals/RentalsTable";
import MyPageRentalSearchForm from "@/components/mypage/MyPageRentalSearchForm";
import MyPageRentalsTable from "@/components/mypage/MyPageRentalsTable";

interface RentalsClientProps {
  page : Page<Rental>;
  query: {bookName : string, isbn : string, author : string, returned : string};
}

export default function MyPageRentalClient({page, query} : RentalsClientProps) {
  return (
    <>
      <MyPageRentalSearchForm onSubmitAction={onSearchSubmit} query={query}/>
      <MyPageRentalsTable page={page} query={query}/>
    </>
  );
}