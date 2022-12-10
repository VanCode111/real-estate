import React, { useMemo, useState } from "react";
import TableElems from "../TableElems/TableElems";
import CreateClient from "../CreateClient/CreateClient";
import { useGetAllRequirements } from "../../hooks/requiremets/useGetAllRequirements";
import Apartments from "./components/Apartments/Apartments";
import { Tabs } from "antd";
import Houses from "./components/Houses/Houses";
import Lands from "./components/Lands/Lands";
import Filters from "components/Filters/Filters";
import { Form, Input } from "antd";
import FiltersModule from "./components/FiltersModule/FiltersModule";

const Requiremets = () => {
  const [filters, setFilters] = useState();

  const { data, isLoading } = useGetAllRequirements(filters);

  const dataSource = useMemo(() => {
    return (
      data?.data?.reduce((acc, curr) => {
        console.log(acc);
        if (!acc[curr.estate_type]) {
          acc[curr.estate_type] = [];
        }

        acc[curr.estate_type].push(curr);
        return acc;
      }, {}) || {}
    );
  }, [data]);

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Апартаменты`,
            key: "1",
            children: (
              <Apartments isLoading={isLoading} data={dataSource?.apartments} />
            ),
          },
          {
            label: `Дом`,
            key: "2",
            children: (
              <Houses isLoading={isLoading} data={dataSource?.houses} />
            ),
          },
          {
            label: `Земля`,
            key: "3",
            children: <Lands isLoading={isLoading} data={dataSource?.lands} />,
          },
        ]}
      />
    </>
  );
};

export default Requiremets;
