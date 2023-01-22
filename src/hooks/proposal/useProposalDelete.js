import { useMutationExtended } from "../useMutationExtended";
import api from "../../api/proposal";

export const useProposalDelete = ({ success }) => {
  return useMutationExtended({
    apiHandler: api.proposalDelete,
    success,
    key: ["getProposalApartments", "getProposalHouses", "getProposalLands"],
  });
};
