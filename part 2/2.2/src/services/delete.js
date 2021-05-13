import axios from "axios";
const baseURL = "http://localhost:3001/persons";

export const del = ({ id }) => {
  const request = axios.delete(baseURL, { id });
  return request
    .then((reponse) => reponse.data)
    .catch(() => {
      alert(`Error 404 no encontrado`);
    });
};
