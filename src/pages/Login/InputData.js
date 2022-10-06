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
// import Container from '../../components/Container';

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
          Faça Login para continuaar!
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
              Forget Password?
            </Link>
          </FormControl>
          <Button
            mt="2"
            colorScheme="blueGray"
            onPress={() => {
              !validaEmail(user) && !validaSenha(password)
                ? navigation.navigate('Teste')
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
              I'm a new user.{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              href="#">
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}

export default InputData;
