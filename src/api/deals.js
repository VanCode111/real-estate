import { axiosInstance } from "./utils";

const getAllDeals = () => axiosInstance.get("deal/getAllDeals");

const createDeal = (body) => axiosInstance.post("deal/createDeal", { body });

const deleteDeal = (params) => axiosInstance.get("deal/deleteDeal", { params });

const editDeal = (body) => axiosInstance.get("deal/editDeal", { body });

export default {
  getAllDeals,
  createDeal,
  deleteDeal,
  editDeal,
};
