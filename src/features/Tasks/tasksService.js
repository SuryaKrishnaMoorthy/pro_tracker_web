import axios from "axios";
import moment from "moment";

import { API_URL } from "../../app/constants";

export const getAllTasks = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/tasks`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("get all tasks request: ", error);
  }
};
