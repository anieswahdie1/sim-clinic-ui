import { create } from "zustand";

const useAuth = create((set) => ({
  isAuthorize: false,
  setAuthorizeTrue: () => set({ isAuthorize: true }),
  setAuthorizeFalse: () => set({ isAuthorize: false }),
}));

export default useAuth;
