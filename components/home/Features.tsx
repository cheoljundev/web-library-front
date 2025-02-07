import { Search, BookOpen, BookOpenCheck } from "lucide-react"

export default function Features() {

  const features = [
    { icon: Search, title: "도서 검색", description: "원하는 도서를 쉽고 빠르게 찾아보세요." },
    { icon: BookOpen, title: "온라인 대출 신청", description: "클릭 한 번으로 도서 대출을 신청할 수 있습니다." },
    { icon: BookOpenCheck, title: "도서 미리보기", description: "도서의 간단한 정보를 확인할 수 있습니다." },
  ]

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <feature.icon className="w-20 h-20 text-blue-500"/>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}