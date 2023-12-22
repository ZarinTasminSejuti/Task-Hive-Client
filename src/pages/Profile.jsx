
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "react-query";

const Profile = () => {
  const { userDetails } = useContext(AuthContext);
console.log(userDetails);
  const axiosPublic = useAxiosPublic();

  const { data: users = [] } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allUsers");
      return res.data;
    },
  });

  const usersFilter = users?.filter(
  
    (user) => userDetails.email === user?.email
    
  );
 

  return (
    
    <div>
       <div className="max-w-screen-xl mx-auto mb-14">
     
        

     <div className="w-3/4 mx-auto py-5 px-10 leading-10 bg-white shadow-md rounded-xl flex justify-between items-center">
       <div>
         <h2>
           Name:{" "}
           <span className="text-xl font-semibold">
             {usersFilter?.displayName}
           </span>
         </h2>
            <p>Email: {usersFilter?.email}</p>
           
       </div>
       <img
         src={usersFilter?.image}
         alt="photo"
         className="w-[120px] h-[120px] rounded-full ring-4 ring-amber-400 ring-offset-white ring-offset-4"
       />
     </div>

 </div>
   </div>
  );
};

export default Profile;