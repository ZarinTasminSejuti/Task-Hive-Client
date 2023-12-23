import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "react-query";

const Profile = () => {
  const { userDetails } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const { data: users = [] } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allUsers");
    
      return res.data;
      
    },

  });
  
  //check users have or not
  if (!users || users.length === 0) {
    return <p>No users found</p>;
  }

  
  const usersFilter = users?.filter(
    (user) => userDetails?.email === user?.email
  );
console.log(usersFilter);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mb-14">
        <div className="w-3/4 mx-auto py-5 px-10 leading-10 bg-white shadow-md rounded-xl flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">
              Name:{" "}
              <span>
                {usersFilter[0]?.displayName}
              </span>
            </h2>
            <p>Email: {usersFilter[0]?.email}</p>
          </div>
          <img
            src={usersFilter[0]?.image}
            alt="photo"
            className="w-[120px] h-[120px] rounded-full ring-4 ring-amber-400 ring-offset-white ring-offset-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
