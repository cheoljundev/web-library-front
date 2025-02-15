import { NextResponse } from 'next/server';
import axios from 'axios';
import config from '@/config';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const apiUrl = config.apiUrl;
    const axiosResponse = await axios.post(`${apiUrl}/login`, { username, password });
    const { data, headers } = axiosResponse;

    const response = NextResponse.json(data);

    // setCookieHeader의 타입을 명시적으로 단언
    const setCookieHeader = headers['set-cookie'] as string | string[] | undefined;
    if (setCookieHeader) {
      if (Array.isArray(setCookieHeader)) {
        setCookieHeader.forEach((cookieStr: string) => {
          const cookiePair = cookieStr.split(';')[0];
          const [cookieName, cookieValue] = cookiePair.split('=') as [string, string];
          response.cookies.set(cookieName, cookieValue, { path: '/' });
        });
      } else if (typeof setCookieHeader === 'string') {
        // 여기서 setCookieHeader는 확실히 string이므로 split 사용 가능
        const cookiePair = setCookieHeader.split(';')[0];
        const [cookieName, cookieValue] = cookiePair.split('=') as [string, string];
        response.cookies.set(cookieName, cookieValue, { path: '/' });
      }
    }

    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json(error.response.data.errors, { status: 401 });
    } else {
      // Axios 에러가 아닌 경우 기본 에러 처리
      return NextResponse.json({ message: '알 수 없는 에러가 발생했습니다.' }, { status: 500 });
    }
  }
}