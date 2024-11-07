import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "/src/styles_pages/index.css";

//routes
import App from "./App";
import ErrorPage from "/src/pages/error-page";
import Team from "/src/pages/team";
import Projects from "/src/pages/projects";
import Events from "/src/pages/events";
import Contact from "/src/pages/contact";
import Blog from "/src/pages/blog";
import Login from "/src/pages/login";
import TestingPSQL from "/src/pages/testingPSQL";


//create router this handles the routing of the website, if you want to add a new page
// you need to add a new route here, follow the format of the existing routes(team for example)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      },
      {
        path: "testingPSQL",
        element: <TestingPSQL />,
      },
    ],
  },
]);

//render the router to the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);