export default function HowItWorks() {
  const steps = [
    { number: 1, title: "회원가입", description: "간단한 정보로 회원가입을 완료하세요." },
    { number: 2, title: "도서 검색", description: "원하는 도서를 검색하고 선택하세요." },
    { number: 3, title: "대출 신청", description: "선택한 도서의 대출을 신청하세요." },
    { number: 4, title: "도서관 방문", description: "도서관을 방문하여 도서를 수령하세요." },
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">이용 방법</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="bg-gray-300 text-gray-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold border-2 border-gray-500"
              >
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-700 line-clamp-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}