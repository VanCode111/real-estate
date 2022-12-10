import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import CreateClient from "../../../CreateClient/CreateClient";

const columns = [
  {
    title: "Address_City",
    dataIndex: "Address_City",
    key: "Address_City",
  },
  {
    title: "Address_House",
    dataIndex: "Address_House",
    key: "Address_House",
  },
  {
    title: "Address_Number",
    dataIndex: "Address_Number",
    key: "Address_Number",
  },
  {
    title: "Address_Street",
    dataIndex: "Address_Street",
    key: "Address_Street",
  },
  {
    title: "Coordinate_latitude",
    dataIndex: "Coordinate_latitude",
    key: "Coordinate_latitude",
  },
  {
    title: "Coordinate_longitude",
    dataIndex: "Coordinate_longitude",
    key: "Coordinate_longitude",
  },
  {
    title: "TotalArea",
    dataIndex: "TotalArea",
    key: "TotalArea",
  },
  {
    title: "TotalFloors",
    dataIndex: "TotalFloors",
    key: "TotalFloors",
  },
];

const Houses = ({ data, isLoading }) => {
  return (
    <TableElems
      columns={columns}
      data={data}
      isLoading={isLoading}
      updateModal={(data, onClose) => (
        <CreateClient
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
