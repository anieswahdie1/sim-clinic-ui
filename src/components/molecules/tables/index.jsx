import { Pagination, Table } from "antd";

const DefaultTable = ({
  dataSources,
  columns,
  page,
  totalUser,
  onChangePagination,
}) => {
  return (
    <>
      <div className="overflow-y-auto max-w-[95vw] h-[280px]">
        <Table
          dataSource={dataSources}
          columns={columns}
          size="small"
          pagination={false}
        />
      </div>
      <div className="flex justify-end">
        <Pagination
          current={page}
          pageSize={5}
          total={totalUser}
          onChange={onChangePagination}
        />
      </div>
    </>
  );
};

export default DefaultTable;
