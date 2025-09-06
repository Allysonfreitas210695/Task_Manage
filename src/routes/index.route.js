import { createBrowserRouter } from "react-router"

import DetailsTask from "../pages/DetailsTask"
import HomePage from "../pages/HomePage"
import NotFound from "../pages/NotFound"
import RootLayout from "../pages/RootLayout"
import TasksPage from "../pages/TasksPage"

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "tasks", Component: TasksPage },
      { path: "detail-task/:id", Component: DetailsTask },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
])
