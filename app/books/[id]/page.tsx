import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {AspectRatio} from "@/components/ui/aspect-ratio";
import axios from "axios";
import config from "@/config";
import {Book} from "@/types/Book";

export default async function BookPage({ params }: { params: { id: string } }) {
  const host = config.host;

  try {
    const {data: book} = await axios.get<Book>(`${host}/api/books/${params.id}`);
    return (
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <article className="grid md:grid-cols-3 gap-8">
          <section className="md:col-span-1">
            <AspectRatio ratio={3/4}>
              <Image
                src={book.coverImage}
                alt={`${book.bookName} 표지`}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </AspectRatio>
          </section>
          <section className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{book.bookName}</h1>
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
  } catch (e) {
    notFound();
  }
}

