import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import CreateClient from "../../../CreateClient/CreateClient";
import RequirementsModal from "components/RequirementsModal/RequirementsModal";
import { FIELDS, APARTMENTS_FIELDS } from "../../consts";
import { generateColumns } from "components/TableElems/utils";
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

const Lands = ({ data, isLoading }) => {
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

export default Lands;
