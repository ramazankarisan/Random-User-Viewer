import { useDispatch, useSelector } from 'react-redux';

import { changeSearchInput } from '../redux/userActions';
import UserTableBody from './UserTableBody';

const columnHeadings = ["Name", "Gender", "Email", "Location"];

const UserTable = () => {
  // redux variables
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { users, searchText, pagination } = state;

  return (
    <div className="App">

      <table>
        {/* table headings, at the location part with the search input */}
        <thead>
          <tr>
            {columnHeadings.map((heading, ind) => {
              if (heading === "Location") {
                return null
              }
              return (
                <th key={ind}>{heading}</th>
              )

            })}
            <th>Location <input onChange={(e) => dispatch(changeSearchInput(e.target.value))} value={searchText} type="search" name="searchCountry" id="searchCountry" placeholder="search by country" /></th>
          </tr>
        </thead>

        {/* table body parts, rendering according to the results per page and with pagination it increases or decreases */}
        <tbody>
          {users.slice(0 + ((pagination.currentPage - 1) * pagination.resultPerPage), pagination.resultPerPage + ((pagination.currentPage - 1) * pagination.resultPerPage)).map((user, ind) => {
            return (
              <UserTableBody key={ind} user={user} />

            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable