import {View, Text, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

export default function DAYDATE({day, date1, isToday,selected, container, textStyle}) {
  return (
    <View
      style={{
        width:40,
        height: 60,
        backgroundColor: isToday ? selected : container,
        borderRadius:40,
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          marginTop: 12,
          fontFamily: 'Abel-Regular',
          fontSize:12,
          fontWeight:'400',
          ...textStyle
        }}>
        {day}
      </Text>
      <Text style={{color: 'white', fontFamily: 'Abel-Regular',...textStyle, fontSize:16, fontWeight:'400', marginTop:-1}}>
        {date1}
      </Text>
    </View>
  );
}
