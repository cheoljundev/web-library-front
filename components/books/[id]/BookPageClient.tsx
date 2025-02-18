'use client'
import {notFound} from "next/navigation";
import axios from "axios";
import config from "@/config";
import {Book} from "@/types/Book";
import {useEffect, useState} from "react";
import BookPageLoading from "@/components/books/[id]/BookPageLoading";
import BookContent from "@/components/books/[id]/BookContent";

export default function BookPageClient({id}: { id: string }) {
  const host = config.host;
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const {data} = await axios.get(`${host}/api/books/${id}`);
        setBook(data);
      } catch {
        setBook(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [host, id]);

  if (loading) {
    return BookPageLoading();
  }

  if (!book) {
    return notFound();
  }

  return BookContent(book);
}