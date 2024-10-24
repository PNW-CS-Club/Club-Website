import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

//routes
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Team from "./routes/team";
import Projects from "./routes/projects";
import Events from "./routes/events";
import Contact from "./routes/contact";
import Blog from "./routes/blog";
import Login from "./routes/login";


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