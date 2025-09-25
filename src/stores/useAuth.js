import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuth = create(
  persist(
    (set) => ({
      isAuthorize: false,
      accessToken: null,
      setAuthorizeTrue: (state) => {
        set({ isAuthorize: true, accessToken: state.access_token });
      },
      setAuthorizeFalse: () => {
        set({ isAuthorize: false, accessToken: null });
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuth;
