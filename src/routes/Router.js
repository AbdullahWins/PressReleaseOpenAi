import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Help from "../pages/Help/Help";
import Support from "../pages/Support/Support";
import Privacy from "../pages/Privacy/Privacy";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);
