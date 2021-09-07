import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  {SignInSide} from './login.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> QuickService</Text>
      <StatusBar style="auto" />
      <login>soy el index</login>
    </View>
  );
}


componentDidMount() {
  SignInSide();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
});
