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

// Add to read list__

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
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
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
      icon: "success",
      title: "Book is added to read list",
    });
  }
};

// Add to wish list__

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
    wishBooks.push(book);
    localStorage.setItem("wishBooks", JSON.stringify(wishBooks));
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
      icon: "success",
      title: "Book is added to wish list",
    });
  }
};