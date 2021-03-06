/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';


const Flat = ({ name, imageURL, price, priceCur, lat, lng, setCenter }) => {
    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${imageURL}')`
    };

    const handleClick = () => {
        setCenter(lat, lng);
    };

    return (
    <div className="card" style={style} onClick={handleClick}>
        <div className="card-category">
            {`${price} ${priceCur}`}
        </div>
        <div className="card-description">
            <h2>{name}</h2>
        </div>
        <a className="card-link" href="#"></a>
    </div>
  );
};

export default Flat;
