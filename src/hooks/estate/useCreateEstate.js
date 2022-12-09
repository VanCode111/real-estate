import { useMutationExtended } from "../useMutationExtended";
import api from "../../api/estate";

export const useCreateEstate = ({ success }) => {
  return useMutationExtended({
    apiHandler: api.createEstate,
    success,
    key: "useGetAllEstate",
  });
};
