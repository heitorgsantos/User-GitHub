import {cnpj} from '../mocks/cnpj';
import {instance, searchApi} from './baseURL';
/**Busca perfil github */
export const fetchUser = async () => {
  const requestUser = await instance.get('/heitorgsantos').then(resp => {
    return resp.data;
  });
  return requestUser;
};

/**Busca repositório github */
export const fetchRepositories = async () => {
  const resquestRepositories = await instance
    .get('/heitorgsantos/repos')
    .then(resp => {
      return resp.data;
    });

  return resquestRepositories;
};

/**Busca dados de cnpj em api pública */
export const returnCNPJ = async cnpj => {
  const requestApi = await searchApi.get(`cnpj/${cnpj}`).then(resp => {
    console.log(resp.data, 'HELOOO');
    return resp.data;
  });
  return requestApi;
};
