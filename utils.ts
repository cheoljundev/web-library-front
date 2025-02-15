export function blockSize (blockSize: number, currentPage: number, totalPage: number) {
  const startPage: number = (currentPage / blockSize) * blockSize + 1;
  const endPage: number = Math.min(startPage + blockSize, totalPage);
  const pageNumbers: number[] = [];
  for (let i = startPage; i < endPage; i++) {
    pageNumbers.push(i);
  }
  return {startPage, endPage, pageNumbers};
}