import {User} from "@/types/User";
import {z} from "zod";

export type Book = {
  id: string
  bookName: string
  isbn: string
  author: string
  description: string
  coverImage: string
};

export type Rental = {
  id: string
  book: Book
  user: User
  rentedAt: string
  returnedAt: string
  returned : boolean
}