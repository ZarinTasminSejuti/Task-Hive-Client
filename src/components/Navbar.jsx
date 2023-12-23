 import { useContext} from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {

  //navigate after logout
  const navigate = useNavigate();

  const { logOut, user,userDetails } = useContext(AuthContext);
  console.log(userDetails);

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

  const Links = (
    <>
      <li className="text-lg rounded-xl text-black  hover:bg-amber-400">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg rounded-xl text-black hover:bg-amber-400">
        <Link to="/dashboard">Dashboard</Link>
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
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>

       <div className="lg:w-1/2 flex flex-row justify-end py-2 gap-2">
       {user ? ( 
         <>
           <img
             src={userDetails[0]?.photoURL}
             alt={userDetails[0]?.displayName}
             className="w-10 rounded"
           />

            <span className="text-black">{userDetails[0]?.displayName}</span> 
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