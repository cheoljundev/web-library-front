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
    <article className="py-8">
      {
        !hasAgreed ?
        <TermsOfService onAgree={handleAgree}/> :
        <JoinForm/>
      }
    </article>
  )
}