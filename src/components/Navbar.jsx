 import { useContext} from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link, NavLink, useNavigate} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";


const Navbar = () => {

  //navigate after logout
  const navigate = useNavigate();

  const { logOut, user,userDetails } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => {
        swal("Logged Out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li className="text-lg rounded-xl text-black  hover:bg-amber-400">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg rounded-xl text-black hover:bg-amber-400">
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li className="text-lg rounded-xl text-black hover:bg-amber-400">
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
      <li className="text-lg rounded-xl text-black hover:bg-amber-400">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  



  return (
    <div className="w-full bg-white ">
      <div className="navbar flex-col lg:flex-row justify-between items-center max-w-[1280px] mx-auto">
        <div className="lg:w-1/2 flex flex-col lg:flex-row my-5 lg:my-0">

          <img src="https://i.ibb.co/tM3K5NN/Task-Hive-modified.png" className="w-1/2"/>
        </div>

        <div className="lg:navbar-center">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

       <div className="lg:w-1/2 flex flex-row justify-end text-white py-2 gap-2">
       {user ? ( 
         <>
           <img
             src={userDetails.photoURL}
             alt={userDetails.displayName}
             className="w-10 rounded"
           />

            <span className="text-white">{userDetails.displayName}</span> 
            <button
             className="btn btn-ghost text-white bg-red-600 hover:bg-black"
             onClick={handleLogOut}
           >
             Log Out
           </button> 
         </>
        ) : ( 
         <>
              <Link to="/login">
                <button className="btn btn-ghost text-black hover:bg-amber-400">
                  Login
                </button>
              </Link>
              <Link to="/registration">
                <button className="btn btn-ghost text-black bg-amber-400 hover:text-white hover:bg-black">
                  Register <FaArrowRightToBracket />
                </button>
              </Link>
             </>
           )}   
         
        </div> 
      </div>
    </div>
  );
};

export default Navbar;