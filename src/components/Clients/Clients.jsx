import React, { useMemo, useState } from "react";
import { useQuery, useMutation } from "react-query";
import CreateRieltor from "../CreateRieltor/CreateRieltor";
import TableElems from "../TableElems/TableElems";
import apiInstance from "../../api";
import CreateClient from "../CreateClient/CreateClient";
import FioSearch from "../FioSearch/FioSearch";
import { useGetClients } from "../../hooks/clients/useGetClients";
import CreateButton from "components/CreateButton/CreateButton";

const columns = [
  {
    title: "Имя",
    dataIndex: "surname",
    key: "surname",
  },
  {
    title: "Фамилия",
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
      <CreateButton
        modal={(open, onClose) => (
          <CreateClient isOpen={open} onClose={onClose} />
        )}
      />
      <FioSearch onSearch={setFilters} onResetSearch={() => setFilters(null)} />
      <TableElems
        columns={columns}
        data={dataSource}
        isLoading={isLoading}
        updateModal={(data, onClose) => (
          <CreateClient
            isEdit={true}
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
