const ItemDetailData = ({ label, data, classNameLabel }) => {
  return (
    <div className="flex flex-row gap-1">
      <span
        className={"text-gray-700 opacity-70 font-semibold ".concat(
          !classNameLabel ? "min-w-[100px]" : classNameLabel
        )}
      >
        {label}
      </span>
      <span className="font-semibold">: {!data ? "-" : data}</span>
    </div>
  );
};

export default ItemDetailData;
