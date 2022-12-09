import React, { useMemo, useState } from "react";
import TableElems from "../TableElems/TableElems";
import CreateClient from "../CreateClient/CreateClient";
import { useGetAllEstate } from "../../hooks/estate/useGetAllEstate";
import Apartments from "./components/Apartments/Apartments";
import { Tabs } from "antd";
import Houses from "./components/Houses/Houses";
import Lands from "./components/Lands/Lands";

const Estate = () => {
  const [filters, setFilters] = useState();

  const { data, isLoading } = useGetAllEstate(filters);

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Апартаменты`,
            key: "1",
            children: (
              <Apartments isLoading={isLoading} data={data?.data?.Apartments} />
            ),
          },
          {
            label: `Дома`,
            key: "2",
            children: (
              <Houses isLoading={isLoading} data={data?.data?.Houses} />
            ),
          },
          {
            label: `Острова`,
            key: "3",
            children: <Lands isLoading={isLoading} data={data?.data?.Lands} />,
          },
        ]}
      />
    </>
  );
};

export default Estate;
