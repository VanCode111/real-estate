import React from "react";
import { Form, InputNumber } from "antd";

const minValidator = (rule, value, callback) => {
  if (typeof value === "number" && value < 1) {
    callback("Число должно быть положительным");
  } else {
    callback();
  }
};

const isInteger = (rule, value, callback) => {
  if (typeof value === "number" && !Number.isInteger(value)) {
    callback("Число должно быть целым");
  } else {
    callback();
  }
};

const PositiveNumberInput = ({ name, required, label, style }) => {
  return (
    <Form.Item
      style={style}
      rules={[
        { required, message: "Обязательное поле" },
        { validator: minValidator },
        { validator: isInteger },
      ]}
      label={label}
      name={name}
    >
      <InputNumber />
    </Form.Item>
  );
};

export default PositiveNumberInput;
