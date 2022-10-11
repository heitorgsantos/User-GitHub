import * as  axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/',
});

const searchApi = axios.create({
  baseURL: 'https://brasilapi.com.br/',
});
// https://brasilapi.com.br/api/cnpj/v1/{cnpj}
module.exports = {
  instance,
  searchApi,
};
