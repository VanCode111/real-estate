import React, { useMemo } from "react";
import { useMutation, useQuery } from "react-query";
import CreateRieltor from "../CreateRieltor/CreateRieltor";
import TableElems from "../TableElems/TableElems";
import apiInstance from "../../api";
import FioSearch from "../FioSearch/FioSearch";
import CreateButton from "components/CreateButton/CreateButton";
import { useGetAllRealtors } from "hooks/rieltors/useGetAllRealtors";
import { useState } from "react";

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
  const [filters, setFilters] = useState();
  const { data, isLoading } = useGetAllRealtors(filters);
  const dataSource = useMemo(
    () => data?.data?.map((item) => ({ key: item.id, ...item })) || [],
    [data]
  );

  console.log(data, "aaaaa");
  return (
    <>
      <CreateButton
        modal={(open, onClose) => (
          <CreateRieltor isOpen={open} onClose={onClose} />
        )}
      />
      <FioSearch onSearch={setFilters} onResetSearch={() => setFilters(null)} />
      <TableElems
        columns={columns}
        data={data?.data}
        isLoading={isLoading}
        updateModal={(data, onClose) => (
          <CreateRieltor
            isEdit
            initialData={data}
            isOpen={data}
            onClose={onClose}
          />
        )}
      />
    </>
  );
};

export default Rieltors;
