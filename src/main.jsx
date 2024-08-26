import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Routes/Main";
import Home from "./Pages/HomePage/Home/Home";
import BookList from "./Pages/BookListPage/BookList/BookList";
import PageToRead from "./Pages/ReadPage/PageToRead/PageToRead";
import BookDetails from "./components/BookDetails/BookDetails";
import ReadBooks from "./components/ReadBooks/ReadBooks";
import WishlistBook from "./components/WishlistBook/WishlistBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/booklist",
        element: <BookList></BookList>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlistbooks",
            element: <WishlistBook></WishlistBook>
          }
        ]
      },
      {
        path: "/readpage",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../books.json")
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
