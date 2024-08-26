import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegFile } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const WishListBooksCard = ({ wishBook }) => {
  const { id, author, bookName, image, tags, publisher, totalPages, rating, category, yearOfPublishing } = wishBook;

  return (
    <div>
      <div className="card_main_container">
        <div className="card_left_container">
          <img
            src={image}
            alt="books img"
          />
        </div>
        <div className="card_right_container">
          <h2>{bookName}</h2>
          <p className="text-base text-[#b8b8b8] pt-3">By: {author}</p>
          <div className="card_tags">
            <h4>Tag</h4>
            <a className="bg-gray-200 py-1 px-4 text-[#23be0a] font-semibold rounded-3xl">
              #{tags[0]}
            </a>
            <a className="bg-gray-200 py-1 px-4 text-[#23be0a] font-semibold rounded-3xl">
              #{tags[1]}
            </a>
            <div className="card_location">
              <CiLocationOn className="text-2xl" />
              <p>Year of publlish : {yearOfPublishing}</p>
            </div>
          </div>
          <div className="card_publish">
            <p className="flex items-center gap-2">
              <IoPeopleOutline className="text-2xl " />
              <span className="text-[#717171]">Publisher: {publisher}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaRegFile className="text-2xl " />
              <span className="text-[#717171]">Page: {totalPages}</span>
            </p>
          </div>
          <div className="card_category">
            <span className="cat_one">Catagori: {category}</span>
            <span className="cat_two">Rating: {rating}</span>
            <Link to={`/bookdetails/${id}`}>
              <button className="card_btn">View details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

WishListBooksCard.propTypes = {
  wishBook: PropTypes.object
}

export default WishListBooksCard;