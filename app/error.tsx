'use client';

import React from 'react';
import {Button} from "@/components/ui/button";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Error - 500</h2>
      <p className="mb-8">문제가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>
      <Button onClick={reset}>다시 시도</Button>
    </div>
  );
}