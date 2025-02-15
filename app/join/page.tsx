'use client'

import JoinForm from "@/components/join/JoinForm";
import {useState} from "react";
import TermsOfService from "@/components/join/TermsOfService";


export default function JoinPage() {
  const [hasAgreed, setHasAgreed] = useState(false);

  const handleAgree = () => {
    setHasAgreed(true);
  };

  return (
    <article className="py-8 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">회원 가입</h1>
      {
        !hasAgreed ?
          <TermsOfService onAgree={handleAgree}/> :
          <JoinForm/>
      }
    </article>
  )
}