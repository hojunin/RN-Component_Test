import React from 'react';
import LottieView from 'lottie-react-native';
import Car from '../../Assets/car.json';

const Lottie = () => <LottieView autoPlay source={Car} loop autoSize />;

export default Lottie;
