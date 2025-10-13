import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login.jsx";
import WelcomePages from "../pages/welcome-pages/index.jsx";
import ROUTES from "../pkg/routes.js";
import ListUser from "../pages/user-management/users/list-user.jsx";
import ListLayananTerapi from "../pages/master-data/layanan-terapi/index.jsx";
import Akupuntur from "../pages/pelayanan/akupuntur/index.jsx";

const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <WelcomePages />,
  },
  {
    path: ROUTES.USER_MANAGEMENT.USER.INDEX,
    element: <ListUser />,
  },
  {
    path: ROUTES.MASTER_DATA.LAYANAN_TERAPI.INDEX,
    element: <ListLayananTerapi />,
  },
  {
    path: ROUTES.PELAYANAN.AKUPUNTUR.INDEX,
    element: <Akupuntur />,
  },
]);

export default pageRouter;
