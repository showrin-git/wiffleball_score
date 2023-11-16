import 'react-native-gesture-handler';
import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './pages/HomeScreen';
import StartScreen from './pages/StartScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, useTheme } from 'native-base';

const Stack = createStackNavigator();

export default class App extends Component{
  render() {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
            />
            <Stack.Screen
              name="StartScreen"
              component={StartScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>        
      </NativeBaseProvider>
    );
  }
}
