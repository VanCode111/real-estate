import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import EstateModal from "../../../EstateModal/EstateModal";

const columns = [
  {
    title: "addres_city",
    dataIndex: "addres_city",
    key: "addres_city",
  },
  {
    title: "addres_house",
    dataIndex: "addres_house",
    key: "addres_house",
  },
  {
    title: "addres_number",
    dataIndex: "addres_number",
    key: "addres_number",
  },
  {
    title: "addres_street",
    dataIndex: "addres_street",
    key: "addres_street",
  },
  {
    title: "client_id",
    dataIndex: "client_id",
    key: "client_id",
  },
  {
    title: "estate_type",
    dataIndex: "estate_type",
    key: "estate_type",
  },
  {
    title: "max_floor",
    dataIndex: "max_floor",
    key: "max_floor",
  },
  {
    title: "max_price",
    dataIndex: "max_price",
    key: "max_price",
  },
  {
    title: "max_square",
    dataIndex: "max_square",
    key: "max_square",
  },
  {
    title: "min_floor",
    dataIndex: "min_floor",
    key: "min_floor",
  },
  {
    title: "min_rooms",
    dataIndex: "min_rooms",
    key: "min_rooms",
  },
  {
    title: "min_rooms",
    dataIndex: "min_rooms",
    key: "min_rooms",
  },
  {
    title: "realtor_id",
    dataIndex: "realtor_id",
    key: "realtor_id",
  },
  {
    title: "use",
    dataIndex: "use",
    key: "use",
  },
];

const Apartments = ({ data, isLoading }) => {
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
