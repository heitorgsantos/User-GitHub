import React from 'react';
import {Box, NativeBaseProvider, extendTheme} from 'native-base';
import Router from './src/service/Router';

function App({navigation}) {
  const theme = extendTheme({
    colors: {
      primary: {},
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1}>
        <Router />
      </Box>
    </NativeBaseProvider>
  );
}
export default App;
