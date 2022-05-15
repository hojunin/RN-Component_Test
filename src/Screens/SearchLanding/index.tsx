import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../Components/Button';
import SnackBar from '../../Components/SnackBar';

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
      <View style={styles.divider} />
      <Button
        label="보간 사용법"
        onPress={() => navigation.navigate('Interpolate')}
      />
      <View style={styles.divider} />
      <Button
        label="색깔 변환하기"
        onPress={() => navigation.navigate('InterpolateColor')}
      />
      <View style={styles.divider} />
      <Button
        label="핀치 핸들링"
        onPress={() => navigation.navigate('PinchGestureHandler')}
      />
      <View style={styles.divider} />
      <Button
        label="싱글탭, 더블탭"
        onPress={() => navigation.navigate('TabHandler')}
      />
      <View style={styles.divider} />
      <Button
        label="레이아웃 애니메이션"
        onPress={() => navigation.navigate('LayoutAnimation')}
      />
      {/* <SnackBar /> */}
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
