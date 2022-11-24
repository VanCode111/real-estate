import React, { useMemo } from "react";
import { useQuery } from "react-query";
import CreateRieltor from "../CreateRieltor/CreateRieltor";
import TableElems from "../TableElems/TableElems";
import apiInstance from "../../api";

const columns = [
  {
    title: "Фамилия",
    dataIndex: "surname",
    key: "surname",
  },
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Отчество",
    dataIndex: "secondName",
    key: "secondName",
  },
  {
    title: "Доля от комиссии",
    dataIndex: "part",
    key: "part",
  },
];

const data = [
  {
    key: "1",
    name: "Иван",
    surname: "Елисеев",
    secondName: "Павлович",
    part: 200,
  },
  {
    key: "2",
    name: "Павел",
    surname: "Никитин",
    secondName: "Павлович",
    part: 2000,
  },
];

const Rieltors = () => {
  const { data, isLoading } = useQuery(
    "getAllRealtors",
    apiInstance.getAllRealtors
  );

  const dataSource = useMemo(
    () => data?.data?.map((item) => ({ key: item.id, ...item })) || [],
    [data]
  );

  return (
    <>
      <TableElems
        columns={columns}
        data={dataSource}
        isLoading={isLoading}
        updateModal={(data, onClose) => (
          <CreateRieltor initialData={data} isOpen={data} onClose={onClose} />
        )}
      />
    </>
  );
};

export default Rieltors;
