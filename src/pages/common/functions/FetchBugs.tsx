import {Bugs} from '../../encyclopedie/Types';

export const FetchBugs = () =>
  fetch('https://acnhapi.com/v1/bugs', {method: 'GET'})
    .then((response: Response) => response.json())
    .then((responseJSON: Bugs) => Object.values(responseJSON));
