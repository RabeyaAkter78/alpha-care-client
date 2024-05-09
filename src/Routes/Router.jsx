import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Doctors from "../Pages/Doctors/Doctors";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/doctors",
            element:<Doctors></Doctors>,
        },
        {
            path:"/about",
            element:<About></About>,
        },
        {
            path:"/service",
            element:<Service></Service>,
        },
      ]
    },
  ]);