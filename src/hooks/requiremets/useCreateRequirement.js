import { useMutationExtended } from "../useMutationExtended";
import api from "../../api/requiremets";

export const useCreateRequirement = ({ success }) => {
  return useMutationExtended({
    apiHandler: api.createRequirement,
    success,
    key: "getAllRequirements",
  });
};
