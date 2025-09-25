import { Button, Drawer } from "antd";
import useMenuDrawer from "../../../../stores/useMenuDrawer";
import TitleDrawerMenu from "../../../atoms/drawers/menu/title-drawer-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
import useAuth from "../../../../stores/useAuth";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../../atoms/alerts/success";
import authApi from "../../../../apis/authApi";
import FailedAlerts from "../../../atoms/alerts/failed";

const DrawerMenu = () => {
  const isOpenDrawer = useMenuDrawer((state) => state.isOpenDrawer);
  const setDrawermenuClose = useMenuDrawer((state) => state.setDrawermenuClose);
  const setAuthorizeFalse = useAuth((state) => state.setAuthorizeFalse);

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const selectMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

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

  return (
    <Drawer
      title={<TitleDrawerMenu onClose={setDrawermenuClose} title={"Menu"} />}
      width="100vw"
      closeIcon={null}
      open={isOpenDrawer}
    >
      <div className="flex flex-col gap-2 mb-5">
        <div className="flex flex-col gap-1">
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={selectMenu}
          >
            <span className="font-semibold text-sm text-primary-green">
              User Management
            </span>
            <FontAwesomeIcon
              icon={!isMenuOpen ? faChevronCircleDown : faChevronCircleUp}
              color="#2e5b36"
            />
          </div>
          <div className="px-2 bg-[#57cb81] rounded-sm">
            {isMenuOpen && (
              <span className="text-sm font-semibold text-white">User</span>
            )}
          </div>
        </div>
      </div>
      <hr className="opacity-5 mb-2" />
      <Button danger className="font-semibold" onClick={onClickLogout}>
        Logout
      </Button>
    </Drawer>
  );
};

export default DrawerMenu;
