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

const Proposal = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Квартира`,
            key: "1",
            children: <Apartments />,
          },
          {
            label: `Дом`,
            key: "2",
            children: <Houses />,
          },
          {
            label: `Земля`,
            key: "3",
            children: <Lands />,
          },
        ]}
      />
    </>
  );
};

export default Proposal;
