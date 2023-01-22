import { axiosInstance } from "./utils";

const getApartmentsProposal = () =>
  axiosInstance.get("proposal/getApartmentsProposal");

const getHousesProposal = () => axiosInstance.get("proposal/getHousesProposal");

const getLandsProposal = () => axiosInstance.get("proposal/getLandsProposal");

const proposalDelete = (params) =>
  axiosInstance.get("proposal/delete", { params });

const proposalCreate = (body) =>
  axiosInstance.post("proposal/create", null, { params: body });

const proposalUpdate = (body) => axiosInstance.post("proposal/update", body);

export default {
  getApartmentsProposal,
  getHousesProposal,
  getLandsProposal,
  proposalDelete,
  proposalCreate,
  proposalUpdate,
};
