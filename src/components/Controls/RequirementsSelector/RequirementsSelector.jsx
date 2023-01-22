import React, { useMemo } from "react";
import { Select, Form } from "antd";
import { Option } from "antd/es/mentions";
import { useGetAllRealtors } from "hooks/rieltors/useGetAllRealtors";
import {
  makeEstateOptions,
  makeProposalOptions,
  makeRequirementsOptions,
} from "../utils";
import { useGetClients } from "hooks/clients";
import { useGetAllEstate } from "hooks/estate/useGetAllEstate";
import { useGetApartmentsProposal } from "hooks/proposal/useGetApartmentsProposal";
import { useGetHousesProposal } from "hooks/proposal/useGetHousesProposal";
import { useGetLandsProposal } from "hooks/proposal/useGetLandsProposal";
import { useGetAllRequirements } from "hooks/requiremets/useGetAllRequirements";

const RequirementsSelector = ({ name, type }) => {
  console.log(type);
  const { data: dataSource } = useGetAllRequirements();

  const options = useMemo(
    () =>
      dataSource?.data
        ? makeRequirementsOptions(
            dataSource?.data.filter((item) => item.estate_type === type) || []
          )
        : [],
    [dataSource, type]
  );

  return (
    <Form.Item required label="Потребность" name={name}>
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

export default RequirementsSelector;
