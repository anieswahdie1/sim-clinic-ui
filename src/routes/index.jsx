import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login.jsx";
import WelcomePages from "../pages/welcome-pages/index.jsx";

const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <WelcomePages />,
  },
]);

export default pageRouter;
