/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


const Map = ({ flats, center }) => {
  return (
    <div className="map-container">
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        center={center}
        defaultZoom={14}
        >
        {flats.map((flat) => {
            return (
                <Marker lat={flat.lat} lng={flat.lng} key={flat.name} selected={flat.lat === center.lat && flat.lng === center.lng} />
            );
        })}
        </GoogleMapReact>
    </div>
  );
};

export default Map;
