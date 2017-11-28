import axios from 'axios';
import config from '../config';

const API_URL = config.API_URL;

function buildLeaderboard(data, species) {
  if(data.hasOwnProperty('isLoading')){
    console.log('Is loading - do nothing');
    return null;
  } else {
    console.log('in buildLeaderboard >>> data', data);
    console.log('in buildLeaderboard >>> species', species);
    let result = data
      .filter(fish => fish.species === species)
      .map(fish => {
        let weight = { weight: Math.round(fish.length * fish.girth * fish.girth / 800) };
        let updatedFish = {...fish, ...weight};
        return updatedFish;
      })
      .sort((a,b) => b.weight - a.weight)
      .slice(0, 5);
    console.log('in buildLeaderboard >>> result', result);
    return result;
  }
}

export const getFish = (species) => {
  return ({
    type: 'SPECIES',
    payload: axios
      .get(`${API_URL}/catfish`)
      .then(result => buildLeaderboard(result.data, species))
  });
}
