import { useCallback, useMemo, useState } from "react";
import ChildMenuItem from "./child-menu-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMenuConfig from "../../../../stores/useMenuConfig";

const ParentMenuItem = ({ data }) => {
  const pathParentmenu = useMenuConfig((state) => state.pathParentmenu);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const selectMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const isMenuActive = useMemo(() => {
    if (pathParentmenu === data.path) {
      return true;
    }
    return false;
  }, [data.path, pathParentmenu]);
  return (
    <>
      <div className="flex flex-col gap-1">
        <div
          className={"flex flex-row justify-between items-center cursor-pointer min-h-[40px]".concat(
            isMenuActive ? " bg-primary-green rounded-md px-2" : ""
          )}
          onClick={selectMenu}
        >
          <div className="flex flex-row gap-2 items-center justify-center">
            <FontAwesomeIcon
              icon={data.icon}
              color={isMenuActive ? "#ffffff" : "#777777"}
              width={10}
              height={10}
            />
            <span
              className={"font-semibold text-sm ".concat(
                isMenuActive ? "text-white" : "text-secondary-gray"
              )}
            >
              {data.name}
            </span>
          </div>
        </div>
        <div className="rounded-sm">
          {isMenuOpen &&
            data.childs.map((el, idx) => {
              return <ChildMenuItem data={el} key={idx} />;
            })}
        </div>
      </div>
    </>
  );
};

export default ParentMenuItem;
