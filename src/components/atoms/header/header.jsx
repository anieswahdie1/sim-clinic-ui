import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMenuDrawer from "../../../stores/useMenuDrawer";
import useAuth from "../../../stores/useAuth";
import { LogoAraMedika } from "../../../assets";
import DrawerMenu from "../../molecules/drawers/menu-drawer";

const Header = () => {
  const setDrawermenuOpen = useMenuDrawer((state) => state.setDrawermenuOpen);
  const isAuthorize = useAuth((state) => state.isAuthorize);

  return (
    <div className="flex flex-row justify-between items-center px-5 min-h-[56px] bg-white fixed top-0 left-0 right-0 z-10">
      <img src={LogoAraMedika} width={50} height={50} />
      {isAuthorize && (
        <FontAwesomeIcon
          icon={faBars}
          width={50}
          height={50}
          className="cursor-pointer"
          color="#2e5b36"
          onClick={setDrawermenuOpen}
        />
      )}
      <DrawerMenu />
    </div>
  );
};

export default Header;
