import {useRoute} from '@react-navigation/native';
import {Box, Button} from 'native-base';
import React, {useEffect, useState} from 'react';
import instance from '../../service/baseURL';

function ButtonEvent({name, navigation}) {
    const [repo, setRepo] = useState([]);
  // const route = useRoute()
  console.log(name, 'PARAMETRO');

  const loading = async () => {
    const request = await instance.get(`/heitorgsantos/${name}`);
    setRepo(request);
  };
  useEffect(() => {
    loading();
  }, []);
  return (
    <Box alignItems={'center'}>
      <Button
        size={'xs'}
        p={2}
        accessibility={true}
        variant="outline"
        onPress={() => navigation.navigate('Repositorio')}>
        Ver Repositório
      </Button>
    </Box>
  );
}

export default ButtonEvent;
