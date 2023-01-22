import React from "react";
import { Form, Input } from "antd";
import ModalItem from "../ModalItem/ModalItem";
import {
  useCreateClient,
  useDeleteClient,
  useUpdateClient,
} from "../../hooks/clients";
import { notification } from "antd";

const CreateClient = ({ onClose, initialData, ...props }) => {
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

  const onCreate = (values) => {
    const { email, telephoneNumber } = values;

    if (!email && !telephoneNumber) {
      notification.error({ message: "Укажите email или телефон" });
      return;
    }
    createClient({
      ...values,
      phoneNumber: values.telephoneNumber,
      telephoneNumber: undefined,
    });
  };

  return (
    <ModalItem
      {...props}
      initialData={initialData}
      title="Клиент"
      onCreate={onCreate}
      onUpdate={(values) =>
        updateClient({
          ...values,
          id: String(initialData.id),
          phoneNumber: values.telephoneNumber,
          telephoneNumber: undefined,
        })
      }
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
      <Form.Item label="Номер телефона" name="telephoneNumber">
        <Input />
      </Form.Item>
      <Form.Item label="Электронная почта" name="email">
        <Input />
      </Form.Item>
    </ModalItem>
  );
};

export default CreateClient;
