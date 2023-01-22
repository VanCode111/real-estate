import { useMutationExtended } from "../useMutationExtended";
import api from "../../api/proposal";

export const useProposalCreate = ({ success, type }) => {
  return useMutationExtended({
    apiHandler: api.proposalCreate,
    success,
    key: ["getProposalApartments", "getProposalHouses", "getProposalLands"],
  });
};
