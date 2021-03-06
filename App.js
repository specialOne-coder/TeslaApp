import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './Components/CarItem/';
import CarsList from './Components/CarList/'
import Header from './Components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarsList/>
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
