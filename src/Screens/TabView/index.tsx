import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {PagerView} from 'react-native-pager-view';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';

const TabViewScreen = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <First key="1" />
      </View>
      <View key="2">
        <Second />
      </View>
      <View key="3">
        <Third />
      </View>
      <View key="4">
        <Fourth />
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
