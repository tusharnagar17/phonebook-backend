import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (item) => {
  return axios.post(baseUrl, item);
};

const update = (id, item) => {
  return axios.put(`${baseUrl}/${id}`, item);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove,
};
