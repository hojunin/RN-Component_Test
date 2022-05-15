import {Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

const SnackBar = () => {
  const sharedValue = useSharedValue(0);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: sharedValue.value * 100}],
    };
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      sharedValue.value = withRepeat(withSpring(1), -1, true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View style={[styles.container, reanimatedStyle]}>
      <Text style={styles.font}>스낵바</Text>
    </Animated.View>
  );
};

export default SnackBar;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'grey',
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  font: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
