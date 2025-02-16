import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function DonePage() {
  return (
    <article className="py-8 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">가입 완료</h1>
      <Card>
        <CardHeader className="items-center">
          <CardTitle>가입이 완료되었습니다.</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <p>가입이 완료되었습니다. 로그인 페이지로 이동해주세요.</p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/login">로그인 페이지로 이동</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </article>
  )
}