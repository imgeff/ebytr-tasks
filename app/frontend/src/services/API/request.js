import axios from 'axios';
import { defaultStatusList } from '../../data/cache';

export const getStatus = async () => {
  try {
    const response = await axios.get('https://ebytr-tasks.herokuapp.com/status');
    return response;
  } catch (error) {
    console.error;
    return defaultStatusList;
  }
};
