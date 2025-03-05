'use client'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect, useState } from 'react'

// Fix Leaflet icon issues
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/assets/marker-icon-2x.png',
  iconUrl: '/assets/marker-icon.png',
  shadowUrl: '/assets/marker-shadow.png',
})

// Sample disaster data
const disasters = [
  { id: 1, position: [37.7749, -122.4194], name: 'San Francisco Earthquake', type: 'Earthquake' },
  { id: 2, position: [34.0522, -118.2437], name: 'LA Wildfire', type: 'Fire' },
  { id: 3, position: [40.7128, -74.0060], name: 'NYC Flood', type: 'Flood' },
]

interface DisasterMapProps {
  height: string
  width: string
}

// Map controller component for updates
function MapController() {
  const map = useMap()
  
  useEffect(() => {
    map.invalidateSize()
  }, [map])
  
  return null
}

const DisasterMap = ({ height, width }: DisasterMapProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <MapContainer
      center={[39.8283, -98.5795]} // Center of USA
      zoom={4}
      style={{ height, width }}
      scrollWheelZoom={true}
    >
      <MapController />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {disasters.map((disaster) => (
        <Marker 
          key={disaster.id} 
          position={disaster.position as [number, number]}
        >
          <Popup>
            <div>
              <h3>{disaster.name}</h3>
              <p>Type: {disaster.type}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default DisasterMap