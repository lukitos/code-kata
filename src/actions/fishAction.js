import axios from 'axios';
import config from '../config';

const API_URL = config.API_URL;

function buildLeaderboard(data) {
  if(data.hasOwnProperty('isLoading')){
    console.log('Is loading - do nothing');
    return null;
  } else {
    console.log('in buildLeaderboard >>> data', data);
    let newFish = data.map(fish => {
      let weight = { weight: Math.round(fish.length * fish.girth * fish.girth / 800) };
      let updatedFish = {...fish, ...weight};
      return updatedFish;
    });
    let sortedFish = newFish.sort((a,b) => b.weight - a.weight);
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
