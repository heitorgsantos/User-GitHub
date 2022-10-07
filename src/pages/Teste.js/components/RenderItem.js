import { useRoute } from '@react-navigation/native';
import {Box, Text, VStack} from 'native-base';
import React from 'react';

function RenderItem({route}) {


  const {atualizado_em, razao_social, estabelecimento} = route.params

  const {cnpj, situacao_cadastral, logradouro, numero, bairro, cep} =
    estabelecimento;
  return (
    <Box pl={2}>
      <VStack space={3}>
        <Text>Atualizado: {atualizado_em}</Text>
        <Text>Razão Social: {razao_social}</Text>
        <Text>CNPJ: {cnpj}</Text>
        <Text>Situação: {situacao_cadastral}</Text>
        <Text>Rua: {logradouro}</Text>
        <Text>Número: {numero}</Text>
        <Text>Bairro: {bairro}</Text>
        <Text>CEP: {cep}</Text>
      </VStack>
    </Box>
  );
}

export default RenderItem;
