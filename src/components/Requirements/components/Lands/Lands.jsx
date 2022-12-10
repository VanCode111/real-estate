import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import CreateClient from "../../../CreateClient/CreateClient";
import RequirementsModal from "components/RequirementsModal/RequirementsModal";
import { FIELDS, APARTMENTS_FIELDS } from "../../consts";
import { generateColumns } from "components/TableElems/utils";

const columns = generateColumns({
  ...FIELDS,
  ...APARTMENTS_FIELDS,
});

const Lands = ({ data, isLoading }) => {
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

export default Lands;
