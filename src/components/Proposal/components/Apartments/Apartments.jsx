import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import EstateModal from "../../../EstateModal/EstateModal";
import { generateColumns } from "components/TableElems/utils";
import { ESTATE_FIELDS, PROPOSAL_FIELDS } from "../../consts";
import Item from "antd/es/list/Item";
import ProposalModal from "../ProposalModal/ProposalModal";
import { useGetProposal } from "hooks/proposal/useGetProposal";
import { prepareData } from "components/Proposal/utils";
import { useGetApartmentsProposal } from "hooks/proposal/useGetApartmentsProposal";
import { useGetClients } from "hooks/clients";
import { useGetAllRealtors } from "hooks/rieltors/useGetAllRealtors";

const Apartments = () => {
  const { data, isLoading } = useGetApartmentsProposal();
  const dataSource = useMemo(() => prepareData(data), [data?.data]);
  const { data: clients } = useGetClients();
  const { data: rieltors } = useGetAllRealtors();

  const columns = [
    {
      title: "Недвижимость",
      dataIndex: "estate",
      key: "estate",
      children: generateColumns(ESTATE_FIELDS),
    },
    {
      title: "Предложение",
      dataIndex: "proposal",
      key: "proposal",
      children: [
        ...generateColumns(PROPOSAL_FIELDS),
        {
          title: "Клиент",
          dataIndex: "client",
          key: "client",
          render: (_, row) => {
            const newClient = clients?.data?.find(
              (item) => item.id === row.client
            );
            return newClient?.name + " " + newClient?.surname;
          },
        },
        {
          title: "Риэлтор",
          dataIndex: "realtor",
          key: "realtor",
          render: (_, row) => {
            const newClient = rieltors?.data?.find(
              (item) => item.id === row.realtor
            );
            return newClient?.name + " " + newClient?.surname;
          },
        },
      ],
    },
  ];

  return (
    <TableElems
      columns={columns}
      data={dataSource}
      isLoading={isLoading}
      updateModal={(data, onClose) => (
        <ProposalModal
          isEdit
          initialData={data}
          type="Apartment"
          isOpen={data}
          onClose={onClose}
        />
      )}
    />
  );
};

export default Apartments;
