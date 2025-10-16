import { create } from "zustand";

const useGlobalAlert = create((set) => ({
  isGlobalAlertOpen: false,
  textGlobalAlert: null,
  resetGlobalAlert: () => {
    set({
      isGlobalAlertOpen: false,
      textGlobalAlert: null,
    });
  },
  openGlobalAlert: (state) => {
    set({
      isGlobalAlertOpen: true,
      textGlobalAlert: state.text,
    });
  },
}));

export { useGlobalAlert };
