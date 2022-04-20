import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { changeSearchInput, fetchData } from './redux/userActions';

const columnHeadings = ["Name", "Gender", "Email", "Location"];

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { users, searchText } = state;

  const handleChange = () => {
    dispatch(changeSearchInput())
  }

  const handleFetch = () => {
    dispatch(fetchData())
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {columnHeadings.map(heading => {
              if (heading === "Location") {
                return null
              }
              return (
                <th>{heading}</th>
              )

            })}
            <th>Location <input onChange={(e) => dispatch(changeSearchInput(e.target.value))} value={searchText} type="search" name="searchCountry" id="searchCountry" /></th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => {
            return (
              <tr>
                <td>{user.name.first + " " + user.name.last}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.location.state + "," + user.location.country}</td>
              </tr>

            )
          })}
        </tbody>
      </table>


    </div>
  );
}

export default App;
