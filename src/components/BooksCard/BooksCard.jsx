import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../components/BooksCard/BooksCard.css";
import { CiStar } from "react-icons/ci";

const BooksCard = ({book}) => {
  const { id, bookName, image, author, category, tags, rating } = book;

  return (
    <>
      <Link to={`/bookdetails/${id}`} className="books_card">
        <article className="flex flex-col dark:bg-gray-50">
          <Link
            to={`/bookdetails/${id}`}
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <img
              className="object-cover bg-gray-100 m-auto h-52 rounded-lg"
              src={image}
            />
          </Link>
          <div className="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
            >
              <div className="flex items-center justify-start gap-5 text-[#23be0a]">
                <a className="bg-gray-200 p-2 font-bold rounded-xl">
                  {tags[0]}
                </a>
                <a className="bg-gray-200 p-2 font-bold rounded-xl">
                  {tags[1]}
                </a>
              </div>
            </a>
            <h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">
              {bookName}
            </h3>
            <h4 className="text-sm font-bold text-[#424242]">By: {author}</h4>
            <div className="flex flex-wrap justify-between pt-8 space-x-2 text-[#424242] font-normal dark:text-gray-600">
              <span>{category}</span>
              <span className="flex items-center gap-1">
                {rating}
                <CiStar />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

BooksCard.propTypes = {
  book: PropTypes.object,
};

export default BooksCard;
