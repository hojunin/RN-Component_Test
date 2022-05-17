import {Text, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const SnackBar = () => {
  const sharedValue = useSharedValue(0);
  const reanimatedStyle = useAnimatedStyle(() => {
    const bottom = interpolate(sharedValue.value, [0, 1], [-60, 30]);
    return {
      bottom,
    };
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      sharedValue.value = withRepeat(
        withTiming(1, {
          duration: 1000,
        }),
        -1,
        true,
      );
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View style={[styles.container, reanimatedStyle]}>
      <Text style={styles.font}>스낵바</Text>
      <Text style={styles.font}>UNDO</Text>
    </Animated.View>
  );
};

export default SnackBar;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: Dimensions.get('window').width - 40,
    borderRadius: 20,
    backgroundColor: 'grey',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: -60,
  },
  font: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
