export const prepareData = (data) => {
  return data?.data
    ? data?.data.map((item) => ({
        ...item.estate,
        estateId: item.estate.id,
        ...item.proposal,
      }))
    : [];
};
