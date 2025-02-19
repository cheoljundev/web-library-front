import ModifyBookClient from "@/components/admin/books/modify/ModifyBookClient";

export default async function AdminBooksModifyPage({params}: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  return (
    <article className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">도서 수정</h1>
      <ModifyBookClient id={id}/>
    </article>
  );
}