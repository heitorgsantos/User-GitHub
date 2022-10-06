import {cnpj} from '../mocks/cnpj';
import {instance, searchApi} from './baseURL';

export const fetchUser = async () => {
  const requestUser = await instance.get('/heitorgsantos').then(resp => {
    return resp.data;
  });
  return requestUser;
};

export const fetchRepositories = async () => {
  const resquestRepositories = await instance
    .get('/heitorgsantos/repos')
    .then(resp => {
      // console.log(resp.data, 'LOGGGG');
      return resp.data;
    });

  return resquestRepositories;
};

export const returnCNPJ = async cnpj => {
  const requestApi = await searchApi.get(`cnpj/${cnpj}`).then(resp => {
    console.log(resp.data, 'HELOOO');
    return resp.data;
  });
  // console.log(requestApi.data, 'AQUI');
  return requestApi;
};
