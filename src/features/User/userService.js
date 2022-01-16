import axios from "axios";

import { API_URL } from "../../app/constants";

export const getUser = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/users`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
