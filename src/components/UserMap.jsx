
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const UserMap = ({ user }) => {

  const { location } = user
  const position = [location.coordinates.latitude, location.coordinates.longitude];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup  >
          {user.location.state}, <br /> {user.location.country}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default UserMap