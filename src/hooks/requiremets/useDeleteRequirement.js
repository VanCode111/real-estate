import { useMutationExtended } from "../useMutationExtended";
import api from "../../api/requiremets";

export const useDeleteRequirement = ({ success }) => {
  return useMutationExtended({
    apiHandler: api.deleteRequirement,
    success,
    key: "getAllRequirements",
  });
};
