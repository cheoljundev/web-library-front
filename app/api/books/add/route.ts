import {NextResponse} from 'next/server';
import axios from 'axios';
import config from '@/config';

export async function POST(request: Request) {
  const formData = await request.formData();
  const apiUrl = config.apiUrl;
  const cookie = request.headers.get('cookie') || '';

  try {
    const axiosResponse = await axios.post(`${apiUrl}/books/add`, formData,
      {
        headers: {
          cookie,
          'Content-Type': 'multipart/form-data',
        }
      });
    const {data} = axiosResponse;
    return NextResponse.json(data.message);

  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 403) {
        return NextResponse.json(error.response.data.message, {status: 403});
      }
      return NextResponse.json(error.response.data.errors, {status: 400});
    } else {
      // Axios 에러가 아닌 경우 기본 에러 처리
      return NextResponse.json('알 수 없는 에러 발생', {status: 500});
    }
  }
}