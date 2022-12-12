import React, { useState } from "react";
import styles from "./TableElems.module.scss";
import { Table } from "antd";
import { Button, Form, Input, Modal, Radio, Select, notification } from "antd";

const TableElems = ({
  onSelect,
  onDelete,
  onUpdate,
  updateModal,
  data = [],
  isLoading,
  columns,
  scroll,
  scrollX,
}) => {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <>
      <Table
        scroll={{ x: scrollX, y: 400 }}
        rowClassName={styles.row}
        onRow={(record) => {
          return { onClick: () => setSelectedRow(record) };
        }}
        columns={columns}
        dataSource={data}
        loading={isLoading}
      />
      {updateModal(selectedRow, () => setSelectedRow(null))}
    </>
  );
};

export default TableElems;
