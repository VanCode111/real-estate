import React, { useState, useMemo } from "react";
import { Form, Input, Select } from "antd";
import ModalItem from "components/ModalItem/ModalItem";

import { FIELDS } from "components/Requirements/consts";
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
import { useCreateDeal } from "hooks/deals/useCreateDeal";
import { useDeleteDeal } from "hooks/deals/useDeleteDeal";
import { useEditDeal } from "hooks/deals/useEditDeal";
import ProposalSelector from "components/Controls/ProposalSelector/ProposalSelector";
import ProposalHouses from "components/Controls/ProposalSelector/ProposalHouses";
import ProposalApartments from "components/Controls/ProposalSelector/ProposalApartments";
import RequirementsSelector from "components/Controls/RequirementsSelector/RequirementsSelector";

const DealModal = ({ onClose, initialData, isEdit, ...props }) => {
  const [form] = Form.useForm();
  const type = Form.useWatch("type", form);
  console.log(initialData);
  initialData = useMemo(
    () =>
      initialData
        ? {
            ...initialData,
            proposalId: initialData.proposal_id,
            requirementsId: initialData.requirement_id,
          }
        : null,
    [initialData]
  );

  const economy = initialData?.economy;

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const { mutate: createClient } = useCreateDeal({
    success: handleClose,
  });

  const { mutate: deleteClient } = useDeleteDeal({
    success: handleClose,
  });

  const { mutate: updateClient } = useEditDeal({
    success: handleClose,
  });

  return (
    <ModalItem
      {...props}
      initialData={initialData}
      title="Сделка"
      isEdit={isEdit}
      onCreate={createClient}
      onUpdate={(values) => updateClient({ ...values, dealId: initialData.id })}
      onClose={handleClose}
      onDelete={(values) =>
        deleteClient({ dealId: initialData.id, type: initialData.type })
      }
      form={form}
    >
      <EstateTypesSelector name="type" />

      {type === "lands" && <ProposalSelector type={type} name="proposalId" />}
      {type === "apartments" && (
        <ProposalApartments name="proposalId" type={type} />
      )}
      {type === "houses" && <ProposalHouses type={type} name="proposalId" />}
      <RequirementsSelector name="requirementsId" type={type} />
      {isEdit && economy && (
        <>
          <p>
            Cтоимость услуг для клиента-продавца: {economy.PriceOfBuyCompany}
          </p>
          <p>
            Стоимость услуг для клиента-покупателя: {economy.PriceOfSellCompany}
          </p>
          <p>
            Размер отчислений риэлтору клиента-продавца:{" "}
            {economy.partOfSellerRealtor}
          </p>
          <p>
            Размер отчислений риэлтору клиента-покупателя:{" "}
            {economy.partOfBuyerCompany}
          </p>
          <p>Размер отчислений компании: {economy.partOfBuyerCompany}</p>
        </>
      )}
    </ModalItem>
  );
};

export default DealModal;
