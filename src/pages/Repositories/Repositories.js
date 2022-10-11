import {Box, FlatList, Heading, Center} from 'native-base';
import React, {useEffect, useState} from 'react';
import { fetchRepositories} from '../../service/request';
import ListRepositories from './ListRepositories';

function Repositories({navigation}) {
  const [repositorio, setRepositories] = useState([]);

  const loading = async () => {
    const response = await fetchRepositories();
    setRepositories(response);
  };

  useEffect(() => {
    loading();
  }, []);
  return (
    <Center w={'100%'}>
      <Box safeArea py={8} pr={2} w="98%" maxW="430">
        <Heading fontSize="xl" pl="1" pb="3">
          Repositórios
        </Heading>
        <FlatList
          data={repositorio}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ListRepositories {...item} navigation={navigation} />
          )}
        />
      </Box>
    </Center>
  );
}

export default Repositories;
