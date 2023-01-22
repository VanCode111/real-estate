import React, { useEffect } from "react";
import { Button, Form, Input, Modal, Radio, Select, notification } from "antd";
import styles from "./CreateRieltor.module.scss";
import apiInstance from "../../api/index.js";
import { useMutation, useQueryClient } from "react-query";
import ModalItem from "../ModalItem/ModalItem";

const CreateRieltor = ({ onClose, initialData, ...props }) => {
  const [form] = Form.useForm();

  console.log(initialData, "neww");
  const queryClient = useQueryClient();
  const { mutate: create } = useMutation(apiInstance.createRieltor, {
    onSuccess: () => {
      notification.success({ message: "Риелтор успешно добавлен" });
      queryClient.invalidateQueries("getAllRealtors");
      onClose();
    },
    onError: (e) => notification.error({ message: e.message }),
  });

  const { mutate: update } = useMutation(apiInstance.updateRieltor, {
    onSuccess: () => {
      notification.success({ message: "Риелтор успешно обновлен" });
      queryClient.invalidateQueries("getAllRealtors");
      onClose();
    },
    onError: (e) => notification.error({ message: e.message }),
  });

  const { mutate: deleteRealtor } = useMutation(apiInstance.deleteRealtor, {
    onSuccess: () => {
      notification.success({ message: "Риелтор успешно удален" });
      queryClient.invalidateQueries("getAllRealtors");
      onClose();
    },
    onError: (e) => notification.error({ message: e.message }),
  });

  return (
    <ModalItem
      {...props}
      title="Риэлтор"
      onClose={onClose}
      initialData={initialData}
      onCreate={create}
      onUpdate={(values) => update({ ...values, id: initialData.id })}
      onDelete={deleteRealtor}
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
      <Form.Item label="Доля от комиссии" name="part">
        <Input />
      </Form.Item>
    </ModalItem>
  );
};

export default CreateRieltor;
