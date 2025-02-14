import BooksClient from "@/app/books/BooksClient";

// 더미 데이터
const dummyBooks = [
  {
    id: "1",
    title: "해리 포터와 마법사의 돌",
    author: "J.K. 롤링",
    isbn: "9788983920683",
    description: "11살 생일에 호그와트 마법학교에 입학하면서 벌어지는 해리의 모험",
    coverUrl: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791188331796.jpg",
  },
  {
    id: "2",
    title: "1984",
    author: "조지 오웰",
    isbn: "9788937460777",
    description: "극단적인 전체주의 사회를 그린 디스토피아 소설",
    coverUrl: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158883591.jpg",
  },
  // 추가 더미 데이터
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `${i + 3}`,
    title: `책 제목 ${i + 3}`,
    author: `저자 ${i + 3}`,
    isbn: `978123456${(i + 3).toString().padStart(4, "0")}`,
    description: `이것은 책 ${i + 3}의 설명입니다. 흥미진진한 내용이 담겨 있습니다.`,
    coverUrl: `https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158883591.jpg`,
  })),
]

export default function BooksPage() {
  return (
    <article className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">도서 관리</h1>
      <BooksClient initialBooks={dummyBooks} admin={true} />
    </article>
  )
}

