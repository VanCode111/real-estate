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

const Main = () => {
  const [isCreateClientOpen, setCreateClientOpen] = useState(null);
  const [isCreateRieltorOpen, setCreateRieltorOpen] = useState(null);

  return (
    <div className="main">
      <Button onClick={() => setCreateClientOpen(true)}>
        Добавить клиента
      </Button>
      <Button onClick={() => setCreateRieltorOpen(true)}>
        Добавить риелтора
      </Button>
      <CreateClient
        isOpen={isCreateClientOpen}
        client={isCreateClientOpen?.user}
        onClose={() => setCreateClientOpen(false)}
      />
      <CreateRieltor
        isOpen={isCreateRieltorOpen?.user}
        onClose={() => setCreateRieltorOpen(false)}
      />

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
        ]}
      />
    </div>
  );
};

export default Main;
