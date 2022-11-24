import React, { useMemo } from "react";
import { useQuery } from "react-query";
import CreateRieltor from "../CreateRieltor/CreateRieltor";
import TableElems from "../TableElems/TableElems";
import apiInstance from "../../api";
import CreateClient from "../CreateClient/CreateClient";

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
    title: "Номер телефона",
    dataIndex: "telephoneNumber",
    key: "telephoneNumber",
  },
  {
    title: "Электронная почта",
    dataIndex: "email",
    key: "email",
  },
];

const Clients = () => {
  const { data, isLoading } = useQuery(
    "getAllClients",
    apiInstance.getAllClients
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
          <CreateClient initialData={data} isOpen={data} onClose={onClose} />
        )}
      />
    </>
  );
};

export default Clients;
