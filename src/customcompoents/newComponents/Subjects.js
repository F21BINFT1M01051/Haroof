import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { COLORS } from '../../../services/colors';

const Subjects = props => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 7,
        backgroundColor: 'rgba(28, 27, 27, 0.1)',
        borderColor: props.pressed ? COLORS.greenText  : 'rgba(43, 43, 43, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginHorizontal: 6,
        marginVertical: 7,
      }}
      onPress={props.onPress}
      >
      <Text
        style={{fontFamily: 'Roboto-Regular', fontSize: 12, color: 'white'}}>
        {props.subject}
      </Text>
    </TouchableOpacity>
  );
};

export default Subjects;

const styles = StyleSheet.create({});
