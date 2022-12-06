import React, { useMemo, useState } from "react";
import { useQuery, useMutation } from "react-query";
import CreateRieltor from "../CreateRieltor/CreateRieltor";
import TableElems from "../TableElems/TableElems";
import apiInstance from "../../api";
import CreateClient from "../CreateClient/CreateClient";
import FioSearch from "../FioSearch/FioSearch";
import { useGetClients } from "../../hooks/clients/useGetClients";

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
  const [filters, setFilters] = useState();
  const { data, isLoading } = useGetClients(filters);

  const dataSource = useMemo(
    () => data?.data?.map((item) => ({ key: item.id, ...item })) || [],
    [data]
  );

  return (
    <>
      <FioSearch onSearch={setFilters} onResetSearch={() => setFilters(null)} />
      <TableElems
        columns={columns}
        data={dataSource}
        isLoading={isLoading}
        updateModal={(data, onClose) => (
          <CreateClient
            isEditMode={true}
            initialData={data}
            isOpen={data}
            onClose={onClose}
          />
        )}
      />
    </>
  );
};

export default Clients;
