import api from "../../api/proposal";
import { useQuery } from "react-query";

export const useGetHousesProposal = () => {
  return useQuery(["getProposalHouses"], api.getHousesProposal);
};
