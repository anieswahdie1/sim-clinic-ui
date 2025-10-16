import { useCallback, useEffect, useMemo, useState } from "react";
import DefaultLayout from "../../../components/organism/layouts";
import userApi from "../../../apis/userApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalConfirmation from "../../../components/atoms/modals";
import ModalViewDetail from "../../../components/atoms/modal-view";
import { changeRoles } from "../../../utils/change-role";
import DefaultCanvas from "../../../components/atoms/canvas";
import SearchForm from "../../../components/molecules/search-and-add";
import ItemDetailData from "../../../components/molecules/item-detail-data";
import DefaultTable from "../../../components/molecules/tables";

const ListUser = () => {
  const [list, setList] = useState([]);

  const [openModalConfirmDelete, setOpenModalConfirmDelete] = useState(false);
  const [openModalViewDetail, setOpenModalViewDetail] = useState(false);
  const [totalUser, setTotalUser] = useState(0);
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState();

  const [textViewDetail, setTextViewDetail] = useState();

  const actionOpenModalConfirmDelete = useCallback(() => {
    setOpenModalConfirmDelete(true);
  }, []);

  const closeModalConfirmDelete = useCallback(() => {
    setOpenModalConfirmDelete(false);
  }, []);

  const actionOpenModalViewDetail = useCallback((data) => {
    setTextViewDetail(
      <>
        <div className="flex flex-col gap-2">
          <ItemDetailData label={"Nama Lengkap"} data={data?.fullname} />
          <ItemDetailData label={"Jabatan"} data={data?.jabatan} />
          <ItemDetailData label={"Role"} data={changeRoles(data?.role)} />
          <ItemDetailData label={"Username"} data={data?.username} />
          <ItemDetailData label={"Email"} data={data?.email} />
        </div>
      </>
    );
    setOpenModalViewDetail(true);
  }, []);

  const closeModalViewDetail = useCallback(() => {
    setOpenModalViewDetail(false);
  }, []);

  const getListUser = useCallback(async () => {
    const { data, success } = await userApi.getList(page, 5, searchKeyword);
    if (success) {
      setList(data?.data);
      setTotalUser(data?.total);
      return;
    }
  }, [page, searchKeyword]);

  useEffect(() => {
    getListUser();
  }, [getListUser]);

  const dataSources = useMemo(() => {
    if (list.length === 0) return [];
    return list.map((el, idx) => ({
      key: idx,
      username: el?.username,
      email: el?.email,
      role: changeRoles(el?.role),
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
            onClick={() => {
              actionOpenModalViewDetail(el);
            }}
          />
        </div>
      ),
    }));
  }, [actionOpenModalConfirmDelete, actionOpenModalViewDetail, list]);

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

  const onSearch = useCallback((value) => {
    setSearchKeyword(value);
  }, []);

  const actionTambahUser = useCallback(() => {
    console.log("tambah user");
  }, []);

  const onChangePagination = useCallback((evt) => {
    setPage(evt);
  }, []);

  return (
    <>
      <DefaultLayout>
        <DefaultCanvas>
          <div className="flex flex-col gap-2">
            <SearchForm
              onSearch={onSearch}
              btnName={"Tambah User"}
              btnAction={actionTambahUser}
              placeholder={"Cari Username"}
              addBtnActive
            />
            <DefaultTable
              dataSources={dataSources}
              columns={columns}
              onChangePagination={onChangePagination}
              page={page}
              totalUser={totalUser}
            />
          </div>
        </DefaultCanvas>
      </DefaultLayout>
      <ModalConfirmation
        openModal={openModalConfirmDelete}
        actionOk={closeModalConfirmDelete}
        actionCancel={closeModalConfirmDelete}
        title={"Konfirmasi Hapus Data"}
        text={"Apakah Anda yakin akan menghapus data berikut?"}
      />
      <ModalViewDetail
        openModal={openModalViewDetail}
        text={textViewDetail}
        title={"Detail Data User"}
        actionClose={closeModalViewDetail}
      />
    </>
  );
};

export default ListUser;
