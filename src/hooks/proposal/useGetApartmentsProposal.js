import api from "../../api/proposal";
import { useQuery } from "react-query";

export const useGetApartmentsProposal = () => {
  return useQuery(["getApartmentsProposal"], api.getApartmentsProposal);
};
