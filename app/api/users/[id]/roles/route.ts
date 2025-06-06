import {NextResponse} from 'next/server';
import axios from "axios";
import config from "@/config";


export async function PUT(request : Request, {params}: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  const {roles} = await request.json();
  const url = config.apiUrl;
  const cookie = request.headers.get('cookie') || '';

  try {
    const response = await axios.put(`${url}/users/${id}/roles`, roles,{headers : {cookie}});

    const {data} = response;

    return NextResponse.json(data.message);

  } catch (error) {

    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 403) {
        console.log(error.response.data.message)
        return NextResponse.json(error.response.data.message, {status: 403});
      }
    } else {
      // Axios 에러가 아닌 경우 기본 에러 처리
      return NextResponse.json('알 수 없는 에러 발생', {status: 500});
    }
  }

}