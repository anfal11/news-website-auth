import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import LoginBTN from "../Pages/LoginBTN/LoginBTN";
import Register from "../Pages/Register/Register";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/login",
        element: <LoginBTN/>,
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  ]);

  export default routes;