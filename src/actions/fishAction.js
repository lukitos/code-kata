import axios from 'axios';
import config from '../config';

const API_URL = config.API_URL;

function compare(a, b) {
  let a_weight = a.length * a.girth * a.girth / 800;
  let b_weight = b.length * b.girth * b.girth / 800;
  if (a_weight < b_weight)
    return 1;
  if (a_weight > b_weight)
    return -1;
  return 0;
}

function buildLeaderboard(data) {
  if(data.hasOwnProperty('isLoading')){
    console.log('Is loading - do nothing');
    return null;
  } else {
    console.log('in buildLeaderboard >>> data', data);
    let newFish = data.map(fish => {
      let weight = { weight: fish.length * fish.girth * fish.girth / 800 };
      let updatedFish = {...fish, ...weight};
      return updatedFish;
    });
    let sortedFish = newFish.sort(compare);
    let result = sortedFish.slice(0, 5);
    console.log('in buildLeaderboard >>> result', result);
    return result;
  }
}

export const getFish = () => {
  return ({
    type: 'FISH',
    payload: axios
      .get(`${API_URL}/catfish`)
      .then(result => buildLeaderboard(result.data))
  });
}
