import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../Components/Button';

const SearchLanding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        label="애니메이션 기초"
        onPress={() => navigation.navigate('Spring')}
      />
      <View style={styles.divider} />
      <Button
        label="제스쳐 핸들링"
        onPress={() => navigation.navigate('GestureHandler')}
      />
    </View>
  );
};

export default SearchLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 10,
  },
});
