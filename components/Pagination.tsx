import React, {JSX} from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { Page } from "@/types/Pagination";
import { createHref } from "@/utils";

interface PaginationProps<T> {
  page: Page<T>;
  query: { [key: string]: string | undefined };
}

const PaginationComponent = <T,>({ page, query }: PaginationProps<T>): JSX.Element => {
  return (
    <Pagination className="my-10">
      <PaginationContent>
        {page.first ? null : (
          <PaginationItem>
            <PaginationPrevious href={createHref(page.startPage - 1, query)} />
          </PaginationItem>
        )}
        {page.pageNumbers.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              isActive={pageNumber === page.currentPage}
              href={createHref(pageNumber, query)}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        {page.last ? null : (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink
            isActive={page.totalPages === 0 ? true : page.totalPages === page.currentPage}
            href={createHref(page.totalPages, query)}
          >
            {page.totalPages === 0 ? 1 : page.totalPages}
          </PaginationLink>
        </PaginationItem>
        {page.last ? null : (
          <PaginationItem>
            <PaginationNext href={createHref(page.endPage, query)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

PaginationComponent.displayName = "PaginationComponent";

export default PaginationComponent;