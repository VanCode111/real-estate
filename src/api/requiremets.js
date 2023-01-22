import { axiosInstance } from "./utils";

const getAllRequirements = () =>
  axiosInstance.get("requirements/getAllRequirements");

const createRequirement = (body) =>
  axiosInstance.post("requirements/createRequirement", body);

const findRequirementForProposal = (params) =>
  axiosInstance.get("requirements/findRequirementForProposal", { params });

const deleteRequirement = (id) =>
  axiosInstance.get("requirements/deleteRequirement", { params: { id } });

const editRequirement = (body) =>
  axiosInstance.post("requirements/editRequirement", body);

export default {
  getAllRequirements,
  createRequirement,
  findRequirementForProposal,
  deleteRequirement,
  editRequirement,
};
