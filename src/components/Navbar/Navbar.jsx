import { Link, NavLink } from "react-router-dom";
import Container from "../ui/Container";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#23BE0A] border-2 border-[#23BE0A] "
              : isPending
              ? "pending"
              : "hover:bg-transparent"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#23BE0A] border-2 border-[#23BE0A] "
              : isPending
              ? "pending"
              : "hover:bg-transparent"
          }
          to="/listed-books"
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#23BE0A] border-2 border-[#23BE0A] "
              : isPending
              ? "pending"
              : "hover:bg-transparent"
          }
          to="/pages-to-read"
        >
          Pages to Read
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#23BE0A] border-2 border-[#23BE0A] "
              : isPending
              ? "pending"
              : "hover:bg-transparent"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#23BE0A] border-2 border-[#23BE0A] "
              : isPending
              ? "pending"
              : "hover:bg-transparent"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <Container>
      <div className="navbar bg-base-100 px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium"
            >
              {navLink}
            </ul>
          </div>
          <Link
            className="text-2xl md:text-[32px] font-bold ml-auto lg:ml-0 cursor-pointer hidden md:block"
            to="/"
          >
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 md:gap-4 items-center ">
            <button className="py-2 md:py-3 px-3 md:px-6 bg-[#23BE0A] rounded-lg text-white font-medium">
              Sign In
            </button>
            <button className="py-2 md:py-3 px-3 md:px-6 bg-[#59C6D2] rounded-lg text-white md:font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
