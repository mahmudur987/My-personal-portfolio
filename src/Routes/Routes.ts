import { createBrowserRouter } from "react-router";
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
    Component: Main,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/resume",
        Component: Resume,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/projects/:id",
        Component: ProjectDetail,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/contact",
        Component: Contacts,
      },
      {
        path: "*",
        Component: Home,
      },
    ],
  },
]);

export default router;
