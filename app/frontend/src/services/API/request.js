import axios from 'axios';
import { defaultStatusList } from '../../data/cache';

export const getStatus = async () => {
  try {
    const url = 'https://ebytr-tasks.herokuapp.com/status';
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error;
    return defaultStatusList;
  }
};

export const getTasks = async (token) => {
  try {
    const url = 'https://ebytr-tasks.herokuapp.com/tasks';
    const response = await axios.get(url, {
      headers: {
        'Authorization': token
      }
    });
    return response;
  } catch (error) {
    console.error;
  }
};

export const addTask = async (task, token) => {
  try {
    const url = 'https://ebytr-tasks.herokuapp.com/tasks';
    const response = await axios.post(url,task, {
      headers: {
        'Authorization': token
      }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const userLogin = async (user) => {
  try {
    const url = 'https://ebytr-tasks.herokuapp.com/users/login';
    const response = await axios.post(url, user);
    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

export const userRegister = async (user) => {
  try {
    const url = 'https://ebytr-tasks.herokuapp.com/users';
    const response = await axios.post(url, user);
    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

