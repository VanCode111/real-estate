import { useMutationExtended } from "../useMutationExtended";
import api from "../../api/requiremets";

export const useEditRequirement = ({ success }) => {
  return useMutationExtended({
    apiHandler: api.editRequirement,
    success,
    key: "getAllRequirements",
  });
};
