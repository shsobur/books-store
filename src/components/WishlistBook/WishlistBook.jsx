import { useEffect, useState } from "react";
import "../WishlistBook/WishlistBook.css";
import { getWidhBooks } from "../uilitis/Index";
import WishListBooksCard from "../WishListBooksCard/WishListBooksCard";

const WishlistBook = () => {
  const [wishlistBooks, setWishlistBooks] = useState([]);

  useEffect(() => {
    const storedWishListBooks = getWidhBooks();
    setWishlistBooks(storedWishListBooks);
  } ,[])

  return (
    <div>
      {
        wishlistBooks.map(wishBook => <WishListBooksCard key={wishBook.id} wishBook={wishBook}></WishListBooksCard>)
      }
    </div>
  );
};

export default WishlistBook;