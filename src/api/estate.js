import { axiosInstance } from "./utils";

const getAllEstate = () => axiosInstance.get("estate/getAllEstate");

const SearchByAddress = (params) =>
  axiosInstance.get("estate/SearchByAddress", { params });

const createEstate = (body) => axiosInstance.post("estate/createEstate", body);

const SearchByDistrict = (params) =>
  axiosInstance.get("estate/SearchByDistrict", { params });

const deleteEstate = (params) =>
  axiosInstance.get("estate/deleteEstate", { params });

const updateEstate = (body) =>
  axiosInstance.get("estate/updateEstate", { body });

export default {
  getAllEstate,
  SearchByAddress,
  createEstate,
  SearchByDistrict,
  deleteEstate,
  updateEstate,
};
