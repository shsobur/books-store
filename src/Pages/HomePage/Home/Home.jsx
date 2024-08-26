import { Link } from "react-router-dom";
import "../Home/Home.css";
import { useEffect, useState } from "react";
import BooksCard from "../../../components/BooksCard/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setBooks(data);
    })
  }, []);

  return (
    <>
      <div className="main_baner_container">
        <div className="main_inner_container">
          <div className="left_container">
            <div className="baner_contain">
              <h1>Books to freshen up your bookshelf</h1>
              <Link to="/booklist">
                <button className="btn btn-success bg-[#23be0a] hover:bg-[#3ba42b] text-white font-bold">
                  View The List
                </button>
              </Link>
            </div>
          </div>
          <div className="right_container">
            <div className="baner_image">
              <img src="https://i.ibb.co/MZYWQZV/baner-img.png" alt="Book" />
            </div>
          </div>
        </div>
      </div>
      <div className="main_books_container">
        <div className="books_title">
          <h2>Books</h2>
        </div>
        <div className="main_books_inner_container">
          {
            books.map(book => <BooksCard key={book.id} book={book}></BooksCard>)
          }
        </div>
      </div>
    </>
  );
};

export default Home;
