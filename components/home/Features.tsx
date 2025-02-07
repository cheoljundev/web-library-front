import { Search, BookOpen, BookOpenCheck } from "lucide-react"

export default function Features() {

  const features = [
    { icon: Search, title: "도서 검색", description: "원하는 도서를 쉽고 빠르게 찾아보세요." },
    { icon: BookOpen, title: "온라인 대출 신청", description: "클릭 한 번으로 도서 대출을 신청할 수 있습니다." },
    { icon: BookOpenCheck, title: "도서 미리보기", description: "도서의 간단한 정보를 확인할 수 있습니다." },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}