import React from "react";
import { Form, Button } from "antd";
import styles from "./Filters.module.scss";

const Filters = ({ applyFilters, resetFilters, children }) => {
  const [form] = Form.useForm();

  const onResetFilters = () => {
    form.resetFields();
    console.log(resetFilters);
    resetFilters();
  };

  return (
    <Form form={form} onFinish={applyFilters} className={styles.filters}>
      {children}
      <div className={styles.controls}>
        <Form.Item name="name">
          <Button htmlType="submit">Найти</Button>
        </Form.Item>
        <Button onClick={onResetFilters} danger>
          Очистить поиск
        </Button>
      </div>
    </Form>
  );
};

export default Filters;
