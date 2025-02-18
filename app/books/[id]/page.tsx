import BookPageClient from "@/components/books/[id]/BookPageClient";

export default async function BookPage({params}: { params: Promise<{ id: string }> }) {
  // 동적 파라미터를 await하여 사용
  const {id} = await params;
  return <BookPageClient id={id}/>;
}