import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import EstateModal from "../../../EstateModal/EstateModal";
import { useGetApartmentsProposal } from "hooks/proposal/useGetApartmentsProposal";
import { generateColumns } from "components/TableElems/utils";
import { ESTATE_FIELDS, PROPOSAL_FIELDS } from "../../consts";
import Item from "antd/es/list/Item";

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

const Apartments = () => {
  const { data, isLoading } = useGetApartmentsProposal();
  const dataSource = useMemo(
    () =>
      data?.data
        ? data?.data.map((item) => ({ ...item.estate, ...item.proposal }))
        : [],
    [data]
  );
  console.log(data?.data);
  return (
    <TableElems
      columns={columns}
      data={dataSource}
      isLoading={isLoading}
      updateModal={(data, onClose) => (
        <EstateModal
          isEditMode={true}
          initialData={data}
          isOpen={data}
          onClose={onClose}
        />
      )}
    />
  );
};

export default Apartments;
