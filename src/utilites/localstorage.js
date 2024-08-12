import toast from "react-hot-toast";

// <-!----Read Books ---->
const getStoredBook = () => {
  const storedBook = localStorage.getItem("book");
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};

const saveBook = (id) => {
  const storedBooks = getStoredBook();
  const exists = storedBooks.find((jobId) => jobId === id);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem("book", JSON.stringify(storedBooks));
    toast.success("Successfully Add Read Books");
  } else {
    return toast.error("Already exits this item");
  }
};

// <-!----Wishlist Books ---->
const getStoredWishlistBook = () => {
  const storedBook = localStorage.getItem("wishlist");
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};

const saveWishlistBook = (id) => {
  const storedBooks = getStoredWishlistBook();
  const exists = storedBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem("wishlist", JSON.stringify(storedBooks));
    toast.success("Successfully Add Wishlist Book");
  } else {
    return toast.error("Already exits this item");
  }
};

export { getStoredBook, saveBook, getStoredWishlistBook, saveWishlistBook };
