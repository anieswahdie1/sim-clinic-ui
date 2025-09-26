import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMenuDrawer from "../../../stores/useMenuDrawer";
import useAuth from "../../../stores/useAuth";
import { LogoAraMedika } from "../../../assets";
import DrawerMenu from "../../molecules/drawers/menu-drawer";

const Header = () => {
  const setDrawermenuOpen = useMenuDrawer((state) => state.setDrawermenuOpen);
  const isAuthorize = useAuth((state) => state.isAuthorize);
  const username = useAuth((state) => state.username);

  return (
    <div className="flex flex-row justify-between items-center px-5 min-h-[56px] bg-white fixed top-0 left-0 right-0 z-10">
      <img src={LogoAraMedika} width={50} height={50} />
      {isAuthorize && (
        <div className="flex flex-row gap-2 items-center">
          <span className="text-sm font-semibold text-primary-green">
            {username}
          </span>
          <FontAwesomeIcon
            icon={faBars}
            width={50}
            height={50}
            className="cursor-pointer"
            color="#2e5b36"
            onClick={setDrawermenuOpen}
          />
        </div>
      )}
      <DrawerMenu />
    </div>
  );
};

export default Header;
