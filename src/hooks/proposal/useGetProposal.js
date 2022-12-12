import api from "../../api/proposal";
import { useQuery } from "react-query";

const getHandlerByType = (type) => {
  switch (type) {
    case "apartments":
      return api.getApartmentsProposal;
    case "houses":
      return api.getHousesProposal;
    case "lands":
      return api.getLandsProposal;
  }
};

export const useGetProposal = ({ type }) => {
  return useQuery(["getProposal"], getHandlerByType(type));
};
