import api from "../helpers/api"

// fetch data at the first rendering
export const fetchData = (resultNum) => async (dispatch) => {
  dispatch({ type: 'FETCH_DATA_START' })
  try {
    const res = await api.get(`?results=${resultNum}`)
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: res.data })
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_ERROR', payload: error.message })
  }
}

// change search input value
export const changeSearchInput = (searchText) => {
  return {
    type: "SEARCH_BY_COUNTRY",
    payload: searchText
  }
}
// set the number of results
export const setRequestedResult = (num) => {
  return {
    type: "NUMBER_OF_RESULTS",
    payload: num
  }
}
// set the results per page
export const setResultsPerPage = (num) => {
  return {
    type: "RESULTS_PER_PAGE",
    payload: num
  }
}
// set the currentPage
export const setCurrentPage = (num) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: num
  }
}

// these 4 are for the pagination btns
export const nextBtnDisabled = () => {
  return {
    type: "NEXT_BTN_DIS"
  }
}
export const prevBtnDisabled = () => {
  return {
    type: "PREV_BTN_DIS"
  }
}
export const nextBtnActive = () => {
  return {
    type: "NEXT_BTN_ACT"
  }
}
export const prevBtnActive = () => {
  return {
    type: "PREV_BTN_ACT"
  }
}
