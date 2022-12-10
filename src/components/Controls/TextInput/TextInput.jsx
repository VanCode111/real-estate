import React from "react";
import { Form, Input } from "antd";

const TextInput = ({ name, required, label }) => {
  return (
    <Form.Item
      rules={[{ required, message: "Обязательное поле" }]}
      label={label}
      name={name}
    >
      <Input />
    </Form.Item>
  );
};

export default TextInput;
