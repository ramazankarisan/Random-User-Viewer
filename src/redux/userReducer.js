import { filterByCountry, selectFromResponse } from "../helpers/fecthReduxUtils";

const INITIAL_STATE = {
  isLoading: true,
  users: [],
  usersCopy: [],
  error: "",
  searchText: "",
  pagination: {
    numberOfResults: 20,
    resultPerPage: 10,
    currentPage: 1,

  },
  btns: {
    nextBtn: false,
    preBtn: true
  }
}

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // first rendering fetch cases
    case "FETCH_DATA_START":
      return state;
    case "FETCH_DATA_SUCCESS":
      const selectedArr = selectFromResponse(action.payload.results, ["name", "gender", "location", "email"])
      return { ...state, usersCopy: selectedArr, users: selectedArr, isLoading: false, error: "" };
    case "FETCH_DATA_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    // filter the country case
    case "SEARCH_BY_COUNTRY":
      const newUserList = filterByCountry(state.usersCopy, action.payload)
      return { ...state, searchText: action.payload, users: newUserList }
    case "NUMBER_OF_RESULTS":
      return { ...state, pagination: { ...state.pagination, numberOfResults: action.payload, currentPage: 1 } }
    case "RESULTS_PER_PAGE":
      return { ...state, pagination: { ...state.pagination, resultPerPage: action.payload, currentPage: 1 } }
    case "SET_CURRENT_PAGE":
      return { ...state, pagination: { ...state.pagination, currentPage: state.pagination.currentPage + Number(action.payload) } }
    case "NEXT_BTN_DIS":
      return { ...state, btns: { ...state.btns, nextBtn: true } }
    case "PREV_BTN_DIS":
      return { ...state, btns: { ...state.btns, preBtn: true } }
    case "NEXT_BTN_ACT":
      return { ...state, btns: { ...state.btns, nextBtn: false } }
    case "PREV_BTN_ACT":
      return { ...state, btns: { ...state.btns, preBtn: false } }
    default:
      return state
  }
}

export default userReducer