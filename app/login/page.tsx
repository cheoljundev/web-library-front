import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
    <article className="py-8 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">로그인</h1>
      <LoginForm/>
    </article>
  )
}