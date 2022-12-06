import apiInstance from "../api";
import { useQuery } from "react-query";

const getClientsHandler = (filters) => {
  return filters && Object.values(filters).some(Boolean)
    ? () => apiInstance.findClient(filters)
    : apiInstance.getAllClients;
};

export const useGetClients = (filters) => {
  return useQuery(["getAllClients", filters], getClientsHandler(filters));
};
