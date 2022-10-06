import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/users',
});

const searchApi = axios.create({
  baseURL: 'https://publica.cnpj.ws/',
});

module.exports = {
  instance,
  searchApi,
};
