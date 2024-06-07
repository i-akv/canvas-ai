import ReactDOM from "react-dom/client";
import "./index.css";

import Loader from "./components/Loader";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import Stake from "./pages/stake";
import OnePendulum from "./pages/pendulum";
import BouncingBalls from "./pages/bouncing-balls/BouncingBalls";
import DrivingAI from "./pages/driving-ai";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/stake",
    element: <Stake />,
  },
  {
    path: "/pendulum",
    element: <OnePendulum />,
  },
  {
    path: "/bouncing-balls",
    element: <BouncingBalls />,
  },
  {
    path: "/driving-ai",
    element: <DrivingAI />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} fallbackElement={<Loader />} />
);
