import React, {useState} from 'react';
import {
  VStack,
  Input,
  FormControl,
  Link,
  Center,
  Box,
  Heading,
  Button,
  Text,
  HStack,
} from 'native-base';
import {validaEmail, validaSenha} from '../../validates/validationInput';


function InputData({navigation}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Center w="100%">
      <Box safeArea p="2" py="12" w="80%" minW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Bem-Vindo
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Faça Login para continuar!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input value={user} type="text" onChangeText={setUser} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              value={password}
              onChangeText={setPassword}
            />
            {console.log(user)}
            {console.log(password)}
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1">
              Esqueceu a senha?
            </Link>
          </FormControl>
          <Button
            mt="2"
            colorScheme="blueGray"
            backgroundColor={'#02A2ED'}
            onPress={() => {
              !validaEmail(user) && !validaSenha(password)
                ? navigation.navigate('Home')
                : console.log('Error aqui');
            }}>
            Entrar
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              Eu sou um novo usuário.{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              href="#">
              Cadastre-se
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}

export default InputData;
