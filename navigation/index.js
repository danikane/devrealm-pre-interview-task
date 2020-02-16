import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';

import Home from '../screens/Home';
import Initial from '../screens/Initial';
import Login from '../screens/Login';
import NewPIN from '../screens/NewPIN';

// App Screens
const Stack = createStackNavigator();

export default class RootNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Initial" component={Initial} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="NewPIN" component={NewPIN} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
