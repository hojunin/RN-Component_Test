import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './src/Router';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Router />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
