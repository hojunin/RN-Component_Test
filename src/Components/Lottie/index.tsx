import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
// import Car from '../../Assets/car.json';
import {Animated} from 'react-native';

const Lottie = ({flag}: {flag: boolean}) => {
  const progress = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(progress, {
      useNativeDriver: true,
      toValue: 0.5,
      duration: 500,
    }).start();
  };

  const rollback = () => {
    Animated.timing(progress, {
      useNativeDriver: true,
      toValue: 0,
      duration: 500,
    }).start();
  };

  useEffect(() => {
    if (flag) {
      startAnimation();
      return;
    }
    rollback();
  }, [flag]);

  return (
    <LottieView
      source={require('../../Assets/darkmode.json')}
      autoPlay
      autoSize
      progress={progress}
      style={{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};

export default Lottie;
