import {Box, Button, Heading, Input, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {returnCNPJ} from '../../service/request';

function Teste() {
  const [cnpj, setCnpj] = useState();
  const [inputCnpj, setInputCnpj] = useState();

  // 45.997.418/0001-53
  const loadingApi = async () => {
    try {
      const dataCnpj = await returnCNPJ(inputCnpj).then(resp => resp);
      console.log(dataCnpj);
      setCnpj(dataCnpj);
      return dataCnpj;
    } catch (error) {
      console.log(error, 'aqui');
    }
  };
  console.log(cnpj, 'SEGUNDO LOG');

  return (
    <Box justifyContent={'center'}>
      <Heading size={12} w="100%" alignSelf={'center'}>
        Faça sua consulta aqui!
      </Heading>
      <Text> Capital Social: {cnpj.capital_social}</Text>
      <Input value={inputCnpj} type="text" onChangeText={setInputCnpj} />
      <Button onPress={() => loadingApi()}>Enviar</Button>
    </Box>
  );
}

export default Teste;
