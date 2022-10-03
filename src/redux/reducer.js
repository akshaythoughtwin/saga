import {
  SET_API_REQUEST,
  SET_API_SUCCESS,
  GET_API_REQUEST,
  GET_API_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  apidata: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_API_SUCCESS:
      alert("Data is all set in Firebase");
      return {
        ...state,
        apidata: action.payload,
        loading: false,
      };
    case GET_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_API_SUCCESS:
      console.log("pappu", action.payload);
      return {
        ...state,
        apidata: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
