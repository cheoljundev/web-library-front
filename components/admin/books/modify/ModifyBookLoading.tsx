"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ModifyBookLoading() {
  return (
    <div className="space-y-4 animate-pulse">
      {/* 도서명 입력 필드 스켈레톤 */}
      <div className="flex flex-col space-y-1">
        <Skeleton className="h-4 w-24" /> {/* FormLabel 용 */}
        <Skeleton className="h-10 w-full rounded-md" /> {/* Input 용 */}
      </div>

      {/* ISBN 입력 필드 스켈레톤 */}
      <div className="flex flex-col space-y-1">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* 저자 입력 필드 스켈레톤 */}
      <div className="flex flex-col space-y-1">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* 설명 입력 필드 스켈레톤 */}
      <div className="flex flex-col space-y-1">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-24 w-full rounded-md" />
      </div>

      {/* 책표지 파일 입력 스켈레톤 */}
      <div className="flex flex-col space-y-1">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* 책표지 미리보기 영역 스켈레톤 */}
      <div>
        <Skeleton className="h-48 w-32 rounded-md" />
      </div>

      {/* 제출 버튼 스켈레톤 */}
      <div>
        <Skeleton className="h-10 w-32 rounded-md" />
      </div>
    </div>
  );
}