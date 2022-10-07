import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  ScrollView,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {returnCNPJ} from '../../service/request';

function Teste({navigation}) {
  const [cnpj, setCnpj] = useState({});
  const [inputCnpj, setInputCnpj] = useState();
  const [update, setUpdate] = useState(false);
  const [disabledBtn, setDisableBtn] = useState(true);

  // 45.997.418/0001-53
  // 47960950000121
  /**Função busca cnpj e retorna todos os dados */
  const loadingApi = async () => {
    try {
      const dataCnpj = await returnCNPJ(inputCnpj).then(resp => resp);
      setDisableBtn(true);
      setCnpj(dataCnpj);
      setUpdate(true);
      setDisableBtn(false);
      return dataCnpj;
    } catch (error) {
      if (error) {
        return {message: 'CNPJ não'};
      }
    }
  };

  /**Função desativa botao de ver resultados e limpa o estado da aplicação */

  function newSearch() {
    setInputCnpj('');
    setDisableBtn(true);
  }

  useEffect(() => {}, [update]);

  return (
    <ScrollView backgroundColor={'amber.50'}  >
      <Center w='100%' h={'100%'} alignItems="center" >
        <Center  pt={2}>
          <Heading size={12} w="100%" alignSelf={'center'}>
            Faça sua consulta aqui!
          </Heading>
        </Center>
        {/* {'atualizado_em' in cnpj === true ? (
          <RenderItem data={cnpj} />
        ) : (
          <Text>Insira o CNPJ no campo abaixo!</Text>
        )} */}
        <Input
          my={3}
          value={inputCnpj}
          type="text"
          onChangeText={setInputCnpj}
          w="92%"
          variant="outline"
        />

        <Box w={'100%'}>
          <Text pl={2} py={3}>
            Você pode consultar apenas 3 vezez por minuto
          </Text>
          <HStack space={3} justifyContent="center">
            <Button w={'30%'} onPressIn={() => loadingApi()}>
              Enviar
            </Button>
            <Button
              w={'30%'}
              disabled={disabledBtn}
              backgroundColor={disabledBtn === true ? '#ccc' : '#000'}
              onPress={() => navigation.navigate('Resposta', cnpj)}>
              Ver Resultados
            </Button>
            <Button onPress={() => newSearch()}>Nova Busca</Button>
          </HStack>
        </Box>
      </Center>
    </ScrollView>
  );
}

export default Teste;
