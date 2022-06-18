import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {PagerView} from 'react-native-pager-view';

const TabViewScreen = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <Text>First page</Text>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
};

export default TabViewScreen;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
