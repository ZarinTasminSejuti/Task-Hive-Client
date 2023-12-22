import { Link, useLoaderData } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
const ToDoList = () => {
  const TaskCollection = useLoaderData();
  console.log(TaskCollection);
  return (
        <div className="bg-slate-100">
          <div className="w-full text-right">
            <div className="pr-10">
              <Link to="/dashboard/addTask">
                <button className="btn btn-ghost bg-amber-400">
                  + Add Task
                </button>
              </Link>
            </div>

            
              <h1 className="text-4xl font-semibold text-center pb-10">
                All New Task
              </h1>
              {/* All Tasks field */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:px-0 mb-20 rounded-md ">
                {TaskCollection.map((Task, index) => (
                  <div key={index + 1}>
                    <div className="h-[320px] flex flex-col justify-between p-5">
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
                                <Link to={`/dashboard/updateTask/${Task._id}`}>
                    <p className=" flex  items-center gap-2 font-bold text-md text-black hover:underline hover:decoration-solid hover:cursor-pointer mt-10 mb-10 lg:mb-0">
                    <FaEdit></FaEdit>Edit Task
                    </p>
                  </Link>
                      </div>
                        </div>
                       
                  </div>
                ))}
              </div>
            
          </div>
        </div>
     
    
  );
};

export default ToDoList;
