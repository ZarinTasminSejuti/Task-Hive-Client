import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("dashboard");
  return (
    <div className="w-full bg-slate-100">
          {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>

      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
