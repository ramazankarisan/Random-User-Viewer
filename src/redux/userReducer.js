import { selectFromResponse } from "../helpers/fecthReduxUtils";

const INITIAL_STATE = {
  isLoading: true,
  data: [],
  error: ""
}

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_DATA_START":
      return state;
    case "FETCH_DATA_SUCCESS":
      const selectedArr = selectFromResponse(action.payload.results, ["name", "gender", "location", "email"])
      return { ...state, data: selectedArr, isLoading: false, error: "" };
    case "FETCH_DATA_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state
  }
}

export default userReducer