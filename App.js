import 'react-native-gesture-handler';
import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './pages/HomeScreen';
import StartScreen from './pages/StartScreen';
import GamesScreen from './pages/GamesScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider} from 'native-base';
import { Amplify } from 'aws-amplify';

import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

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
            <Stack.Screen
              name="GamesScreen"
              component={GamesScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>        
      </NativeBaseProvider>

    );
  }
}
