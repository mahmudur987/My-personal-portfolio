import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Contacts from "../Pages/Contact/Contacts";
import Home from "../Pages/Home/Home";
import ProjectDetail from "../Pages/Projects/ProjectDetail";
import Projects from "../Pages/Projects/Projects";
import Resume from "../Pages/Resume/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/projectDetail/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://portfolio-server-navy.vercel.app/project/${params.id}`
          );
        },
        element: <ProjectDetail />,
      },
    ],
  },
]);

export default router;
