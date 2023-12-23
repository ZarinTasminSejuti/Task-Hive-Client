import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./layout/Dashboard";
import Registration from "./pages/Registration";
import AddTask from "./pages/AddTask";
import PrivateRoute from "./PrivateRoute";
import ToDoList from "./pages/ToDoList";
import UpdateTask from "./pages/UpdateTask";
import Contact from "./components/Contact";
import About from "./pages/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "toDoList",
        element: <PrivateRoute><ToDoList></ToDoList></PrivateRoute>,
        loader: () => fetch("https://task-hive-server.vercel.app/viewTask"),
      },
      {
        path: "addTask",
        element: <PrivateRoute><AddTask></AddTask></PrivateRoute>,
    
      },
{ 
      path: "updateTask/:_id",
      element: (
        <PrivateRoute>
          <UpdateTask></UpdateTask>
        </PrivateRoute>
      ),
      loader: ({ params }) =>
        fetch(`https://task-hive-server.vercel.app/updateTask/${params._id}`),
    },
    ]
  },
]);

export default router;