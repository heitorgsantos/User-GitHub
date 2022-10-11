import {useRoute} from '@react-navigation/native';
import {Box, Heading, Text} from 'native-base';
import {instance} from '../../service/baseURL';
import React, { useEffect } from 'react';

function Repositorio() {
  const route = useRoute();
  const repositorie = route.params;

  const fetchRepositorie = async () => {
    const request = await instance
      .get(`repos/heitorgsantos/${name}`)
      .then(resp => console.log(resp.data));
    return request;
  };
const {name} = fetchRepositorie()  
console.log(name);


  useEffect(() => {
    fetchRepositorie()
  }, [])
  return <Box>
    <Heading fontSize={18}>Repositorio: {repositorie}</Heading>
  </Box>
}

export default Repositorio;
