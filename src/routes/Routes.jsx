import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Chef from "../pages/shared/chef/Chef";
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
    ],
  },
]);
export default router;
