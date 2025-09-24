import { create } from "zustand";

const useMenuDrawer = create((set) => ({
  isOpenDrawer: false,
  setDrawermenuOpen: () => set({ isOpenDrawer: true }),
  setDrawermenuClose: () => set({ isOpenDrawer: false }),
}));

export default useMenuDrawer;
