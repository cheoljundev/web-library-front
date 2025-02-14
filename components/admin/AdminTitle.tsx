import {Settings} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function AdminTitle() {
  return (
      <Alert variant="default" className="mb-4 w-full max-w-7xl mx-auto border-none">
        <Settings className="h-4 w-4"/>
        <AlertTitle>관리자 페이지</AlertTitle>
        <AlertDescription>
          관리자 페이지에 접속하셨습니다.
        </AlertDescription>
      </Alert>
  );
}