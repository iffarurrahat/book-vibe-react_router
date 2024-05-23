import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <p className="bg-red-400 py-5 mb-10">Navbar</p>
      <Outlet />
      <p className="bg-green-400 py-5 mt-10">footer</p>
    </div>
  );
};

export default MainLayout;
