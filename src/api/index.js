import { axiosInstance } from "./utils";
import estateApi from "./estate";

const getAllClients = (body) =>
  axiosInstance.get("clients/getAllClients", { body });

const createClient = (body) => axiosInstance.post("clients/addClient", body);

const updateClient = (body) => axiosInstance.post("clients/editClient", body);

const deleteClient = (id) =>
  axiosInstance.get("clients/deleteClient", { params: { id } });

const findClient = (params) =>
  axiosInstance.get("clients/findClient", { params });

const getAllRealtors = (body) => axiosInstance.get("realtors/getAllRealtors");

const createRieltor = (body) => axiosInstance.post("realtors/addRealtor", body);

const updateRieltor = (body) =>
  axiosInstance.post("realtors/editRealtor", body);

const findRealtor = (body) =>
  axiosInstance.get("realtors/findRealtor", { params: body });

const deleteRealtor = (id) =>
  axiosInstance.get("realtors/deleteRealtor", { params: { id } });

export default {
  createClient,
  createRieltor,
  updateRieltor,
  updateClient,
  getAllRealtors,
  getAllClients,
  deleteRealtor,
  findClient,
  deleteClient,
  findRealtor,
};
