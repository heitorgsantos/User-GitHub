import {useRoute} from '@react-navigation/native';
import {Box, Text, VStack} from 'native-base';
import React from 'react';

function RenderItem({route}) {
  const  {
    cnpj,
    razao_social,
    nome_fantasia,
    descricao_situacao_cadastral,
    data_situacao_cadastral,
    descricao_tipo_logradouro,
    logradouro,
    numero,
    complemento,
    bairro,
    uf,
    municipio,
    cep,
  } = route.params;

  return (
    <Box pl={2}>
      <VStack space={3}>
        <Text textDecoration>CNPJ:{cnpj}</Text>
        <Text>Razão Social: {razao_social}</Text>
        <Text>Nome Fantasia: {nome_fantasia}</Text>
        <Text>
          Descrição situação cadastral: {descricao_situacao_cadastral}
        </Text>
        <Text>Data: {data_situacao_cadastral}</Text>
        <Text>Logradouro: {descricao_tipo_logradouro}</Text>
        <Text>Rua: {logradouro}</Text>
        <Text>Número: {numero}</Text>
        <Text>Complemento: {complemento}</Text>
        <Text>UF: {uf}</Text>
        <Text>Bairro: {bairro}</Text>
        <Text>Município: {municipio}</Text>
        <Text>CEP: {cep}</Text>
      </VStack>
    </Box>
  );
}

export default RenderItem;
