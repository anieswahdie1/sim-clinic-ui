import { useMemo } from "react";
import useAuth from "../../stores/useAuth";
import LoginPage from "../login";
import ListUser from "../user-management/users/list-user";

const Main = () => {
  const isAuthorize = useAuth((state) => state.isAuthorize);

  const isUserLoggedIn = useMemo(() => {
    const authStorage = localStorage.getItem("auth-storage");

    if (isAuthorize && authStorage) {
      return true;
    }
    return false;
  }, [isAuthorize]);

  return !isUserLoggedIn ? <LoginPage /> : <ListUser />;
};

export default Main;
