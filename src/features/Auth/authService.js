import axios from "axios";

import { API_URL } from "../../app/constants";

export const signUp = (body) => {
  return axios({
    method: "post",
    url: `${API_URL}/users/signup`,
    data: body,
  }).then((response) => {
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
  });
};

export const login = ({ email, password }) => {
  return axios({
    method: "post",
    url: `${API_URL}/users/login`,
    data: { email, password },
  }).then((response) => {
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
  });
};
