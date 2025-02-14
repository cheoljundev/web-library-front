import AddBookForm from "@/components/admin/books/add/AddBookForm";

export default function AdminBooksAddPage() {

  return (
    <article className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">도서 추가</h1>
      <AddBookForm/>
    </article>
  );
}