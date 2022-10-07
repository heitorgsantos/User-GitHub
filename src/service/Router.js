import React from 'react';
import Home from '../pages/Home/Home';
import InputData from '../pages/Login/InputData';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Repositories from '../pages/Repositories/Repositories';
// import Repositorio from '../pages/Repositories/Repositorio';
import Teste from '../pages/Teste.js/Teste';
import RenderItem from '../pages/Teste.js/components/RenderItem';
import { background } from 'native-base/lib/typescript/theme/styled-system';

function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Teste" component={Teste} options={{title: null, headerShown:false}}/>
        <Stack.Screen name="Resposta" component={RenderItem} />
        <Stack.Screen
          name="Login"
          component={InputData}
          options={{title: null}}
        />
        <Stack.Screen name="Home" component={Home} options={{title: null}} />
        <Stack.Screen
          name="Repositories"
          component={Repositories}
          options={{title: null}}
        />
        {/* <Stack.Screen name="Repositorio" component={Repositorio} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
