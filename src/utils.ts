import { PostRequest } from './interfaces';
import { API_BASE_URL } from './constants/api';

export const sleep = (time: number = 0) => {
  return new Promise((p) => setTimeout(p, time));
};

const makeRequest = async (url: string, METHOD: string, body?: object) => {
  const options: PostRequest = {
    method: METHOD,
  };

  if (METHOD === 'POST' && body) {
    options.body = JSON.stringify(body);
  } else {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber !== 0) {
      throw 'Failed';
    }
  }

  const response = await window.fetch(`${API_BASE_URL}${url}`);

  if (response.ok) {
    return response.json();
  }

  if (response.status === 500) {
    throw response;
  }
};

export const get = async (url: string, delay: number = 0) => {
  if (delay) {
    await sleep(delay);
  }

  return makeRequest(url, 'GET');
};

export const post = async (url: string, body: object, delay: number = 0) => {
  if (delay) {
    await sleep(delay);
  }
  return makeRequest(url, 'POST', body);
};
