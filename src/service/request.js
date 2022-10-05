import instance from './baseURL';
const fetchUser = async () => {
  const requestUser = await instance.get('/heitorgsantos').then(resp => {
    return resp.data;
  });
  return requestUser;
};

const fetchRepositories = async () => {
  const resquestRepositories = await instance
    .get('/heitorgsantos/repos')
    .then(resp => {
      // console.log(resp.data, 'LOGGGG');
      return resp.data;
    });

  return resquestRepositories;
};

module.exports = {fetchUser, fetchRepositories};
