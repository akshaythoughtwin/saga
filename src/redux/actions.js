import {
  SET_API_REQUEST,
  SET_API_SUCCESS,
  GET_API_REQUEST,
  GET_API_SUCCESS,
} from "./constants";

export const setAPIRequest = () => {
  return {
    type: SET_API_REQUEST,
  };
};

export const setAPISuccess = (message) => {
  return {
    type: SET_API_SUCCESS,
    payload: message,
  };
};

export const getAPIRequest = () => {
  return {
    type: GET_API_REQUEST,
  };
};

export const getAPISuccess = (data) => {
  console.log("getapi success data", data);
  return {
    type: GET_API_SUCCESS,
    payload: data,
  };
};
