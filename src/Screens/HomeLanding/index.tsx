import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Lottie from '../../Components/Lottie';
import Bookmark from '../../Components/Lottie/Bookmark';
import FloatingButton from '../../Components/Lottie/FloatingButton';

const HomeLanding = () => {
  const [rerender, setRerender] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setRerender(!rerender)}>
          <Lottie flag={rerender} />
        </TouchableOpacity>
        <Bookmark />
      </View>
      <FloatingButton />
    </>
  );
};

export default HomeLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {},
});
