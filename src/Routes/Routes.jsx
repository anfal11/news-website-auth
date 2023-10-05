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
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CategoryPosts from "../Pages/Shared/LeftSideNav/CategoryPosts";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
        path: "/",
        element: <Home />,
        loader: () => fetch("/news.json"),
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
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        // loader: (object) => fetch(`/news.json/${object.params.id}`),
      },
      {
        path: "/category/:id",
        element: <PrivateRoute><CategoryPosts></CategoryPosts></PrivateRoute>,
        // loader: (object) => fetch(`/news.json/${object.params.id}`),
      }
    ]
  },
  ]);

  export default routes;