import Swal from "sweetalert2";

// Read Books__

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }

  return books;
};

// Wish List Book__

export const getWidhBooks = () => {
  let wishBook = [];
  const storedWishBooks = localStorage.getItem("wishBooks")
  if(storedWishBooks) {
    wishBook = JSON.parse(storedWishBooks);
  }

  return wishBook;
}

export const saveBooks = (book) => {
  let books = getBooks();
  const isReadBookExist = books.find((b) => b.id === book.id);

  if (isReadBookExist) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "warning",
      title: "Book is alrady exist",
    });
    return;
  }

  else{
    Swal.fire({
      title: "Are you sure?",
      text: "You want to add this book to read",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES, of course"
    }).then((result) => {
      if (result.isConfirmed) {
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));

        Swal.fire({
          title: "success",
          text: "Your book is added to read",
          icon: "success"
        });
      }
    });
  }
};

export const saveWishBooks = (book) => {
  let wishBooks = getWidhBooks();
  const isWishBookExist = wishBooks.find((b) => b.id === book.id);

  if (isWishBookExist) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "warning",
      title: "Book is alrady exist",
    });
    return;
  }

  else{
    Swal.fire({
      title: "Are you sure?",
      text: "You want to add this book to read",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES, of course"
    }).then((result) => {
      if (result.isConfirmed) {
        wishBooks.push(book);
        localStorage.setItem("wishBooks", JSON.stringify(wishBooks));

        Swal.fire({
          title: "success",
          text: "Your book is added to wish list",
          icon: "success"
        });
      }
    });
  }
};