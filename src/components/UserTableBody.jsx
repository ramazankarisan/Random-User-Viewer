import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserMap from './UserMap';

const UserTableBody = ({ user }) => {
  const [showMap, setShowMap] = useState(false)
  const handleOpen = () => setShowMap(true);
  const handleClose = () => setShowMap(false)


  return (
    <>
      <tr>
        <td>{user.name.first + " " + user.name.last}</td>
        <td>{user.gender}</td>
        <td>{user.email}</td>
        <td>{user.location.state + "," + user.location.country} <input onClick={() => setShowMap(!showMap)} type="button" value="Map" /> </td>
      </tr>
      {/* {showMap && <div><UserMap /></div>} */}
      <Modal
        open={showMap}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="map-container" >
          <UserMap user={user} />
        </Box>
      </Modal>
    </>
  )
}

export default UserTableBody