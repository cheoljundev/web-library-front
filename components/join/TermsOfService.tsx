"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TermsOfServiceProps {
  onAgree: () => void;
}

export default function TermsOfService({ onAgree }: TermsOfServiceProps) {
  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-center">이용약관</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 overflow-y-scroll border p-4 mb-4">
          {/* 실제 이용약관 내용을 여기에 작성 */}
          <p>
            제1조 (목적) <br/>
            본 약관은 귀하가 당사의 서비스를 이용함에 있어 필요한 기본 조건 및 절차를 규정하는 것을 목적으로 합니다. <br/><br/>

            제2조 (서비스 이용) <br/>
            당사는 회원에게 다양한 온라인 서비스를 제공하며, 회원은 본 약관에 동의한 후 서비스를 이용할 수 있습니다. <br/><br/>

            제3조 (회원의 의무) <br/>
            회원은 자신의 계정 정보 및 비밀번호를 안전하게 관리할 책임이 있으며, 이를 제3자에게 공유해서는 안 됩니다. <br/><br/>

            제4조 (면책사항) <br/>
            당사는 회원이 서비스를 이용하면서 발생한 문제에 대해 사전 고지 없이 면책할 수 있으며, 관련 법령에 따릅니다. <br/><br/>

            제5조 (기타) <br/>
            본 약관에 명시되지 않은 사항은 관련 법령 및 당사의 운영 정책에 따릅니다.
          </p>
        </div>
        <Button onClick={onAgree} className="w-full">
          동의합니다
        </Button>
      </CardContent>
    </Card>
  );
}