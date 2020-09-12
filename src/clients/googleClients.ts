import Axios from "../utils/axios";
import config from "config";

export const getUserProfile = async (token) => {
  const url = config.get("googleApi.getProfile");
  const xhr = await new Axios(url, "get", null, {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  });
  let res = await xhr.send();
  return res;
};

export const getListContacts = async (token) => {
  const url = config.get("googleApi.getContacts");
  const xhr = await new Axios(url, "get", null, {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  });
  let res = await xhr.send();
  return res;
};
