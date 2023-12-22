import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Registration from "./pages/Registration";


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
    
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
     
     
    
    ],
  },
]);

export default router;