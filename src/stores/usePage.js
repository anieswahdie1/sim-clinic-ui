import { create } from "zustand";

const usePage = create((set) => ({
  isLoading: false,
  setIsLoadingTrue: () => set({ isLoading: true }),
  setIsLoadingFalse: () => set({ isLoading: false }),
}));

export { usePage };
