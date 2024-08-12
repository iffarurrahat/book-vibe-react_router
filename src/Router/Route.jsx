import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import BookDetails from "../components/BookDetails/BookDetails";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default myCreatedRoute;
