import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import UserMap from './components/UserMap';
import UserTable from './components/UserTable';
import { changeSearchInput, fetchData } from './redux/userActions';


function App() {
  const dispatch = useDispatch();

  const state = useSelector(state => state);
  const { users, searchText, isLoading, error } = state;



  const handleFetch = () => {
    dispatch(fetchData())
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <>
      {

        isLoading ?
          "loading" :
          error ?
            <p>{error}</p> :
            <UserTable />

      }

    </>
  );
}

export default App;
