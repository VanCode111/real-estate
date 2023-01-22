import React, { useMemo, useState } from "react";
import TableElems from "../TableElems/TableElems";
import CreateClient from "../CreateClient/CreateClient";
import { useGetAllEstate } from "../../hooks/estate/useGetAllEstate";
import Apartments from "./components/Apartments/Apartments";
import { Tabs } from "antd";
import Houses from "./components/Houses/Houses";
import Lands from "./components/Lands/Lands";
import Filters from "components/Filters/Filters";
import { Form, Input } from "antd";
import FiltersModule from "./components/FiltersModule/FiltersModule";
import EstateModal from "components/EstateModal/EstateModal";
import CreateButton from "components/CreateButton/CreateButton";

const Estate = () => {
  const [filters, setFilters] = useState();

  const { data, isLoading } = useGetAllEstate(filters);

  return (
    <>
      <CreateButton
        modal={(open, onClose) => (
          <EstateModal isOpen={open} onClose={onClose} />
        )}
      />
      <FiltersModule applyFilters={setFilters} />
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Квартира`,
            key: "1",
            children: (
              <Apartments isLoading={isLoading} data={data?.data?.Apartments} />
            ),
          },
          {
            label: `Дом`,
            key: "2",
            children: (
              <Houses isLoading={isLoading} data={data?.data?.Houses} />
            ),
          },
          {
            label: `Земля`,
            key: "3",
            children: <Lands isLoading={isLoading} data={data?.data?.Lands} />,
          },
        ]}
      />
    </>
  );
};

export default Estate;
