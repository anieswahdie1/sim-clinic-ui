import { Button } from "antd";
import DefaultCanvas from "../../components/atoms/canvas";
import DefaultLayout from "../../components/organism/layouts";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const PageNotFound = () => {
  const navigate = useNavigate();

  const onClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <>
      <DefaultLayout>
        <DefaultCanvas
          className={"flex flex-col justify-center items-center gap-4"}
        >
          <span className="font-bold">Halaman Tidak Ditemukan!</span>
          <Button type="primary" onClick={onClickBack}>
            Kembali
          </Button>
        </DefaultCanvas>
      </DefaultLayout>
    </>
  );
};

export default PageNotFound;
