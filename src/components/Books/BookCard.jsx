import PropTypes from "prop-types";

import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  const { bookId, image, tags, bookName, author, rating } = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="border p-6 rounded-lg hover:shadow transition-all cursor-pointer">
        <div className="bg-[#F3F3F3] rounded-lg py-8">
          <img src={image} alt="" className="h-40 mx-auto" />
        </div>
        {tags?.map((tag, idx) => (
          <button key={idx} className="btn btn-xs mr-4 my-4 text-[#23BE0A]">
            {tag}
          </button>
        ))}
        <h2 className="text-2xl font-bold mb-1">{bookName}</h2>
        <p>By: {author}</p>
        <p className="outline-dashed outline-1 text-[#13131326] w-full my-5"></p>
        <div className="flex justify-between pt-5">
          <p>Fiction</p>
          <div className="flex items-center gap-2">
            <p>{rating}</p>
            <IoIosStarOutline className="text-lg" />
          </div>
        </div>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};
export default BookCard;
