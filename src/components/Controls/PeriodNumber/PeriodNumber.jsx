import React from "react";
import { Form } from "antd";
import PositiveNumberInput from "../PositiveNumberInput/PositiveNumberInput";

const PeriodNumber = ({ label, minName, maxName }) => {
  return (
    <Form.Item label={label}>
      <PositiveNumberInput name={minName} style={{ display: "inline-block" }} />{" "}
      <span
        style={{
          display: "inline-block",
          width: "24px",
          lineHeight: "28px",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        -
      </span>
      <PositiveNumberInput name={maxName} style={{ display: "inline-block" }} />
    </Form.Item>
  );
};

export default PeriodNumber;
