'use client'

import {TableCell, TableRow} from "@/components/ui/table";
import {Rental} from "@/types/Book";
import {Button} from "@/components/ui/button";
import axios from "axios";
import config from "@/config";

export default function MyPageRentalRow({rental}: { rental: Rental }) {

  const handleReturn = async () => {
    const host = config.host;
    try {
      const { data } = await axios.post(`${host}/api/books/${rental.book.id}/return`);
      alert(data);
      location.reload();
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        alert(e.response.data);
      } else {
        console.error("알 수 없는 에러", e);
      }
    }
  }

  return <TableRow key={rental.id}>
    <TableCell className="px-4 py-2">{rental.book.bookName}</TableCell>
    <TableCell className="px-4 py-2">{rental.book.isbn}</TableCell>
    <TableCell className="px-4 py-2">{rental.book.author}</TableCell>
    <TableCell className="px-4 py-2">{rental.rentedAt}</TableCell>
    <TableCell className="px-4 py-2">{rental.returnedAt}</TableCell>
    <TableCell className="px-4 py-2">
      {!rental.returned ? <Button onClick={handleReturn}>반납</Button> : null}
    </TableCell>
  </TableRow>;
}