import api from "../../api/requiremets";
import { useQuery } from "react-query";

const getClientsHandler = (filters) => {
  return filters && Object.values(filters).some(Boolean)
    ? () => api.getAllRequirements
    : api.getAllRequirements;
};

export const useGetAllRequirements = (filters) => {
  return useQuery(["getAllRequirements", filters], getClientsHandler(filters));
};
