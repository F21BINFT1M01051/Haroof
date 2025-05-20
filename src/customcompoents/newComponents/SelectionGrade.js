import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');
const SelectionGrade = props => {
  return (
    <View
      style={{
        width: width * 0.24,
        height: height * 0.12,
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        marginHorizontal: width * 0.0255,
        marginVertical: height * 0.02,
        borderRadius: 5,
        ...props.style,
      }}>
      <Text
        style={{
          fontSize: 45,
          fontWeight: 'bold',
          fontFamily: 'Roboto-Bold',
          color: 'white',
          alignSelf: 'center',
        }}>
        {props.grade}
      </Text>
      <Text
        style={{
          marginTop: 10,
          color: '#8B8B8B',
          marginTop: -10,
          ...props.textstyle,
          fontFamily:'Roboto-Regular'
        }}>
        {props.text}
      </Text>
      <Text style={{color: '#8B8B8B', ...props.textstyle, fontFamily:'Roboto-Regular'}}>{props.text2}</Text>
    </View>
  );
};

export default SelectionGrade;

const styles = StyleSheet.create({});
