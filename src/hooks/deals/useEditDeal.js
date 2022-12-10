import { useMutationExtended } from "../useMutationExtended";
import api from "../../api/deals";

export const useEditDeal = ({ success }) => {
  return useMutationExtended({
    apiHandler: api.editDeal,
    success,
    key: "getAllDeals",
  });
};
