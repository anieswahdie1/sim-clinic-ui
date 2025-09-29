import { useCallback, useEffect, useMemo, useState } from "react";
import DefaultLayout from "../../../components/organism/layouts";
import userApi from "../../../apis/userApi";
import { Button, Input, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalConfirmation from "../../../components/atoms/modals";

const ListUser = () => {
  const [list, setList] = useState([]);
  const [openModalConfirmDelete, setOpenModalConfirmDelete] = useState(false);

  const actionOpenModalConfirmDelete = useCallback(() => {
    setOpenModalConfirmDelete(true);
  }, []);

  const closeModalConfirmDelete = useCallback(() => {
    setOpenModalConfirmDelete(false);
  }, []);

  const getListUser = useCallback(async () => {
    const { data, success } = await userApi.getList();
    if (success) {
      setList(data);
      return;
    }
  }, []);

  useEffect(() => {
    getListUser();
  }, [getListUser]);

  const dataSources = useMemo(() => {
    if (list.length === 0) return [];
    return list.map((el, idx) => ({
      key: idx,
      username: el?.username,
      email: el?.email,
      role: el?.role,
      aksi: (
        <div className="flex flex-row gap-1">
          <FontAwesomeIcon
            icon={faEdit}
            color="#2e5b36"
            className="cursor-pointer"
            onClick={() => {
              console.log(el);
            }}
          />

          <FontAwesomeIcon
            icon={faTrash}
            color="red"
            className="cursor-pointer"
            onClick={actionOpenModalConfirmDelete}
          />

          <FontAwesomeIcon
            icon={faEye}
            color="#2e5b36"
            className="cursor-pointer"
          />
        </div>
      ),
    }));
  }, [actionOpenModalConfirmDelete, list]);

  const columns = useMemo(() => {
    const cols = [
      {
        title: "Username",
        dataIndex: "username",
        key: "username",
        render: (username) => <span>{username}</span>,
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        render: (email) => <span>{email}</span>,
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
        render: (role) => <span>{role}</span>,
      },
      {
        title: "Aksi",
        dataIndex: "aksi",
        key: "aksi",
        fixed: "right",
        render: (aksi) => aksi,
      },
    ];
    return cols;
  }, []);

  return (
    <>
      <DefaultLayout>
        <div className="min-h-[75vh] min-w-[95vw] max-w-[100vw] rounded-2xl p-4 bg-white ">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center my-5">
              <Input
                placeholder="Search by username"
                className="max-w-[200px]"
              />
              <Button type="primary" size="middle">
                Tambah User
              </Button>
            </div>
            <div className="overflow-y-auto max-w-[95vw]">
              <Table
                dataSource={dataSources}
                columns={columns}
                size="small"
                pagination={false}
              />
            </div>
          </div>
        </div>
        <ModalConfirmation
          openModal={openModalConfirmDelete}
          actionOk={closeModalConfirmDelete}
          actionCancel={closeModalConfirmDelete}
          title={"Konfirmasi Hapus Data"}
          text={"Apakah Anda yakin akan menghapus data berikut?"}
        />
      </DefaultLayout>
    </>
  );
};

export default ListUser;
