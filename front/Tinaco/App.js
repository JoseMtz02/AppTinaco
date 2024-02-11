import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import EditProfileScreen from './screens/EditProfileScreen';
import EstadoTinaco from './screens/EstadoTinaco';
import DispWF from './screens/DispWF';
import AboutUsScreen from './screens/AboutUsScreen';
import RegistroUsuario from './screens/RegistroUsuario';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="EstadoTinaco" component={EstadoTinaco} />
        <Stack.Screen name="DispWF" component={DispWF} />
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
        <Stack.Screen name="RegistroUsuario" component={RegistroUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
