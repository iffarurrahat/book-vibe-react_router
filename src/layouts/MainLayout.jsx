import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      {navigation.state === "loading" ? <Spinner /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default MainLayout;
