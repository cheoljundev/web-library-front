import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink, PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import {Page} from "@/types/Pagination";

interface PaginationProps {
  page: Page<any>;
  query: { [key: string]: string | undefined };
}

export default ({ page, query }: PaginationProps) => {
  // query 객체와 page 번호를 병합하는 헬퍼 함수
  const createHref = (pageNumber: number) => {
    // URLSearchParams는 객체를 직접 받아들이지 않으므로, query를 직접 key/value 쌍으로 설정
    const params = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined) {
        params.set(key, value);
      }
    });
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  return (
    <Pagination className="my-10">
      <PaginationContent>
        {page.first ? null : (
          <PaginationItem>
            <PaginationPrevious href={createHref(page.startPage - 1)} />
          </PaginationItem>
        )}
        {page.pageNumbers.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              isActive={pageNumber === page.currentPage}
              href={createHref(pageNumber)}
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
            isActive={page.totalPages === page.currentPage}
            href={createHref(page.totalPages)}
          >
            {page.totalPages}
          </PaginationLink>
        </PaginationItem>
        {page.last ? null : (
          <PaginationItem>
            <PaginationNext href={createHref(page.endPage)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};