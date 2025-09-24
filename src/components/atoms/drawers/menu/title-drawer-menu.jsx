import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleDrawerMenu = ({ title, onClose }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        {title && (
          <span className="text-primary-green font-semibold text-sm">Menu</span>
        )}
        <FontAwesomeIcon
          icon={faClose}
          width={50}
          height={50}
          className="cursor-pointer"
          color="#2e5b36"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default TitleDrawerMenu;
