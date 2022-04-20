import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchData } from './redux/userActions';

function App() {
  const dispatch = useDispatch();

  const handleFetch = () => {
    dispatch(fetchData())
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
