import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

//routes
import Root from "./pages/root";
import ErrorPage from "./error-page";
import Team from "./pages/team";
import Projects from "./pages/projects";
import Events from "./pages/events";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Login from "./pages/login";


//create router this handles the routing of the website, if you want to add a new page
// you need to add a new route here, follow the format of the existing routes(team for example)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      }
    ],
  },
]);

//render the router to the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);