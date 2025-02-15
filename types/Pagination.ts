export type Page<T> = {
  startPage: number;
  endPage: number;
  pageNumbers: number[];
  currentPage: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  content : T[];
}