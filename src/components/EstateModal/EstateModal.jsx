import React, { useState, useMemo } from "react";
import { Form, Input, Select } from "antd";
import ModalItem from "../ModalItem/ModalItem";
import { useCreateEstate } from "../../hooks/estate/useCreateEstate";
import { useUpdateEstate } from "../../hooks/estate/useUpdateEstate";
import { useDeleteEstate } from "../../hooks/estate/useDeleteEstate";
import { DEFAULT_TYPE, ESTATE_TYPES } from "./const";

const { Option } = Select;

const EstateModal = ({ onClose, initialData, ...props }) => {
  const [form] = Form.useForm();
  const type = Form.useWatch("type", form);

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const usedInitialData = useMemo(
    () => ({ ...initialData, type: DEFAULT_TYPE }),
    [initialData]
  );

  const { mutate: createClient } = useCreateEstate({
    success: handleClose,
  });

  const { mutate: deleteClient } = useUpdateEstate({
    success: handleClose,
  });

  const { mutate: updateClient } = useDeleteEstate({
    success: handleClose,
  });

  return (
    <ModalItem
      {...props}
      initialData={usedInitialData}
      title="Недвижимость"
      onCreate={createClient}
      onUpdate={updateClient}
      onClose={handleClose}
      onDelete={deleteClient}
      form={form}
    >
      <Form.Item label="Address_City" name="Address_City">
        <Input />
      </Form.Item>
      <Form.Item label="Address_House" name="Address_House">
        <Input />
      </Form.Item>
      <Form.Item label="Address_Number" name="Address_Number">
        <Input />
      </Form.Item>
      <Form.Item label="Address_Street" name="Address_Street">
        <Input />
      </Form.Item>
      <Form.Item label="Coordinate_latitude" name="Coordinate_latitude">
        <Input />
      </Form.Item>
      <Form.Item label="Coordinate_longitude" name="Coordinate_longitude">
        <Input />
      </Form.Item>
      <Form.Item label="Тип недвижимости" name="type">
        <Select defaultValue={DEFAULT_TYPE}>
          {ESTATE_TYPES.map(({ value, label }) => (
            <Option value={value}>{label}</Option>
          ))}
        </Select>
      </Form.Item>

      {type === "houses" && (
        <>
          <Form.Item label="TotalArea" name="TotalArea">
            <Input />
          </Form.Item>
          <Form.Item label="TotalFloors" name="TotalFloors">
            <Input />
          </Form.Item>
        </>
      )}
      {type === "apartments" && (
        <>
          <Form.Item label="Floor" name="Floor">
            <Input />
          </Form.Item>
          <Form.Item label="Rooms" name="Rooms">
            <Input />
          </Form.Item>
          <Form.Item label="TotalArea" name="TotalArea">
            <Input />
          </Form.Item>
        </>
      )}
      {type === "lands" && (
        <>
          <Form.Item label="TotalArea" name="TotalArea">
            <Input />
          </Form.Item>
        </>
      )}
    </ModalItem>
  );
};

export default EstateModal;
