import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Login from "../pages/login/Login/Login";
import Register from "../pages/login/Register/Register";
import Chef from "../pages/shared/chef/Chef";
import Recipes from "../pages/shared/recipes/Recipes";
import Error from "../pages/shared/error/Error";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/shared/blog/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      //   {
      //     path: "/",
      //     element: <Home></Home>,
      //   },
      {
        path: "/",
        element: <Chef></Chef>,
        loader: () => fetch("http://localhost:5000/chef"),
      },
      // {
      //   path: "/chef/:id",
      //   element: <Recipes></Recipes>,
      // },

      {
        path: "/viewrecipe/:id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        // eslint-disable-next-line no-dupe-keys
        loader: ({ params }) =>
          fetch(`http://localhost:5000/viewrecipe/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login></Login>,
  // },

  {
    path: "/*",
    element: <Error></Error>,
  },
]);
export default router;
