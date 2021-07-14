/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import Flat from './flat';

const FlatList = ({ flats }) => {
  return (
    <div>
    {console.log(flats)}
      {flats.map((flat) => {
          return (
            <Flat
            name={flat.name}
            imageURL={flat.imageUrl}
            price={flat.price}
            priceCur={flat.priceCurrency}
            />
          );
      })}
    </div>
  );
};

export default FlatList;
