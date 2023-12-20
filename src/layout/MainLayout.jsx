import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

// import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        
        <div className="w-full bg-slate-100" >

     {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
          
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;