import { useMutationExtended } from "../useMutationExtended";
import apiInstance from "../../api/index.js";

export const useCreateClient = ({ success }) => {
  return useMutationExtended({
    apiHandler: apiInstance.createClient,
    success,
    key: "getAllClients",
  });
};
