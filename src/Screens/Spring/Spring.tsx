import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';

const Spring = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const handleRotate = (progressValue: Animated.SharedValue<number>) => {
    'worklet';

    return `${progressValue.value * 2 * Math.PI}rad`;
  };

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{scale: scale.value}, {rotate: handleRotate(progress)}],
    };
  });

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(2), -1, true);
  }, [progress, scale]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, reanimatedStyle]} />
    </View>
  );
};

export default Spring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});
