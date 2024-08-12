import { useLoaderData, useParams } from "react-router-dom";
import "./BookDetails.css";
import ShortBanner from "../ShortBanner/ShortBanner";
import Container from "../ui/Container";
import {
  getStoredBook,
  saveBook,
  saveWishlistBook,
} from "../../utilites/localstorage";
import toast from "react-hot-toast";

const BookDetails = () => {
  const { id } = useParams();

  const books = useLoaderData();
  const book = books.find((item) => item.bookId === id);

  const handleRead = () => {
    saveBook(id);
  };

  const handleWishlist = () => {
    const readBookIdLS = getStoredBook();
    for (const readId of readBookIdLS) {
      if (readId === id) {
        return toast.error("you can't add wishlist cause you read");
      }
    }
    saveWishlistBook(id);
  };

  return (
    <div>
      <ShortBanner title={" See the book details"} />
      <Container>
        <div className="md:flex gap-12 my-10">
          <div className="bg-[#1313130D] p-10 md:p-12 lg:p-16 w-full rounded mb-8 md:mb-0">
            <img
              src={book.image}
              alt={book.bookName}
              className="mx-auto h-60 sm:h-96 md:h-[550px] lg:h-[600px]"
            />
          </div>
          <div className="w-full ">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">
              {book.bookName}
            </h1>
            <h4 className="text-lg md:text-xl font-medium ">
              By: {book.author}
            </h4>
            <hr className="my-3" />
            <p className="md:text-lg font-medium">{book.category}</p>
            <hr className="my-3" />
            <p>
              <strong>Review: </strong> {book.review}
            </p>
            <p>
              <strong>Tag: </strong>
              {book?.tags?.map((tag, idx) => (
                <button
                  key={idx}
                  className="btn btn-xs mr-4 my-4 text-[#23BE0A]"
                >
                  {tag}
                </button>
              ))}
            </p>
            <hr className="my-3" />
            <div className="space-y-2">
              <p className="flex justify-between gap-4 md:gap-6 lg:gap-10 sm:pr-[32%] lg:pr-[51%]">
                <p className="text-[#131313B3]">Number of Pages:</p>
                <strong>{book.totalPages}</strong>
              </p>
              <p className="flex justify-between gap-4 md:gap-6 lg:gap-10 sm:pr-[0%] lg:pr-[34%]">
                <span className="text-[#131313B3]">Publisher:</span>
                <strong>{book.publisher}</strong>
              </p>
              <p className="flex justify-between gap-4 md:gap-6 lg:gap-10 sm:pr-[0%] lg:pr-[51%]">
                <span className="text-[#131313B3]">year Of Publishing:</span>
                <strong>{book.yearOfPublishing}</strong>
              </p>
              <p className="flex justify-between gap-4 md:gap-6 lg:gap-10 sm:pr-[30%] lg:pr-[51%]">
                <span className="text-[#131313B3]">Rating:</span>
                <strong>{book.rating}</strong>
              </p>
            </div>
            <div className="flex gap-5 mt-8">
              <button
                onClick={() => handleRead(book.bookId)}
                className="btn btn-outline"
              >
                Read
              </button>
              <button
                onClick={() => handleWishlist(book.bookId)}
                className="btn bg-[#50B1C9] text-white"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookDetails;
