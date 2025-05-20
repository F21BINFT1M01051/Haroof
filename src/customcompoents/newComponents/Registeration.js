import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

export default function Registeration(props) {
  return (
    <View
      style={{
        width: width*0.9,
        height: height*0.08,
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        ...props.style,
      }}>
      <Image
        source={props.img}
        style={{width: 40, height: 40, marginHorizontal: 20}}
        resizeMode="contain"
      />
      <Text style={{color: 'gray', fontFamily:'Roboto-Regular', ...props.textstyle}}>{props.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
