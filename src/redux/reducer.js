import { GET_API_REQUEST, GET_API_SUCCESS } from "./constants";

const initialState = {
  loading: false,
  apidata: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_API_SUCCESS:
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
