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
import { PROPOSAL_FIELDS } from "components/Proposal/consts";
import EstateSelector from "components/Controls/EstatesSelector/EstatesSelector";

const ests = {
  apartment: "apartments",
  house: "houses",
  lands: "lands",
};

const rests = {
  apartments: "Apartments",
  houses: "Houses",
  lands: "Lands",
};

const { Option } = Select;

const ProposalModal = ({ onClose, initialData, type, ...props }) => {
  const [form] = Form.useForm();
  const typeEstate = Form.useWatch("type", form);
  console.log(initialData, "neww");
  initialData = useMemo(
    () =>
      initialData
        ? {
            ...initialData,
            estate: `${initialData.type.toLowerCase()} ${initialData.id}`,
            realtorId: initialData.realtor,
            type: ests[initialData.type.toLowerCase()],
            clientId: initialData.client,
          }
        : null,
    [initialData]
  );

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const usedInitialData = useMemo(
    () => (!initialData ? { ...initialData, type: DEFAULT_TYPE } : initialData),
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

  const onCreate = (values) => {
    createClient({
      ...values,
    });
  };

  const onUpdate = (values) => {
    values.estate = undefined;
    updateClient({
      ...values,
      id: initialData.id,
      oldType: initialData.type,
    });
  };

  return (
    <ModalItem
      {...props}
      initialData={usedInitialData}
      title="Предложение"
      onCreate={createClient}
      onUpdate={onUpdate}
      onClose={handleClose}
      onDelete={(proposal_id) =>
        deleteClient({ proposal_id, type: initialData.type })
      }
      form={form}
    >
      <PositiveNumberInput
        label={PROPOSAL_FIELDS.price.label}
        name={PROPOSAL_FIELDS.price.value}
        required
      />
      <RieltorsSelector name={"realtorId"} />

      <ClientsSelector name={"clientId"} />

      <EstateTypesSelector name="type" />

      <EstateSelector name={"estateId"} type={rests[typeEstate]} />
    </ModalItem>
  );
};

export default ProposalModal;
