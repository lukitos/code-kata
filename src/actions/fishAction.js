import axios from 'axios';
import config from '../config';

const API_URL = config.API_URL;

export const getFish = () => {
  return ({
    type: 'FISH',
    payload: axios.get(`${API_URL}/catfish`)
  });
}
