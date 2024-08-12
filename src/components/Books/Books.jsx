import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Container from "../ui/Container";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const booksLoad = async () => {
      try {
        const res = await fetch("books.json");
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };

    booksLoad();
  }, []);

  return (
    <div className="my-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          Books
        </h2>
        <p className="md:w-2/5 lg:w-1/3 mx-auto">
          Journeys Through Pages Exploring Worlds, Minds, and Hearts with Every
          Turn of a Book.
        </p>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-16">
          {books?.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Books;
