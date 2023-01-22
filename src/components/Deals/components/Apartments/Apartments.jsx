import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import EstateModal from "../../../EstateModal/EstateModal";
import RequirementsModal from "components/RequirementsModal/RequirementsModal";
import { generateColumns } from "components/TableElems/utils";
import { FIELDS, APARTMENTS_FIELDS } from "../../consts";
import DealModal from "../DealModal/DealModal";

const columns = [
  {
    title: "Предложение",
    dataIndex: "proposal_id",
    key: "proposal_id",
  },
  {
    title: "Потребность",
    dataIndex: "requirement_id",
    key: "requirement_id",
  },
];

const Apartments = ({ data, isLoading }) => {
  return (
    <TableElems
      columns={columns}
      data={data}
      isLoading={isLoading}
      updateModal={(data, onClose) => (
        <DealModal
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

export default Apartments;
