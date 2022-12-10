import { useMutationExtended } from "../useMutationExtended";
import api from "../../api/deals";

export const useCreateDeal = ({ success }) => {
  return useMutationExtended({
    apiHandler: api.createDeal,
    success,
    key: "getAllDeals",
  });
};
