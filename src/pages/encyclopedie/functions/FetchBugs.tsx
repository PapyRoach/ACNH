import React from 'react';
import {Bug, Bugs} from '../Types';

export const FetchBugs = (
  setBugList: React.Dispatch<React.SetStateAction<Bug[]>>,
) => {
  fetch('https://acnhapi.com/v1/bugs', {
    method: 'GET',
  })
    .then((response: Response) => response.json())
    .then((responseJSON: Bugs) => {
      setBugList(Object.values(responseJSON));
      console.log('Insectes');
    });
};
