export function blockSize (blockSize: number, currentPage: number, totalPage: number) {
  const startPage: number = (currentPage / blockSize) * blockSize + 1;
  const endPage: number = Math.min(startPage + blockSize, totalPage);
  const pageNumbers: number[] = [];
  for (let i = startPage; i < endPage; i++) {
    pageNumbers.push(i);
  }
  return {startPage, endPage, pageNumbers};
}

export const createHref = (
  pageNumber: number | null,
  query: { [key: string]: string | undefined } | null = {},
  searchParams: URLSearchParams | null = null
) => {
  if (searchParams) {
    return `?${searchParams.toString()}`;
  } else {
    const params = new URLSearchParams();
    // query가 null이면 {}를 사용합니다.
    Object.entries(query || {}).forEach(([key, value]) => {
      if (value !== undefined) {
        params.set(key, value);
      }
    });
    params.set("page", pageNumber!.toString());
    return `?${params.toString()}`;
  }
};

export const onSearchSubmit = async (query: { [key: string]: string | boolean | undefined }) => {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined) {
      if (typeof value === "string") {
        params.set(key, value);
      } else {
        params.set(key, value.toString());
      }
    }
  });
  location.href = `?${params.toString()}`;
};