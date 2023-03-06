import React from 'react';
import {Fish, Fishes} from '../Types';

export const FetchFishes = (
  setFishList: React.Dispatch<React.SetStateAction<Fish[]>>,
) => {
  fetch('https://acnhapi.com/v1/fish', {
    method: 'GET',
  })
    .then((response: Response) => response.json())
    .then((responseJSON: Fishes) => {
      setFishList(Object.values(responseJSON));
      console.log('Poissons');
    });
};
