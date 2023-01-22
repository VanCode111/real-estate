import React, { useMemo } from "react";
import { Select, Form } from "antd";
import { Option } from "antd/es/mentions";
import { useGetAllRealtors } from "hooks/rieltors/useGetAllRealtors";
import { makeEstateOptions } from "../utils";
import { useGetClients } from "hooks/clients";
import { useGetAllEstate } from "hooks/estate/useGetAllEstate";

const EstateSelector = ({ name, type }) => {
  console.log(type);
  const { data } = useGetAllEstate();

  const options = useMemo(
    () => (data?.data ? makeEstateOptions(data?.data[type] || []) : []),
    [data, type]
  );

  console.log(options);

  return (
    <Form.Item required label="Объект недвижимости" name={name}>
      <Select>
        {options.map(({ value, label }) => (
          <Option value={value} key={value}>
            {label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default EstateSelector;
