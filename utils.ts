export function blockSize (blockSize: number, currentPage: number, totalPage: number) {
  const startPage: number = (currentPage / blockSize) * blockSize + 1;
  const endPage: number = Math.min(startPage + blockSize, totalPage);
  const pageNumbers: number[] = [];
  for (let i = startPage; i < endPage; i++) {
    pageNumbers.push(i);
  }
  return {startPage, endPage, pageNumbers};
}

export const createHref = (pageNumber: number, query: { [key: string]: string | undefined }) => {
  // query 객체와 page 번호를 병합하는 헬퍼 함수
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

export const onSearchSubmit = async (query: { [key: string]: string | undefined }) => {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined) {
      params.set(key, value);
    }
  });
  location.href = `?${params.toString()}`;
};