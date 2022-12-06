import { useMutationExtended } from "../useMutationExtended";
import apiInstance from "../../api/index.js";

export const useUpdateClient = ({ success }) => {
  return useMutationExtended({
    apiHandler: apiInstance.updateClient,
    success,
    key: "getAllClients",
  });
};
