import {Avatar, Center, Text, Box, VStack, Button, Spacer} from 'native-base';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Icon  from 'react-native-vector-icons';
import {fetchUser} from '../../service/request';

function Home({navigation}) {
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [numberRepo, setNumberRepo] = useState();
  const [stack, setStack] = useState('');

  useEffect(() => {
    const loading = async () => {
      // console.log('Nao enontra');
      const response = await fetchUser();
      const {avatar_url, name, public_repos, bio} = await response;
      setUserName(name);
      setAvatar(avatar_url);
      setNumberRepo(public_repos);
      setStack(bio);
      console.log(response, 'Aqui');
    };
    loading();
  }, []);
  return (
    <Center w={'100%'}>
      <Box
        safeArea
        p="2"
        py="8"
        w="95%"
        maxW="280"
        h={'95%'}
        justifyContent={'center'}>
        <VStack space={3} mt="1" alignItems={'center'}>
          <Avatar bg="green.100" source={{uri: avatar}} size={'xl'}></Avatar>
          <Text fontSize={'lg'}>{userName}</Text>
          <Text>{`Stacks: ${stack}`}</Text>
          <Spacer />
        </VStack>
        <Text>Repositório: {numberRepo}</Text>
        <Button
          backgroundColor={'blue.600'}
          p={2}
          borderRadius={4}
          onPress={() =>
            navigation.navigate('Repositories')
          }>{`Ver Repositórios`}</Button>
      </Box>
    </Center>
  );
}

export default Home;
