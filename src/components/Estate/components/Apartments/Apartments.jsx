import React, { useMemo, useState } from "react";
import TableElems from "../../../TableElems/TableElems";
import EstateModal from "../../../EstateModal/EstateModal";

const columns = [
  {
    title: "Город",
    dataIndex: "Address_City",
    key: "Address_City",
  },
  {
    title: "Дом",
    dataIndex: "Address_House",
    key: "Address_House",
  },
  {
    title: "Номер квартиры",
    dataIndex: "Address_Number",
    key: "Address_Number",
  },
  {
    title: "Улица",
    dataIndex: "Address_Street",
    key: "Address_Street",
  },
  {
    title: "Широта",
    dataIndex: "Coordinate_latitude",
    key: "Coordinate_latitude",
  },
  {
    title: "Долгота",
    dataIndex: "Coordinate_longitude",
    key: "Coordinate_longitude",
  },
  {
    title: "Этаж",
    dataIndex: "Floor",
    key: "Floor",
  },
  {
    title: "Комнаты",
    dataIndex: "Rooms",
    key: "Rooms",
  },
  {
    title: "Площадь",
    dataIndex: "TotalArea",
    key: "TotalArea",
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
