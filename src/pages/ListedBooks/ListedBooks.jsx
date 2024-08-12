import { IoIosArrowDown } from "react-icons/io";
import ShortBanner from "../../components/ShortBanner/ShortBanner";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../../components/ui/Container";
import "./ListedBooks.css";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getStoredBook,
  getStoredWishlistBook,
} from "../../utilites/localstorage";
import TabCard from "../../components/TabCard/TabCard";

const ListedBooks = () => {
  const books = useLoaderData();
  const [displayReadBook, setDisplayReadBook] = useState([]);
  const [displayWishlistBook, setDisplayWishlistBook] = useState([]);
  const [displayFilterBook, setDisplayFilterBook] = useState([]);

  useEffect(() => {
    const booksStoredId = getStoredBook();
    if (books.length > 0) {
      const booksStored = books.filter((item) =>
        booksStoredId.includes(item.bookId)
      );
      setDisplayReadBook(booksStored);
      setDisplayFilterBook(booksStored);
    }
  }, [books]);

  useEffect(() => {
    const booksStoredId = getStoredWishlistBook();
    if (books.length > 0) {
      const booksStored = [];
      for (const id of booksStoredId) {
        const book = books.find((book) => book.bookId === id);
        booksStored.push(book);
      }
      setDisplayWishlistBook(booksStored);
    }
  }, [books]);

  const handleFilterJobs = (filter) => {
    let sortedBooks = [];
    if (filter === "rating") {
      sortedBooks = [...displayReadBook].sort((a, b) => b.rating - a.rating);
    } else if (filter === "totalPages") {
      sortedBooks = [...displayReadBook].sort(
        (a, b) => b.totalPages - a.totalPages
      );
    } else if (filter === "yearOfPublishing") {
      sortedBooks = [...displayReadBook].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    }
    setDisplayFilterBook(sortedBooks);
  };

  return (
    <div>
      <ShortBanner title={"Book"} />
      <div className="my-10">
        <div className="flex justify-center mb-8">
          <details className="dropdown">
            <summary className="m-1 btn bg-[#23BE0A] text-white">
              Sort By <IoIosArrowDown />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a onClick={() => handleFilterJobs("rating")}>Rating</a>
              </li>
              <li>
                <a onClick={() => handleFilterJobs("totalPages")}>
                  Number of Page
                </a>
              </li>
              <li>
                <a onClick={() => handleFilterJobs("yearOfPublishing")}>
                  Publisher Year
                </a>
              </li>
            </ul>
          </details>
        </div>
        <Container>
          <Tabs>
            <TabList>
              <Tab>Read Books</Tab>
              <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel>
              {displayFilterBook.length ? (
                <div className="space-y-6 mt-8">
                  {displayFilterBook?.map((book, idx) => (
                    <TabCard key={idx} book={book} />
                  ))}
                </div>
              ) : (
                <div className="h-[40vh] flex justify-center items-center">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-5">
                      Here are is nothing 🤷‍♀️!!
                    </h2>
                    <p>
                      If finished read the book details then Click the{" "}
                      <strong>read button</strong>
                    </p>
                  </div>
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {displayWishlistBook.length ? (
                <div className="space-y-6 mt-8">
                  {displayWishlistBook?.map((book, idx) => (
                    <TabCard key={idx} book={book} />
                  ))}
                </div>
              ) : (
                <div className="h-[40vh] flex justify-center items-center">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-5">
                      Here are is nothing 🐱‍👓!!
                    </h2>
                    <p>
                      If finished read the book details then Click the
                      <strong> wishlist button</strong>
                    </p>
                  </div>
                </div>
              )}
            </TabPanel>
          </Tabs>
        </Container>
      </div>
    </div>
  );
};

export default ListedBooks;
