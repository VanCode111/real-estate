import { useMutationExtended } from "../useMutationExtended";
import api from "../../api/estate";

export const useUpdateEstate = ({ success }) => {
  return useMutationExtended({
    apiHandler: api.updateEstate,
    success,
    key: "useGetAllEstate",
  });
};
