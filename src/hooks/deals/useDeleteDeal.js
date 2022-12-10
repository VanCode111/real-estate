import { useMutationExtended } from "../useMutationExtended";
import api from "../../api/deals";

export const useDeleteDeal = ({ success }) => {
  return useMutationExtended({
    apiHandler: api.deleteDeal,
    success,
    key: "getAllDeals",
  });
};
