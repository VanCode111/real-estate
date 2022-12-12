import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import CreateClient from "../../../CreateClient/CreateClient";
import ProposalModal from "../ProposalModal/ProposalModal";
import { useGetProposal } from "hooks/proposal/useGetProposal";
import { prepareData } from "components/Proposal/utils";
import { generateColumns } from "components/TableElems/utils";
import { ESTATE_FIELDS, PROPOSAL_FIELDS } from "components/Proposal/consts";
import { useGetHousesProposal } from "hooks/proposal/useGetHousesProposal";

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
    children: generateColumns(PROPOSAL_FIELDS),
  },
];

const Houses = () => {
  const { data, isLoading } = useGetHousesProposal({ type: "houses" });
  const dataSource = useMemo(() => prepareData(data), [data?.data]);

  return (
    <TableElems
      columns={columns}
      data={dataSource}
      isLoading={isLoading}
      updateModal={(data, onClose) => (
        <ProposalModal
          isEditMode={true}
          initialData={data}
          isOpen={data}
          onClose={onClose}
        />
      )}
    />
  );
};

export default Houses;
