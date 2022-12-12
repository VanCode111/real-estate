import { Form, Input } from "antd";
import PositiveNumberInput from "components/Controls/PositiveNumberInput/PositiveNumberInput";

export const makeFields = (fields) => {
  return Object.values(fields).map(({ value, label }) => {
    return <PositiveNumberInput name={value} label={label} />;
  });
};
