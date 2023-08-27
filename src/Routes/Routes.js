import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Contacts from "../Pages/Contact/Contacts";
import Home from "../Pages/Home/Home";
import ProjectDetail from "../Pages/Projects/ProjectDetail";
import Projects from "../Pages/Projects/Projects";
import Resumi from "../Pages/Resumi/Resumi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/resumi",
        element: <Resumi></Resumi>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contacts></Contacts>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/projectdetail/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://portfolio-server-navy.vercel.app/project/${params.id}`
          );
        },
        element: <ProjectDetail></ProjectDetail>,
      },
    ],
  },
]);

export default router;
