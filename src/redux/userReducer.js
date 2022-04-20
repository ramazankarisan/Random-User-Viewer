import { filterByCountry, selectFromResponse } from "../helpers/fecthReduxUtils";

const INITIAL_STATE = {
  isLoading: true,
  users: [],
  usersCopy: [],
  error: "",
  searchText: ""
}

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_DATA_START":
      return state;
    case "FETCH_DATA_SUCCESS":
      const selectedArr = selectFromResponse(action.payload.results, ["name", "gender", "location", "email"])
      return { ...state, usersCopy: selectedArr, users: selectedArr, isLoading: false, error: "" };
    case "FETCH_DATA_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "SEARCH_BY_COUNTRY":
      const newUserList = filterByCountry(state.usersCopy, action.payload)
      return { ...state, searchText: action.payload, users: newUserList }
    default:
      return state
  }
}

export default userReducer