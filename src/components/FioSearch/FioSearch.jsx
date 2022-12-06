import { Button, Form, Input } from "antd";
import React from "react";
import styles from "./FioSearch.module.scss";

const FioSearch = ({ onSearch, onResetSearch }) => {
  const [form] = Form.useForm();

  const resetSearch = () => {
    form.resetFields();
    onResetSearch();
  };

  return (
    <Form form={form} onFinish={onSearch} className={styles.search}>
      <Form.Item name="name" label="Фамилия" className={styles.item}>
        <Input />
      </Form.Item>
      <Form.Item name="surname" label="Имя" className={styles.item}>
        <Input />
      </Form.Item>
      <Form.Item name="secondName" label="Отчество" className={styles.item}>
        <Input />
      </Form.Item>
      <Form.Item name="name">
        <Button htmlType="submit">Найти</Button>
      </Form.Item>
      <Button onClick={resetSearch}>Отчистить поиск</Button>
    </Form>
  );
};

export default FioSearch;
