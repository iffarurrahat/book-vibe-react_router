import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <p>Home</p>,
      },
    ],
  },
]);

export default myCreatedRoute;
