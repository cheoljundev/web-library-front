import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink, PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import {Page} from "@/types/Pagination";

export default ({page}: { page: Page<any> }) => (
  <Pagination className="my-10">
    <PaginationContent>
      {
        page.first ? null : (
          <PaginationItem>
            <PaginationPrevious href={`?page=${page.startPage - 1}`}/>
          </PaginationItem>
        )
      }
      {
        page.pageNumbers.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink isActive={pageNumber === page.currentPage} href={`?page=${pageNumber}`}>{pageNumber}</PaginationLink>
          </PaginationItem>
        ))
      }
      {
        page.last ? null : (
          <PaginationItem>
            <PaginationEllipsis/>
          </PaginationItem>
        )
      }
      <PaginationItem>
        <PaginationLink href={`?page=${page.totalPages}`}>{page.totalPages}</PaginationLink>
      </PaginationItem>
      {
        page.last ? null : (
          <PaginationItem>
            <PaginationNext href={`?page=${page.endPage}`}/>
          </PaginationItem>
        )
      }
    </PaginationContent>
  </Pagination>
)