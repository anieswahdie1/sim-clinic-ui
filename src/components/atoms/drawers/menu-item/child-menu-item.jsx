import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import useMenuConfig from "../../../../stores/useMenuConfig";
import { useLocation, useNavigate } from "react-router-dom";
import useMenuDrawer from "../../../../stores/useMenuDrawer";

const ChildMenuItem = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { setGlobalActiveMenu } = useMenuConfig((state) => state);
  const { setDrawermenuClose } = useMenuDrawer((state) => state);

  const [isChildActive, setIsChildActive] = useState(false);

  useEffect(() => {
    if (location.pathname === data.path) {
      setIsChildActive(true);
      return;
    }
    setIsChildActive(false);
  }, [data.path, location.pathname]);

  const onClickChildMenu = useCallback(() => {
    setIsChildActive(!isChildActive);
    setGlobalActiveMenu(data);
    setDrawermenuClose();
    setTimeout(() => {
      navigate(data?.path);
    }, "1000");
  }, [data, isChildActive, navigate, setDrawermenuClose, setGlobalActiveMenu]);

  return (
    <>
      <div
        className="flex flex-row items-center cursor-pointer px-2 min-h-[40px]"
        onClick={onClickChildMenu}
      >
        <div className="flex flex-row gap-2 items-center justify-center">
          <div className="min-w-[10px] min-h-[10px]"></div>
          <div className="flex flex-row gap-2 items-center justify-between">
            <FontAwesomeIcon
              icon={data?.icon}
              color={isChildActive ? "#2e5b36" : "#777777"}
              width={10}
              height={10}
            />
            <span
              className={"font-semibold text-sm ".concat(
                isChildActive ? "text-primary-green" : "text-secondary-gray"
              )}
            >
              {data.name}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildMenuItem;
