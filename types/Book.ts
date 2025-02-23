import {User} from "@/types/User";

export type Book = {
  id: number
  bookName: string
  isbn: string
  author: string
  description: string
  coverImage: string
};

export type Rental = {
  id: number
  book: Book
  user: User
  rentedAt: string
  returnedAt: string
  returned : boolean
}