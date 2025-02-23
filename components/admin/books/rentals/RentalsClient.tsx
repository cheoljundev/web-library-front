'use client'

import {Page} from "@/types/Pagination";
import {onSearchSubmit} from "@/utils";
import {Rental} from "@/types/Book";
import RentalSearchForm from "@/components/admin/books/rentals/RentalSearchForm";
import RentalsTable from "@/components/admin/books/rentals/RentalsTable";

interface RentalsClientProps {
  page : Page<Rental>;
  query: {username : string, bookName : string, isbn : string, author : string, returned : string};
}

export default function RentalsClient({page, query} : RentalsClientProps) {
  return (
    <>
      <RentalSearchForm onSubmitAction={onSearchSubmit} query={query}/>
      <RentalsTable page={page} query={query}/>
    </>
  );
}