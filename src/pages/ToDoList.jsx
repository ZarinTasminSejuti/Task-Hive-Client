import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import swal from "sweetalert";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Ongoing from "../components/Ongoing";
import Completed from "../components/Completed";

const ToDoList = () => {
  const TaskCollection = useLoaderData();
  console.log(TaskCollection);
  const { userDetails } = useContext(AuthContext);
  const navigate = useNavigate();

  const tasks = TaskCollection.filter(
    (task) => task.userEmail === userDetails.email
  );
  // Function to handle item deletion
  const handleRemove = (taskId) => {
    fetch(`https://task-hive-server.vercel.app/viewTask/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          swal("Removed!", "Your task has been deleted.", "success");
          navigate("/dashboard/toDoList");
        }
      });
  };

  return (
    <div className="bg-slate-100">
      <div className="w-full text-right">
        <div className="pr-10">
          <Link to="/dashboard/addTask">
            <button className="btn btn-ghost bg-amber-400">+ Create New Task</button>
          </Link>
        </div>

        <h1 className="text-4xl font-semibold text-center pb-10">
          All To-Do Task
        </h1>
        {/* All Tasks field section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:px-0 mb-20 rounded-md bg-slate-200 max-h-fit">
          {tasks.length > 0 ? (
            tasks.map((Task) => (
              <div
                className="h-[320px] flex flex-col justify-between p-5"
                key={Task._id}
              >
                <div className="text-justify h-full shadow-md bg-amber-200 p-5">
                  <h2 className="card-title my-2 text-black">
                    {Task.Task_title}
                  </h2>

                  <p className="text-gray-600 pt-2 text-justify">
                    {Task.Task_description}
                  </p>
                  <p className="text-gray-600 pt-2">
                    Deadline: {Task.Task_Deadline}
                  </p>
                  <p className="text-gray-600 pt-2">
                    Priority: {Task.Task_Priority}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link to={`/dashboard/updateTask/${Task._id}`}>
                      <p className="flex  items-center gap-2 font-bold text-md text-black hover:underline hover:decoration-solid hover:cursor-pointer mt-10 mb-10 lg:mb-0">
                        <FaEdit></FaEdit>Edit Task
                      </p>
                    </Link>

                    <button
                      className="flex items-center gap-2 font-bold text-md text-red-600 hover:underline hover:decoration-solid hover:cursor-pointer mt-10 mb-10 lg:mb-0"
                      onClick={() => handleRemove(Task._id)}
                      type="submit"
                    >
                      <MdDelete /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center my-36">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300">
                You have no tasks
              </p>
            </div>
          )}
        </div>

        {/* Ongoing task section  */}
        <div className="flex justify-evenly items-center">
          <Ongoing></Ongoing>
          <Completed></Completed>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
