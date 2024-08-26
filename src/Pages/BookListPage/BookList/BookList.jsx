import { Link, Outlet } from "react-router-dom";
import "../BookList/BookList.css";
import { useState } from "react";

const BookList = () => {
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <div>
      <div className="main_list_container">
        <div className="main_inner_list_container">
          <div className="list_title">
            <h2>Books</h2>
          </div>
          <div className="book_list_container">
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800 pb-5 pl-5">
              <Link
                to=""
                onClick={() => setTabIdx(0)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIdx === 0
                    ? "border border-[#23be0a]  border-b-0 font-semibold"
                    : "border-b border-[#23be0a] text-[#989898]"
                } rounded-t-lg dark:border-gray-800 dark:text-gray-900`}
              >
                <span>Read Books</span>
              </Link>
              <Link
                to="wishlistbooks"
                onClick={() => setTabIdx(1)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIdx === 1
                    ? "border border-[#23be0a]  border-b-0 font-semibold"
                    : "border-b border-[#23be0a] text-[#989898]"
                } rounded-t-lg dark:border-gray-800 dark:text-gray-900`}
              >
                <span>Wishlist Books</span>
              </Link>
            </div>
          </div>
          <div className="book_card_comtainer">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
