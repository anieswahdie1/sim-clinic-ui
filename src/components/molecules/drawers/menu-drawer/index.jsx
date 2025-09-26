import { Button, Drawer } from "antd";
import useMenuDrawer from "../../../../stores/useMenuDrawer";
import TitleDrawerMenu from "../../../atoms/drawers/menu/title-drawer-menu";
import { useCallback, useMemo } from "react";
import ListMenu from "./listMenu";
import ParentMenuItem from "../../../atoms/drawers/menu-item/parent-menu-item";
import useAuth from "../../../../stores/useAuth";
import authApi from "../../../../apis/authApi";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../../atoms/alerts/success";
import FailedAlerts from "../../../atoms/alerts/failed";

const DrawerMenu = () => {
  const role = useAuth((state) => state.role);
  const isOpenDrawer = useMenuDrawer((state) => state.isOpenDrawer);
  const setDrawermenuClose = useMenuDrawer((state) => state.setDrawermenuClose);
  const setAuthorizeFalse = useAuth((state) => state.setAuthorizeFalse);

  const navigate = useNavigate();

  const onClickLogout = useCallback(async () => {
    const { success, data } = await authApi.logout();
    if (success) {
      setDrawermenuClose();
      setAuthorizeFalse();
      SuccessAlert(data);
      navigate("/");
      return;
    }
    setDrawermenuClose();
    FailedAlerts(data);
  }, [navigate, setAuthorizeFalse, setDrawermenuClose]);

  const listMenus = useMemo(() => {
    let list = [];

    for (let i = 0; i < ListMenu.length; i++) {
      for (let j = 0; j < ListMenu[i].canAccessBy.length; j++) {
        if (ListMenu[i].canAccessBy[j] === role) {
          list.push(ListMenu[i]);
        }
      }
    }
    return list;
  }, [role]);

  return (
    <Drawer
      title={<TitleDrawerMenu onClose={setDrawermenuClose} title={"Menu"} />}
      width="100vw"
      closeIcon={null}
      open={isOpenDrawer}
    >
      <div className="flex flex-col gap-2 mb-5">
        {listMenus.map((el, idx) => {
          return <ParentMenuItem key={idx} data={el} />;
        })}
      </div>
      <hr className="opacity-5 mb-2" />
      <Button danger className="font-semibold" onClick={onClickLogout}>
        Logout
      </Button>
    </Drawer>
  );
};

export default DrawerMenu;
