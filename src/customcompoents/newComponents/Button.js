import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import React from 'react';
import { COLORS } from '../../services/colors';

const { width } = Dimensions.get('window'); // Get device width

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.press} style={{ ...styles.btn, ...props.style }} disabled={props.disable}>
      <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Roboto-Regular', ...props.textStyle, fontWeight:'500' }}>
      {props.loading ? <ActivityIndicator size={'small'} color={'white'} /> : props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: width * 0.9, // 90% of the device's width
    height: 50,
    backgroundColor: COLORS.greenText,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
