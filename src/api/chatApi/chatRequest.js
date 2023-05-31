import axios from "axios";
import Axios from "../../utils/axios";

export const userChats = async (userId) => {
  let data = await Axios.get(`/chat/${userId}`);

  return data;
};
