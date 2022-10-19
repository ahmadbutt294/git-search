import formatUrl from "../utils/formatUrl";
import client from "./axios.config";

export const getUser = ({ queryParams = {} }) => {
  return client.get(formatUrl("/search/users", queryParams));
};

export const getUserDetail = (userName) => {
  return client.get(`/users/${userName}`);
};
