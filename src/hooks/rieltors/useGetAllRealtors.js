import apiInstance from "../../api";
import { useQuery } from "react-query";

const getClientsHandler = (filters) => {
  return filters && Object.values(filters).some(Boolean)
    ? () => apiInstance.find(filters)
    : apiInstance.getAllRealtors;
};

export const useGetAllRealtors = (filters) => {
  return useQuery(["getAllRealtors", filters], getClientsHandler(filters));
};
