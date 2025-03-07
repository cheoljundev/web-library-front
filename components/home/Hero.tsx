import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">
          오프라인 도서관을 온라인으로 만나보세요
        </h1>
        <p className="text-xl mb-8">
          집에서 편하게 도서를 검색하고 대출 신청하세요. 언제 어디서나 도서관이 여러분 곁에 있습니다.
        </p>
        <Button variant={"secondary"} asChild>
          <Link href="/books">지금 시작하기</Link>
        </Button>
      </div>
    </section>
  );
}