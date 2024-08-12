import PropTypes from "prop-types";
import { IoPeopleOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

const TabCard = ({ book }) => {
  return (
    <div className="border md:flex gap-6 p-6 rounded-2xl">
      <div className="bg-[#1313130D] p-5 rounded-lg mb-6 md:mb-0">
        <img
          src={book.image}
          alt=""
          className="h-60 sm:h-96 md:h-[550px] lg:h-full md:w-44 mx-auto"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{book.bookName}</h2>
        <p className="font-medium my-4">by: {book.author}</p>
        <div className="md:flex gap-5 items-center">
          <strong>Tag </strong>
          {book?.tags?.map((tag, idx) => (
            <button key={idx} className="btn btn-xs mr-1 text-[#23BE0A]">
              #{tag}
            </button>
          ))}
          <p className="flex items-center gap-1 text-[#13131399] mt-3 md:mt-0">
            <CiCalendarDate className="text-xl" /> Year of Publishing:
            {book.yearOfPublishing}
          </p>
        </div>
        <div className="md:flex gap-5 items-center my-4">
          <p className="flex items-center gap-1 text-[#13131399] mb-3 md:mb-0">
            <IoPeopleOutline className="text-xl" /> Publisher {book.publisher}
          </p>
          <p className="flex items-center gap-1 text-[#13131399]">
            <FaBook className="text-lg" /> Pages: {book.totalPages}
          </p>
        </div>
        <hr />
        <div className="md:flex gap-5 mt-4">
          <button className="btn rounded-full bg-[#328EFF26] text-[#328EFF]">
            Category: {book.category}
          </button>
          <button className="btn rounded-full bg-[#FFAC3326] text-[#FFAC33] my-3 md:my-0 mx-3 md:mx-0">
            Rating: {book.rating}
          </button>
          <Link to={`/book/${book.bookId}`}>
            <button className="btn rounded-full bg-[#23BE0A] text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

TabCard.propTypes = {
  book: PropTypes.object.isRequired,
};
export default TabCard;
