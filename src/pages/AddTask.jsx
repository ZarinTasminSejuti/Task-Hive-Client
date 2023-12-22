import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../providers/AuthProvider";


const AddTask = () => {
  const navigate = useNavigate();
  const { userDetails} = useContext(AuthContext);

  
  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    const form = event.target;
    const Task_title = form.Task_title.value;
      const Task_description = form.Task_description.value;
      const Task_Priority = form.Task_Priority.value;
    const Task_Deadline
    = form.Task_Deadline.value;
    const userEmail = userDetails.email;
    const TaskPostDateTime = new Date().toLocaleString("en-US", options);
    const submitTime = Math.floor(Date.now() / 1000); //Time in seconds
    const userName = userDetails.displayName;
    const userImage = userDetails.photoURL

    const newTask = {
      Task_title,
      Task_description,
        Task_Deadline,
        Task_Priority,
      userEmail,
      submitTime,
      TaskPostDateTime,
      userName,
      userImage,
    };

    //send data to the server
    fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Task Added!", "New Task added Successful!", "success");
          form.reset();
          navigate("/dashboard");
         
        }
      })
      .catch(() => {
        swal("Failed!", "Wrong credentials! Please Add again.", "error");
      });
  };

  return (
    <div className="bg-slate-100">
      <div className="py-10 text-black ">
        <p className="font-bold text-3xl">Create New
          Task</p>
      </div>

      <div className="w-full pt-10 pb-20 ">
       
        <form onSubmit={handleSubmit} className="p-4 lg:p-0 " >
         
          
            <div className="form-control md:w-1/2 lg:mr-5">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Task Title:
                </span>
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Enter Task title..."
                  name="Task_title"
                  className="input input-bordered bg-white w-full rounded-md "
                  required
                />
              </label>
            </div>

          
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Task Description:
                </span>
              </label>
              <label>
                <textarea
                  type="text"
                  placeholder="Enter long description..."
                  name="Task_description"
                  className="input rounded-md bg-white input-bordered resize-y h-28 w-full"
                ></textarea>
              </label>
            </div>
          
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Task Deadline:
                </span>
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Enter Task Deadline..."
                  name="Task_Deadline"
                  className="input input-bordered bg-white w-full rounded-md"
                  required
                />
              </label>
                  </div>


                  <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Task Priority:
                </span>
                      </label>
                      <label>
                <select name="Task_Priority" className="select rounded-md bg-white input-bordered w-full" required>
                  <option defaultValue="Task_Priority" disabled >
                    Select a Task Priority...
                  </option>
                  <option value="High">High</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Low">Low</option>
                  
                </select>
              </label>
             
                  </div>


                  
          {/* add Task button  */}
          <div className="my-10">
            <input
              type="submit"
              value="Add New Task"
              className="btn text-black bg-amber-400 border-none hover:text-white hover:bg-amber-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;