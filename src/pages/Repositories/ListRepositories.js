import React from 'react';
import {Box, HStack, VStack, Text, Spacer, Button} from 'native-base';
function ListRepositories({id,name, description, language, navigation}) {

  // function handleClick(e) {
  //   e.preventDefault()
  //   console.log(e);
  // }

  return (
    <Box
    key={id}
      borderBottomWidth="1"
      _dark={{
        borderColor: 'muted.50',
      }}
      borderColor="muted.800"
      pl={['0', '4']}
      pr={['0', '5']}
      py="2">
      <HStack>
        <VStack p={1} w={'60%'}>
          <Text
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            bold>
            {name}
          </Text>
          <Text
            fontSize={13}
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
            {description}
          </Text>
        </VStack>
        <Spacer />
        <Box>
          <Text
            fontSize="xs"
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            s>
            {language}
          </Text>
          <Button onPress={() => navigation.navigate('Repositorio', name) } size={'sm'}>Repositório</Button>
        </Box>
      </HStack>
    </Box>
  );
}

export default ListRepositories;
