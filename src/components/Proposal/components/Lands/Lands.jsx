import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import CreateClient from "../../../CreateClient/CreateClient";
import ProposalModal from "../ProposalModal/ProposalModal";
import { useGetProposal } from "hooks/proposal/useGetProposal";
import { prepareData } from "components/Proposal/utils";
import { generateColumns } from "components/TableElems/utils";
import { ESTATE_FIELDS, PROPOSAL_FIELDS } from "components/Proposal/consts";
import { useGetLandsProposal } from "hooks/proposal/useGetLandsProposal";

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

const Lands = () => {
  const { data, isLoading } = useGetLandsProposal({ type: "lands" });
  const dataSource = useMemo(() => prepareData(data), [data?.data]);

  return (
    <TableElems
      columns={columns}
      data={data?.data?.estate}
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

export default Lands;
