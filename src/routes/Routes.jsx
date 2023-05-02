import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Chef from "../pages/shared/chef/Chef";
import Recipes from "../pages/shared/recipes/Recipes";
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
      {
        path: "/chef/:id",
        element: <Recipes></Recipes>,
      },

      {
        path: "/viewrecipe/:id",
        element: <Recipes></Recipes>,
        loader: () => fetch("http://localhost:5000/chef"),

        // eslint-disable-next-line no-dupe-keys
        loader: ({ params }) =>
          fetch(`http://localhost:5000/viewrecipe/${params.id}`),
      },
    ],
  },
]);
export default router;
