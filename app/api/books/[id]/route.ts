import {NextResponse} from 'next/server';
import axios from "axios";
import config from "@/config";
import {Book} from "@/types/Book";

export async function GET(request: Request, {params}: { params: Promise<{ id: string }> }) {
  const apiUrl = config.apiUrl;
  const {id} = await params;
  try {
    const {data: book} = await axios.get<Book>(`${apiUrl}/books/${id}`);

    book.coverImage = `${apiUrl}${book.coverImage}`;

    if (!book) {
      return NextResponse.json({error: '책 정보를 찾을 수 없습니다.'}, {status: 404});
    }

    return NextResponse.json(book);
  } catch {
    return NextResponse.json({error: '서버 에러'}, {status: 500});
  }
}

export async function PUT(request: Request, {params}: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  const formData = await request.formData();
  const apiUrl = config.apiUrl;
  const cookie = request.headers.get('cookie') || '';

  try {
    const axiosResponse = await axios.put(`${apiUrl}/books/${id}`, formData,
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

export async function DELETE(request: Request, {params}: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  const apiUrl = config.apiUrl;
  const cookie = request.headers.get('cookie') || '';

  try {
    const axiosResponse = await axios.delete(`${apiUrl}/books/${id}`,
      {
        headers: {
          cookie
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