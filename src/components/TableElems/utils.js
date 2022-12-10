export const generateColumns = (data) => {
  return Object.values(data).map(({ value, label }) => ({
    title: label,
    dataIndex: value,
    key: value,
  }));
};
