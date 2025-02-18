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