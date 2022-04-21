import React, { useState } from 'react'

import UserMap from './UserMap';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const UserTableBody = ({ user }) => {
  // for modal
  const [showMap, setShowMap] = useState(false)
  const handleClose = () => setShowMap(false)


  return (
    <>
      {/* table row with table data and the last one is location with map input button */}
      <tr>
        <td>{user.name.first + " " + user.name.last}</td>
        <td>{user.gender}</td>
        <td>{user.email}</td>
        <td>{user.location.state + "," + user.location.country} <input onClick={() => setShowMap(!showMap)} type="button" value="Map" /> </td>
      </tr>

      {/* modal */}
      <Modal
        open={showMap}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="map-container" >
          {/* leaflet map component */}
          <UserMap user={user} />
        </Box>
      </Modal>
    </>
  )
}

export default UserTableBody