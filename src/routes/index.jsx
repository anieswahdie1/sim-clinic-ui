import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login.jsx";

const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export default pageRouter;
