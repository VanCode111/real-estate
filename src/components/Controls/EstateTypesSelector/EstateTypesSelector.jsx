import React, { useMemo } from "react";
import { Select, Form } from "antd";
import { Option } from "antd/es/mentions";
import { useGetAllRealtors } from "hooks/rieltors/useGetAllRealtors";
import { makeRieltorOptions } from "../utils";
import { useGetClients } from "hooks/clients";
import { ESTATE_TYPES } from "components/RequirementsModal/const";

const EstateTypesSelector = ({ name }) => {
  return (
    <Form.Item required label="Тип недвижимости" name={name}>
      <Select>
        {ESTATE_TYPES.map(({ value, label }) => (
          <Option value={value}>{label}</Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default EstateTypesSelector;
