
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Profile from "../pages/Profile";
import { FaClipboardList } from "react-icons/fa";


const Dashboard = () => {


  return (
    <div>
      <div className="flex">
        <div className="w-64 bg-amber-400 min-h-screen">
          <div className="px-4 pt-8">
            <img
              src="https://i.ibb.co/tM3K5NN/Task-Hive-modified.png"
              className="w-full text-2xl rounded-md"
            />
          </div>
          <div className="divider px-3"></div>
                  <ul className="menu font-medium text-lg space-y-3">
                 
                          <li> <NavLink to="/dashboard/toDoList"><FaClipboardList />To-Do List   </NavLink></li>
                       
            {/* shared navlinks */}

            <div className="divider"></div>

            <li>
            <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
          </ul>
        </div>

        
        <div className="flex-1 bg-slate-100 pt-20 p-14">
<Profile></Profile>
        <Outlet></Outlet>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
