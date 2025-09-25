import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuth = create(
  persist(
    (set) => ({
      isAuthorize: false,
      accessToken: null,
      role: null,
      userId: null,
      username: null,
      email: null,
      setAuthorizeTrue: (state) => {
        set({
          isAuthorize: true,
          accessToken: state.access_token,
          role: state.role,
          userId: state.user_id,
          username: state.username,
          email: state.email,
        });
      },
      setAuthorizeFalse: () => {
        set({
          isAuthorize: false,
          accessToken: null,
          role: null,
          userId: null,
          username: null,
          email: null,
        });
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuth;
