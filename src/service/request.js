import {cnpj} from '../mocks/cnpj';
import {instance, searchApi} from './baseURL';
/**Busca perfil github */
const fetchUser = async () => {
  const requestUser = await instance.get('users/heitorgsantos').then(resp => {
    return resp.data;
  });
  return requestUser;
};

/**Busca repositório github */
const fetchRepositories = async () => {
  try {
    const resquestRepositories = await instance
      .get('users/heitorgsantos/repos')
      .then(resp => {
        return resp.data;
      });
    return resquestRepositories;
  } catch (error) {
    console.log(error, 'error aqui');
  }
};

/**Busca dados de cnpj em api pública */
const returnCNPJ = async cnpj => {
  const requestApi = await searchApi.get(`/api/cnpj/v1/${cnpj}`).then(resp => {
    // console.log(resp.data, 'HELOOO');
    return resp.data;
  });
  return requestApi;
};

module.exports = {
  fetchUser,
  fetchRepositories,
  returnCNPJ,
};
