import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/ui/Container";

const MainLayout = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Outlet />
      </Container>
      <p className="bg-green-400 py-5 mt-10">footer</p>
    </div>
  );
};

export default MainLayout;
