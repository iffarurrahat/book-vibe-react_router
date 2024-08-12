import { Link } from "react-router-dom";
import "./Banner.css";
import Container from "../ui/Container";

const Banner = () => {
  return (
    <Container>
      <div className="banner_image  h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl flex items-center">
        <div className="flex flex-col-reverse lg:flex-row items-center px-8 md:px-16 lg:px-28">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 md:w-3/4">
              Books to freshen up your bookshelf
            </h1>
            <Link to="/listed-books">
              <button className="btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white">
                View The List
              </button>
            </Link>
          </div>
          <img
            src="https://i.ibb.co/MP764vK/banner-image.png"
            alt=""
            className="h-60 sm:h-72 md:h-80 lg:h-full"
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
