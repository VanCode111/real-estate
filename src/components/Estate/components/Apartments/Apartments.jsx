import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import EstateModal from "../../../EstateModal/EstateModal";

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
    title: "Floor",
    dataIndex: "Floor",
    key: "Floor",
  },
  {
    title: "Rooms",
    dataIndex: "Rooms",
    key: "Rooms",
  },
  {
    title: "TotalArea",
    dataIndex: "TotalArea",
    key: "TotalArea",
  },
];

const Apartments = ({ data, isLoading }) => {
  console.log(data);
  return (
    <TableElems
      columns={columns}
      data={data}
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
