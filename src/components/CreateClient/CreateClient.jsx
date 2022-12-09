import React from "react";
import { Form, Input } from "antd";
import ModalItem from "../ModalItem/ModalItem";
import {
  useCreateClient,
  useDeleteClient,
  useUpdateClient,
} from "../../hooks/clients";

const CreateClient = ({ onClose, ...props }) => {
  const [form] = Form.useForm();

  const { mutate: createClient } = useCreateClient({
    success: onClose,
  });

  const { mutate: deleteClient } = useDeleteClient({
    success: onClose,
  });

  const { mutate: updateClient } = useUpdateClient({
    success: onClose,
  });

  return (
    <ModalItem
      {...props}
      title="Клиент"
      onCreate={createClient}
      onUpdate={updateClient}
      onClose={onClose}
      onDelete={deleteClient}
      form={form}
    >
      <Form.Item label="Фамилия" name="surname">
        <Input />
      </Form.Item>
      <Form.Item label="Имя" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Отчество" name="secondName">
        <Input />
      </Form.Item>
      <Form.Item label="Номер телефона" name="phoneNumber">
        <Input />
      </Form.Item>
      <Form.Item label="Электронная почта" name="email">
        <Input />
      </Form.Item>
    </ModalItem>
  );
};

export default CreateClient;
