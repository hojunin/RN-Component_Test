import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface BottomSheetProps {
  title?: string;
  content: () => JSX.Element;
  onClose: () => void;
  onBackDropPress: () => void;
}

const BottomSheet = (props: BottomSheetProps) => {
  const {title, content, onClose, onBackDropPress} = props;
  return (
    <>
      <View style={styles.handle} />
      <View style={[styles.container]}>
        <View style={styles.header}>
          <Text>{title}</Text>
        </View>
      </View>
    </>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: 'absolute',
  },
  handle: {
    width: 50,
    height: 5,
    backgroundColor: '#e8e8e8',
    marginBottom: 10,
  },
  header: {
    height: 25,
  },
});
