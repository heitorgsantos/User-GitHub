import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Input,
  Text,
} from 'native-base';
import { ScrollView, StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';
import {returnCNPJ} from '../../service/request';

function Teste({navigation}) {
  const [cnpj, setCnpj] = useState({});
  const [inputCnpj, setInputCnpj] = useState();
  const [update, setUpdate] = useState(false);
  const [disabledBtn, setDisableBtn] = useState(true);

  // 45997418000153
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
    <ScrollView justifyContent='center' alignItems='center'  >
      <Center w={'100%'} h='100%' >
        <Container alignItems="center">
          <Heading size={12} w="100%" alignSelf={'center'}>
            Faça sua consulta aqui!
          </Heading>
          <Input
            my={3}
            value={inputCnpj}
            type="text"
            onChangeText={setInputCnpj}
            w="100%"
            variant="outline"
          />

          <Box w={'100%'}>
            <Text pl={2} py={3}>
              Você pode consultar apenas 3 vezez por minuto
            </Text>
            <HStack space={3} justifyContent="center" w={'100%'}>
              <Button w={'25%'} size={'sm'} onPressIn={() => loadingApi()}>
                Enviar
              </Button>
              <Button
              size={'sm'}
                w={'40%'}
                disabled={disabledBtn}
                backgroundColor={disabledBtn === true ? '#ccc' : '#000'}
                onPress={() => navigation.navigate('Resposta', cnpj)}>
                Ver Resultados
              </Button>
              <Button w={'25%'} size={'sm'} onPress={() => newSearch()}>Nova Busca</Button>
            </HStack>
          </Box>
        </Container>
      </Center>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor:'#000'
  }
})

export default Teste;
