import api from "../../api/estate";
import { useQuery } from "react-query";

const checkFilters = (filters) => {
  return filters && Object.values(filters).some(Boolean);
};

const getEstateHandler = (filters) => {
  if (checkFilters(filters?.address)) {
    return api.SearchByAddress;
  }

  if (checkFilters(filters?.district)) {
    return api.SearchByAddress;
  }

  return api.getAllEstate;
};

export const useGetAllEstate = (filters) => {
  return useQuery(["useGetAllEstate", filters], getEstateHandler(filters));
};
