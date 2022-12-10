import api from "../../api/proposal";
import { useQuery } from "react-query";

export const useGetHousesProposal = () => {
  return useQuery(["getHousesProposal"], api.getHousesProposal);
};
