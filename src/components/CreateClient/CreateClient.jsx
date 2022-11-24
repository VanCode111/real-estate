import React, { useEffect } from "react";
import { Button, Form, Input, Modal, Radio, Select, notification } from "antd";
import styles from "./CreateModal.module.scss";
import apiInstance from "../../api/index.js";
import { useMutation } from "react-query";
import ModalItem from "../ModalItem/ModalItem";

const CreateClient = ({ onClose, ...props }) => {
  const [form] = Form.useForm();

  const { mutate } = useMutation(apiInstance.createClient, {
    onSuccess: () => {
      notification.success({ message: "Клиент успешно добавлен" });
      onClose();
    },
    onError: (e) => notification.error({ message: e.message }),
  });

  const onFinish = async (values) => {
    const { phoneNumber, email } = values;

    if (!phoneNumber && !email) {
      notification.error({ message: "Введите номер телефона или почту" });
      return;
    }

    await mutate(values);
  };

  return (
    <ModalItem {...props} title="Клиент" onCreate={onFinish} onClose={onClose}>
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
