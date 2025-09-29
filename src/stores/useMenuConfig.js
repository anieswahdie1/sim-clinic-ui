import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMenuConfig = create(
  persist(
    (set) => ({
      pathParentmenu: null,
      pathChildMenu: null,
      isMenuActive: false,
      setGlobalActiveMenu: (state) => {
        set({
          pathParentmenu: state.parentPath,
          pathChildMenu: state.path,
          isMenuActive: true,
        });
      },
      resetGlobalActiveMenu: () => {
        set({
          pathParentmenu: null,
          pathChildMenu: null,
          isMenuActive: false,
        });
      },
    }),
    {
      name: "config-menu",
    }
  )
);

export default useMenuConfig;
