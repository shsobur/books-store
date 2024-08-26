import { useLoaderData, useParams } from "react-router-dom";
import "../BookDetails/BookDetails.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const book = books.find((book) => book.id === intId);

  console.log(book);

  return (
    <>
      <div
        id="main_details_container"
        className="card lg:card-side bg-base-100"
      >
        <figure id="left_side">
          <img src={book.image} alt="Album" className="rounded-xl" />
        </figure>
        <div id="right_side" className="card-body">
          <h2 className="card-title text-4xl font-bold">{book.bookName}</h2>
          <div>
            <p className="font-semibold text-[#ff6767]">By: {book.author} </p>
          </div>
          <hr />
          <div className="text-base font-medium text-[#424242]">
            <p>{book.category}</p>
          </div>
          <hr />
          <div>
            <p>
              <span className="font-bold">Review : </span>
              {book.review}
            </p>
          </div>
          <div className="flex items-center mt-6 pb-4 gap-10">
            <h4 className="font-bold">Tag</h4>
            <div className="flex gap-6 items-center justify-start">
              <a className=" p-2 rounded-xl text-[#23be0a] font-bold bg-[#edf7eb]">
                #{book.tags[0]}
              </a>
              <a className="p-2 rounded-xl text-[#23be0a] font-bold bg-[#edf7eb]">
                #{book.tags[1]}
              </a>
            </div>
          </div>
          <hr />
          <>
            <tbody className="Books_details_table">
              <table>
                <tr>
                  <td>Number of Pages :</td>
                  <th>{book.totalPages}</th>
                </tr>
                <tr>
                  <td>Publisher :</td>
                  <th>{book.publisher}</th>
                </tr>
                <tr>
                  <td>Year of Publishing :</td>
                  <th>{book.yearOfPublishing}</th>
                </tr>
                <tr>
                  <td>Rating :</td>
                  <th>{book.rating}</th>
                </tr>
              </table>
            </tbody>
          </>
          <div className="card-actions gap-8 justify-start mt-4">
            <button className="btn btn-outline">Read</button>
            <button className="btn btn-info bg-[#59c6d2]  text-white font-bold">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
