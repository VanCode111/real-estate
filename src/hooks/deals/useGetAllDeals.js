import api from "../../api/deals";
import { useQuery } from "react-query";

// const getClientsHandler = (filters) => {
//   return filters && Object.values(filters).some(Boolean)
//     ? () => apiInstance.findClient(filters)
//     : apiInstance.getAllClients;
// };

export const useGetAllDeals = () => {
  return useQuery(["GetAllDeals"], api.getAllDeals);
};
