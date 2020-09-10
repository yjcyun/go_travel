import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { FaMapPin } from 'react-icons/fa';

const TourMap = ({ locations, startLocation }) => {
  const [viewport, setViewport] = useState({
    latitude: startLocation.coordinates[1],
    longitude: startLocation.coordinates[0],
    zoom: 4
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const listener = event => {
      if (event.key === 'Escape') setSelectedLocation(null);
    };
    window.addEventListener('keydown', listener);

    return () => window.removeEventListener('keydown', listener);
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      width='100%'
      height='100%'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle='mapbox://styles/yjcyun/ckeuix8k20rxj19o700geytq4'
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {locations.map(loc => (
        <Marker
          key={loc._id}
          latitude={loc.coordinates[1]}
          longitude={loc.coordinates[0]}
        >
          <FaMapPin
            style={{ color: 'var(--accent-clr)' }}
            onMouseEnter={() => {
              setSelectedLocation(loc)
            }}
          />
        </Marker>
      ))}
      {selectedLocation
        ?
        <Popup
          latitude={selectedLocation.coordinates[1]}
          longitude={selectedLocation.coordinates[0]}
          onClose={() => setSelectedLocation(null)}
        >
          <h4>Day {selectedLocation.day}</h4>
          <small>{selectedLocation.description}</small>
        </Popup>
        : null}
    </ReactMapGL >
  )
}

export default TourMap