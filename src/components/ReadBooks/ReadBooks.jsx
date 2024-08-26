import { useEffect, useState } from "react";
import "../../components/ReadBooks/ReadBooks.css";
import { getBooks } from "../uilitis/Index";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedReadBooks = getBooks();
    setReadBooks(storedReadBooks);
  }, [])

  return (
    <div>
      {
        readBooks.map(readBook => <ReadBooksCard key={readBook.id} readBook={readBook}></ReadBooksCard>)
      }
    </div>
  );
};

export default ReadBooks;