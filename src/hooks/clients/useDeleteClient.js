import { useMutationExtended } from "../useMutationExtended";
import apiInstance from "../../api/index.js";

export const useDeleteClient = ({ success }) => {
  return useMutationExtended({
    apiHandler: apiInstance.deleteClient,
    success,
    key: "getAllClients",
  });
};
