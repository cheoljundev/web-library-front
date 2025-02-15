import {NextResponse} from 'next/server';

const books = [
  {
    id: "1",
    title: "해리 포터와 마법사의 돌",
    author: "J.K. 롤링",
    isbn: "9788983920683",
    description:
      "11살 생일에 호그와트 마법학교에 입학하면서 벌어지는 해리의 모험...",
    coverUrl: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788983928207.jpg",
  },
  // 다른 책들...
];

export async function GET(request: Request, {params}: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    return NextResponse.json({error: '책 정보를 찾을 수 없습니다.'}, {status: 404});
  }

  return NextResponse.json(book);
}