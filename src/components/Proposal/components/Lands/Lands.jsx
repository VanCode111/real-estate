import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import CreateClient from "../../../CreateClient/CreateClient";
import ProposalModal from "../ProposalModal/ProposalModal";
import { useGetProposal } from "hooks/proposal/useGetProposal";
import { prepareData } from "components/Proposal/utils";
import { generateColumns } from "components/TableElems/utils";
import { ESTATE_FIELDS, PROPOSAL_FIELDS } from "components/Proposal/consts";
import { useGetLandsProposal } from "hooks/proposal/useGetLandsProposal";
import { useGetClients } from "hooks/clients";
import { useGetAllRealtors } from "hooks/rieltors/useGetAllRealtors";

const Lands = () => {
  const { data, isLoading } = useGetLandsProposal({ type: "lands" });
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
      data={data?.data?.estate}
      isLoading={isLoading}
      updateModal={(data, onClose) => (
        <ProposalModal
          isEdit
          isEditMode={true}
          initialData={data}
          isOpen={data}
          onClose={onClose}
        />
      )}
    />
  );
};

export default Lands;
