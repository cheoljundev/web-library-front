import Link from "next/link"
import {Button} from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">페이지를 찾을 수 없습니다</h2>
      <p className="mb-8">죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
      <Button asChild>
        <Link href="/">
          홈으로 돌아가기
        </Link>
      </Button>
    </div>
  )
}

