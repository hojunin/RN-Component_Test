import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button = (props: ButtonProps) => {
  const {label, onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.font}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0037ff',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  font: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
});
