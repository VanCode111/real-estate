import api from "../../api/proposal";
import { useQuery } from "react-query";

export const useGetLandsProposal = () => {
  return useQuery(["getProposalLands"], api.getLandsProposal);
};
