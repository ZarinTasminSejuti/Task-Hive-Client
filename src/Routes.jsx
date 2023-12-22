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
        loader: () => fetch("http://localhost:5000/viewTask"),
      },
      {
        path: "addTask",
        element: <PrivateRoute><AddTask></AddTask></PrivateRoute>,
    
      },
    ]
  },
]);

export default router;