import api from "../helpers/api"


export const fetchData = () => async (dispatch) => {
  dispatch({ type: 'FETCH_DATA_START' })
  try {
    const res = await api.get("?results=20")
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: res.data })
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_ERROR', payload: error.message })
  }
}

export const changeSearchInput = (searchText) => {
  return {
    type: "SEARCH_BY_COUNTRY",
    payload: searchText
  }
}
