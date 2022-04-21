import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import TablePagination from './components/TablePagination';
import UserTable from './components/UserTable';
import { fetchData } from './redux/userActions';


function App() {
  // redux variables
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { isLoading, error, pagination } = state;

  // function to fetch data from api with the number we want
  const handleFetch = () => {
    dispatch(fetchData(pagination.numberOfResults))
  }
  // at page load, to fetch data and with every change of results number
  useEffect(() => {
    handleFetch()
  }, [pagination.numberOfResults])

  return (
    <>
      {

        isLoading ?
          "loading" :
          error ?
            <p>{error}</p> :
            (
              <><UserTable />
                <TablePagination /></>)

      }

    </>
  );
}

export default App;
