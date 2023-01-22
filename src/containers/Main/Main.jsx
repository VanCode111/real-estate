import React, { useState } from "react";
import { Button, Tabs } from "antd";
import CreateClient from "../../components/CreateClient/CreateClient";
import CreateRieltor from "../../components/CreateRieltor/CreateRieltor";
import TableElems from "../../components/TableElems/TableElems";
import Rieltors from "../../components/Rieltors/Rieltors";
import Clients from "../../components/Clients/Clients";
import Estate from "../../components/Estate/Estate";
import Requiremets from "components/Requirements/Requirements";
import Proposal from "components/Proposal/Proposal";
import Deals from "components/Deals/Deals";

const Main = () => {
  return (
    <div className="main">
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Риелторы`,
            key: "1",
            children: <Rieltors />,
          },
          {
            label: `Клиенты`,
            key: "2",
            children: <Clients />,
          },
          {
            label: `Недвижимость`,
            key: "3",
            children: <Estate />,
          },
          {
            label: `Потребности`,
            key: "4",
            children: <Requiremets />,
          },
          {
            label: `Предложения`,
            key: "5",
            children: <Proposal />,
          },
          {
            label: `Сделки`,
            key: "6",
            children: <Deals />,
          },
        ]}
      />
    </div>
  );
};

export default Main;
