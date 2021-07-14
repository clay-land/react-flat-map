/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import Flat from './flat';

const FlatList = ({ flats }) => {
  return (
    <div className="flat-list">
      {flats.map((flat) => {
          return (
            <Flat
            name={flat.name}
            imageURL={flat.imageUrl}
            price={flat.price}
            priceCur={flat.priceCurrency}
            key={flat.name}
            />
          );
      })}
    </div>
  );
};

export default FlatList;
