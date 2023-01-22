import Item from "antd/es/list/Item";

export const makeRieltorOptions = (rieltors) => {
  return rieltors.map(({ name, surname, secondName, id }) => ({
    label: `${name} ${surname} ${secondName}`,
    value: id,
  }));
};

export const makeEstateOptions = (data) => {
  return data.map((estate) => ({
    label: `${estate.Address_City} ${estate.Address_Street}`,
    value: estate.id,
  }));
};

export const makeProposalOptions = (data) => {
  return data.map(({ estate, proposal }) => ({
    label: `${estate.Address_City} ${estate.Address_Street}  (цена: ${proposal.price})`,
    value: proposal.id,
  }));
};

export const makeRequirementsOptions = (data) => {
  return data.map((estate) => ({
    label: `${estate.addres_street} ${estate.addres_city}`,
    value: estate.id,
  }));
};
