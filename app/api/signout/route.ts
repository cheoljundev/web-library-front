import {NextResponse} from 'next/server';
import axios from 'axios';
import config from '@/config';

export async function POST(request: Request) {
  try {

    const apiUrl = config.apiUrl;

    const cookie = request.headers.get('cookie') || '';

    const axiosResponse = await axios.post(`${apiUrl}/signout`,
      {},
      { headers: { cookie } }
    );
    const { data } = axiosResponse;

    return NextResponse.json(data.message);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json(error.response.data.message, { status: 400 });
    } else {
      // Axios 에러가 아닌 경우 기본 에러 처리
      return NextResponse.json({ message: '알 수 없는 에러가 발생했습니다.' }, { status: 500 });
    }
  }
}