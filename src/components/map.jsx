/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


const Map = ({ flats }) => {
  return (
    <div className="map-container">
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{ lat: flats[0].lat, lng: flats[0].lng }}
        defaultZoom={13}
        >
        {flats.map((flat) => {
            return (
                <Marker lat={flat.lat} lng={flat.lng} key={flat.name} />
            );
        })}
        </GoogleMapReact>
    </div>
  );
};

export default Map;
