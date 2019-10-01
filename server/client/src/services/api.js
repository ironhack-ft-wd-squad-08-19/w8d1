// src/services/api.js
import axios from "axios";

const signup = (username, password) => {
  return axios
    .post("/api/auth/signup", { username, password })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

export { signup };
