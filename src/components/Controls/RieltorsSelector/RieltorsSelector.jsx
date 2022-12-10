import React, { useMemo } from "react";
import { Select, Form } from "antd";
import { Option } from "antd/es/mentions";
import { useGetAllRealtors } from "hooks/rieltors/useGetAllRealtors";
import { makeRieltorOptions } from "../utils";

const RieltorsSelector = ({ name }) => {
  const { data } = useGetAllRealtors();

  const options = useMemo(
    () => (data?.data ? makeRieltorOptions(data?.data) : []),
    [data]
  );

  return (
    <Form.Item required label="Риэлтор" name={name}>
      <Select>
        {options.map(({ value, label }) => (
          <Option value={value}>{label}</Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default RieltorsSelector;
