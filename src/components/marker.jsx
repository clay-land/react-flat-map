import React from 'react';

const Marker = ({ selected }) => {
  return (
    <div className={`marker${selected ? " selected" : ""}`} />
  );
};

export default Marker;
