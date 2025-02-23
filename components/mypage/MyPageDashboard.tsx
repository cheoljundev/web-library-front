"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// lucide-react 아이콘 예시
import { User, Book, Shield } from "lucide-react";
import {Role} from "@/types/User";

interface MyPageDashboardProps {
  username: string;
  remainingRentals: number;
  roles: Role[];
}

export default function MyPageDashboard({
                                          username,
                                          remainingRentals,
                                          roles,
                                        }: MyPageDashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* 첫 번째 카드 - 유저네임 */}
      <Card className="bg-orange-500 text-white">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <User className="w-6 h-6" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{username}</div>
          <div className="text-sm mt-1">유저 네임</div>
        </CardContent>
      </Card>

      {/* 두 번째 카드 - 남은 대출 권수 */}
      <Card className="bg-gray-800 text-white">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <Book className="w-6 h-6" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{remainingRentals}</div>
          <div className="text-sm mt-1">남은 대출 권수</div>
        </CardContent>
      </Card>

      {/* 세 번째 카드 - 권한 목록 */}
      <Card className="bg-blue-500 text-white">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <Shield className="w-6 h-6" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {
              roles.map((role) => role.description).join(", ")
            }
          </div>
          <div className="text-sm mt-1">권한</div>
        </CardContent>
      </Card>
    </div>
  );
}