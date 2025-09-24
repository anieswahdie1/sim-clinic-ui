import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuth = create(
  persist(
    (set) => ({
      isAuthorize: false,
      setAuthorizeTrue: () => set({ isAuthorize: true }),
      setAuthorizeFalse: () => {
        set({ isAuthorize: false });
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuth;
