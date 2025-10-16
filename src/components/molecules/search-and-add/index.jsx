import { Button, Input } from "antd";

const SearchForm = ({
  addBtnActive,
  btnName,
  btnAction,
  className,
  onSearch,
  placeholder,
}) => {
  return (
    <div
      className={"flex flex-row justify-between items-center ".concat(
        !className ? " my-5" : className
      )}
    >
      <Input.Search
        placeholder={!placeholder ? "Cari" : placeholder}
        className="max-w-[200px]"
        onSearch={onSearch}
      />
      {addBtnActive && (
        <>
          <Button type="primary" size="middle" onClick={btnAction}>
            {btnName}
          </Button>
        </>
      )}
    </div>
  );
};

export default SearchForm;
