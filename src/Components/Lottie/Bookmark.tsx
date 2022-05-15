import React, {useEffect, useRef, useState} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import BookmarkIcon from '../../Assets/bookmark.json';
import {Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Bookmark = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const [bookmarked, setBookmarked] = useState(false);

  const playAnimation = () => {
    Animated.timing(progress, {
      toValue: 1,
      useNativeDriver: true,
      duration: 700,
    }).start();
  };

  const rollBack = () => {
    Animated.timing(progress, {toValue: 0, useNativeDriver: true}).reset();
  };

  useEffect(() => {
    if (bookmarked) {
      playAnimation();
      return;
    }
    rollBack();
  }, [bookmarked]);

  return (
    <TouchableOpacity onPress={() => setBookmarked(!bookmarked)}>
      <AnimatedLottieView source={BookmarkIcon} autoSize progress={progress} />
    </TouchableOpacity>
  );
};

export default Bookmark;
