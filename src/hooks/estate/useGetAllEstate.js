import api from "../../api/estate";
import { useQuery } from "react-query";

const checkFilters = (filters) => {
  return filters && Object.values(filters).some(Boolean);
};

const getEstateHandler = (filters) => {
  if (checkFilters(filters?.address)) {
    return () => api.SearchByAddress(filters?.address);
  }

  if (checkFilters(filters?.district)) {
    return () => api.SearchByAddress(filters?.district);
  }

  return api.getAllEstate;
};

export const useGetAllEstate = (filters) => {
  return useQuery(["useGetAllEstate", filters], getEstateHandler(filters));
};
