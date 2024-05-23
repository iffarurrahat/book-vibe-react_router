import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/ui/Container";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
