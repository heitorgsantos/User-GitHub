import React from 'react';
import Home from '../pages/Home/Home';
import InputData from '../pages/Login/InputData';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Repositories from '../pages/Repositories/Repositories';
import Repositorio from '../pages/Repositories/Repositorio';

function Router({navigation}) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={InputData}
          navigate={navigation}
          options={{title: null}}
        />
        <Stack.Screen name="Home" component={Home} options={{title: null}} />
        <Stack.Screen
          name="Repositories"
          component={Repositories}
          navigate={navigation}
          options={{title: null}}
        />
        <Stack.Screen name='Repositorio' component={Repositorio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
