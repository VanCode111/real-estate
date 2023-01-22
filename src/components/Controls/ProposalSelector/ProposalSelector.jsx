import React, { useMemo } from "react";
import { Select, Form } from "antd";
import { Option } from "antd/es/mentions";
import { useGetAllRealtors } from "hooks/rieltors/useGetAllRealtors";
import { makeEstateOptions, makeProposalOptions } from "../utils";
import { useGetClients } from "hooks/clients";
import { useGetAllEstate } from "hooks/estate/useGetAllEstate";
import { useGetApartmentsProposal } from "hooks/proposal/useGetApartmentsProposal";
import { useGetHousesProposal } from "hooks/proposal/useGetHousesProposal";
import { useGetLandsProposal } from "hooks/proposal/useGetLandsProposal";

const ProposalSelector = ({ name, type }) => {
  console.log(type);

  const { data: lands } = useGetLandsProposal();

  const options = useMemo(
    () => (lands?.data ? makeProposalOptions(lands.data || []) : []),
    [lands]
  );

  console.log(options, "mmmmm");

  return (
    <Form.Item required label="Предложение" name={name}>
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

export default ProposalSelector;
