import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchInput } from '../redux/userActions';
import UserMap from './UserMap';
import UserTableBody from './UserTableBody';
const columnHeadings = ["Name", "Gender", "Email", "Location"];


const UserTable = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { users, searchText } = state;

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
            <th>Location <input onChange={(e) => dispatch(changeSearchInput(e.target.value))} value={searchText} type="search" name="searchCountry" id="searchCountry" placeholder="search by country" /></th>
          </tr>
        </thead>


        <tbody>
          {users?.map((user, ind) => {
            return (<>
              <UserTableBody key={ind} user={user} />
            </>
            )
          })}
        </tbody>
      </table>


    </div>
  )
}

export default UserTable