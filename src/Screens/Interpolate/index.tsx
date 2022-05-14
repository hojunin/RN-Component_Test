import React from 'react';
import {StyleSheet} from 'react-native';
import Page from './Page';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
const WORDS = ['나는', '재택근무를', '원한다', '아니면', '퇴근도 좋다'];

const Interpolate = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      pagingEnabled
      scrollEventThrottle={16}
      horizontal
      style={styles.container}>
      {WORDS.map((title, index) => {
        return (
          <Page
            key={index.toString()}
            title={title}
            translateX={translateX}
            index={index}
          />
        );
      })}
    </Animated.ScrollView>
  );
};
export default Interpolate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
