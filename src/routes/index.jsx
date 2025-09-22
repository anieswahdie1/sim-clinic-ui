import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login.jsx";
import App from "../App.jsx";

const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main",
    element: <App />,
  },
]);

export default pageRouter;
