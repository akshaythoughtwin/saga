import { GET_API_REQUEST, GET_API_SUCCESS } from "./constants";

export const getAPIRequest = () => {
  console.log("request");

  return {
    type: GET_API_REQUEST,
  };
};

export const getAPISuccess = (apidata) => {
  console.log("getAPISuc");
  return {
    type: GET_API_SUCCESS,
    payload: apidata,
  };
};
