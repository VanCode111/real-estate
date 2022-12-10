import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import EstateModal from "../../../EstateModal/EstateModal";
import RequirementsModal from "components/RequirementsModal/RequirementsModal";
import { generateColumns } from "components/TableElems/utils";
import { FIELDS, APARTMENTS_FIELDS } from "../../consts";

const columns = generateColumns({
  ...FIELDS,
  ...APARTMENTS_FIELDS,
});

const Apartments = ({ data, isLoading }) => {
  return (
    <TableElems
      columns={columns}
      data={data}
      isLoading={isLoading}
      updateModal={(data, onClose) => (
        <RequirementsModal
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
