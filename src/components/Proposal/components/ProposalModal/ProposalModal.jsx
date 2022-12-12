import React, { useState, useMemo } from "react";
import { Form, Input, Select } from "antd";
import ModalItem from "components/ModalItem/ModalItem";

import { DEFAULT_TYPE, ESTATE_TYPES } from "./const";
import { FIELDS } from "components/Requirements/consts";
import { makeFields } from "./utils";
import {
  APARTMENTS_FIELDS,
  LAND_FIELDS,
  HOUSES_FIELDS,
} from "components/Requirements/consts";
import RieltorsSelector from "components/Controls/RieltorsSelector/RieltorsSelector";
import ClientsSelector from "components/Controls/ClientsSelector/ClientsSelector";
import EstateTypesSelector from "components/Controls/EstateTypesSelector/EstateTypesSelector";
import { useCreateRequirement } from "hooks/requiremets/useCreateRequirement";
import { useEditRequirement } from "hooks/requiremets/useEditRequirement";
import { useDeleteRequirement } from "hooks/requiremets/useDeleteRequirement";
import TextInput from "components/Controls/TextInput/TextInput";
import PositiveNumberInput from "components/Controls/PositiveNumberInput/PositiveNumberInput";
import { useProposalCreate } from "hooks/proposal/useProposalCreate";
import { useProposalDelete } from "hooks/proposal/useProposalDelete";
import { useProposalUpdate } from "hooks/proposal/useProposalUpdate";

const { Option } = Select;

const apartmentsFields = makeFields(APARTMENTS_FIELDS);
const landFields = makeFields(LAND_FIELDS);
const housesFields = makeFields(HOUSES_FIELDS);

const ProposalModal = ({ onClose, initialData, ...props }) => {
  const [form] = Form.useForm();
  const type = Form.useWatch("estate_type", form);

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const usedInitialData = useMemo(
    () => ({ ...initialData, type: DEFAULT_TYPE }),
    [initialData]
  );

  const { mutate: createClient } = useProposalCreate({
    success: handleClose,
  });

  const { mutate: deleteClient } = useProposalDelete({
    success: handleClose,
  });

  const { mutate: updateClient } = useProposalUpdate({
    success: handleClose,
  });

  return (
    <ModalItem
      {...props}
      initialData={usedInitialData}
      title="Потребность"
      onCreate={createClient}
      onUpdate={updateClient}
      onClose={handleClose}
      onDelete={deleteClient}
      form={form}
    >
      <TextInput
        label={FIELDS.addres_city.label}
        name={FIELDS.addres_city.value}
      />
      <TextInput
        label={FIELDS.addres_house.label}
        name={FIELDS.addres_house.value}
      />
      <TextInput
        label={FIELDS.addres_number.label}
        name={FIELDS.addres_number.value}
      />
      <TextInput
        label={FIELDS.addres_street.label}
        name={FIELDS.addres_street.value}
      />
      <PositiveNumberInput
        label={FIELDS.min_price.label}
        name={FIELDS.min_price.value}
      />
      <PositiveNumberInput
        label={FIELDS.max_price.label}
        name={FIELDS.max_price.value}
      />
      <RieltorsSelector name={FIELDS.realtor_id.value} />

      <ClientsSelector name={FIELDS.client_id.value} />

      <EstateTypesSelector name={FIELDS.estate_type.value} />

      {type === "houses" && housesFields}
      {type === "apartments" && apartmentsFields}
      {type === "lands" && landFields}
    </ModalItem>
  );
};

export default ProposalModal;
