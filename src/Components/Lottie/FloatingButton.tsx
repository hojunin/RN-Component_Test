import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import ArrowIcon from '../../Assets/arrow_up.json';

const FloatingButton = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <LottieView source={ArrowIcon} autoPlay autoSize />
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#e1ff',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
