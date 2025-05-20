import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ActivityIndicator, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../../../services/colors';

const { width } = Dimensions.get('window'); // Get device width

const LandingPageButton = (props) => {
  return (
    <TouchableOpacity onPress={props.press} style={{ ...styles.btn, ...props.style }}>
      {props.img && (
      <Image source={props.img} resizeMode='contain' style={{width:25, height:25, marginRight:10}} />
      )}
      <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Roboto-Regular', ...props.textStyle }}>
      {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default LandingPageButton;

const styles = StyleSheet.create({
  btn: {
    width: width * 0.9, // 90% of the device's width
    height: 50,
    backgroundColor: COLORS.greenText,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
});
