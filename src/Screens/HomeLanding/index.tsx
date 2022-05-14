import {View, StyleSheet} from 'react-native';
import React from 'react';
import Lottie from '../../Components/Lottie';

const HomeLanding = () => {
  return (
    <View style={styles.container}>
      <Lottie />
    </View>
  );
};

export default HomeLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
