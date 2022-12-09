import { useMutationExtended } from "../useMutationExtended";
import api from "../../api/estate";

export const useDeleteEstate = ({ success }) => {
  return useMutationExtended({
    apiHandler: api.deleteEstate,
    success,
    key: "useGetAllEstate",
  });
};
