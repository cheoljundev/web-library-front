import {NextResponse} from 'next/server';
import axios from "axios";
import config from "@/config";

export async function POST(request: Request, {params}: { params: Promise<{ id: string }> }) {
  const apiUrl = config.apiUrl;
  const {id} = await params;
  const cookie = request.headers.get('cookie') || '';

  try {
    const {data} = await axios.post(`${apiUrl}/books/${id}/return`, {}, {headers: {cookie}});
    return NextResponse.json(data.message);
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      return NextResponse.json(e.response.data.message, {status: 400});
    } else {
      return NextResponse.json('알 수 없는 에러가 발생했습니다.', {status: 500});
    }
  }
}