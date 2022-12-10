const { useGetAllRealtors } = require("./rieltors/useGetAllRealtors");

const usePrepareColumns = () => {
  const { data } = useGetAllRealtors();
};
