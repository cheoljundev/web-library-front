import axios from 'axios';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import hostConfig from '@/config';

// 미들웨어 런타임을 Node.js로 설정 (Edge 런타임에서는 axios 사용 불가)
export const runtime = 'nodejs';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    // jsessionid 쿠키는 자동으로 request.cookies에 포함되어 있음
    const cookie = request.cookies.get('JSESSIONID')?.value;
    if (!cookie) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const host = hostConfig.host;
      const apiUrl = `${host}/api/is-admin`;

      // axios를 사용하여 POST 요청 보내기
      const { data: isAdmin } = await axios.post(apiUrl, {}, {
        headers: {
          Cookie: `JSESSIONID=${cookie}`,
        },
      });

      if (!isAdmin) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    } catch (error) {
      // API 호출 실패 시 접근 제한 또는 에러 페이지로 처리
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};