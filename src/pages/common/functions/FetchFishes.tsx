import {Fishes} from '../../encyclopedie/Types';

export const FetchFishes = () =>
  fetch('https://acnhapi.com/v1/fish', {method: 'GET'})
    .then((response: Response) => response.json())
    .then((responseJSON: Fishes) => Object.values(responseJSON));
