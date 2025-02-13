import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {AspectRatio} from "@/components/ui/aspect-ratio";

// 더미 데이터 (실제 애플리케이션에서는 데이터베이스나 API에서 가져올 것입니다)
const books = [
  {
    id: "1",
    title: "해리 포터와 마법사의 돌",
    author: "J.K. 롤링",
    isbn: "9788983920683",
    description:
      "11살 생일에 호그와트 마법학교에 입학하면서 벌어지는 해리의 모험. 해리는 자신이 마법사라는 사실을 알게 되고, 호그와트에서 새로운 친구들과 함께 마법을 배우며 성장합니다. 그러나 어둠의 마왕 볼드모트의 위협이 다가오고 있었습니다...",
    coverUrl: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788983928207.jpg",
  },
  // 다른 책들...
]

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id)

  if (!book) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <article className="grid md:grid-cols-3 gap-8">
        <section className="md:col-span-1">
          <AspectRatio ratio={3/4}>
            <Image
              src={book.coverUrl}
              alt={`${book.title} 표지`}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </AspectRatio>
        </section>
        <section className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl mb-4">저자: {book.author}</p>
          <p className="mb-4">ISBN: {book.isbn}</p>
          <h2 className="text-2xl font-semibold mb-2">책 소개</h2>
          <p className="mb-6">{book.description}</p>
          <div className="flex space-x-4">
            <Button>대출</Button>
            <Button variant="outline">반납</Button>
          </div>
        </section>
      </article>
    </main>
  )
}

