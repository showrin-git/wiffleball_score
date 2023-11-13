import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListTeamsComponent from './components/ListTeams';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Replace this text with your actual app content */}
      <Text>Welcome to Your React Native App!</Text>

      {/* ListTeamsComponent renders the list of teams */}
      <ListTeamsComponent />

      {/* The StatusBar component */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
