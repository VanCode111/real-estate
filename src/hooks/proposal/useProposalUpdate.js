import { useMutationExtended } from "../useMutationExtended";
import api from "../../api/proposal";

export const useProposalUpdate = ({ success }) => {
  return useMutationExtended({
    apiHandler: api.proposalUpdate,
    success,
    key: ["getProposalApartments", "getProposalHouses", "getProposalLands"],
  });
};
