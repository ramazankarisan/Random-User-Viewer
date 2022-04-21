import { useDispatch, useSelector } from 'react-redux'
import { nextBtnActive, nextBtnDisabled, prevBtnActive, prevBtnDisabled, setCurrentPage, setRequestedResult, setResultsPerPage } from '../redux/userActions'

const TablePagination = () => {
  // redux variables
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { pagination, btns } = state;

  // to calculate the how many pages will be 
  const pageNumber = Math.ceil(pagination.numberOfResults / pagination.resultPerPage)

  // with clicking next button increase the currentPage and changes the disabled property of the buttons
  const handleNext = () => {
    if (pagination.currentPage < pageNumber) {
      dispatch(setCurrentPage(1))
      dispatch(prevBtnActive())
    }
    if (pagination.currentPage + 1 >= pageNumber) {
      dispatch(nextBtnDisabled())
    }
  }
  // with clicking next button decrease the currentPage and changes the disabled property of the buttons
  const handlePrevious = () => {
    if (pagination.currentPage > 1) {
      dispatch(setCurrentPage(-1))
      dispatch(nextBtnActive())
    }
    if (pagination.currentPage === 2) {
      dispatch(prevBtnDisabled())
    }
  }
  return (
    <div className="pagination">

      <button onClick={handlePrevious} disabled={pageNumber <= 1 || btns.preBtn}>
        {'<'}
      </button>{' '}
      <span><strong>{pagination.currentPage}</strong></span>{' '}
      <button onClick={() => handleNext()} disabled={pageNumber <= 1 || btns.nextBtn}>
        {'>'}
      </button>{" "}
      {/* select number of result per page */}
      <select onChange={(e) => {
        dispatch(setResultsPerPage(Number(e.target.value)))
        if (pageNumber > 1) {
          dispatch(nextBtnActive())
          dispatch(prevBtnDisabled())
        }
      }}
        name="resultPerPage" id="resultPerPage" defaultValue="">
        <option value="" disabled>Results per page</option>


        {[10, 20, 30, 40, 50].map((item, ind) => {
          return (
            <option key={ind} value={item}>{item}</option>
          )
        })}
      </select> {" "}
      {/* totally how many results are there */}
      <label htmlFor="resultAmount"><strong>Number of Results:</strong></label>{" "}
      <input onChange={(e) => {
        dispatch(setRequestedResult(Number(e.target.value)))
        if (pageNumber > 1) {
          dispatch(nextBtnActive())
          dispatch(prevBtnDisabled())
        }
      }} type="number" name="resultAmount" id="resultAmount" value={pagination.numberOfResults} />
    </div>
  )
}

export default TablePagination