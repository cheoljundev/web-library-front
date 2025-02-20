import {NextResponse} from 'next/server';
import axios from "axios";
import config from "@/config";


export async function GET(request : Request) {

  const url = config.apiUrl;
  const cookie = request.headers.get('cookie') || '';

  console.log('/api/users/roles cookie: ',cookie); // 비어 있다.

  try {
    const response = await axios.get(`${url}/users/roles`, {headers : {cookie}});

    const {data} = response;

    console.log(data)

    return NextResponse.json(data);

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