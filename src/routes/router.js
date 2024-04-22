import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
