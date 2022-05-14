import {View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Lottie from '../../Components/Lottie';

const HomeLanding = () => {
  const [rerender, setRerender] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setRerender(!rerender)}>
        <Lottie flag={rerender} />
      </TouchableOpacity>
    </View>
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
