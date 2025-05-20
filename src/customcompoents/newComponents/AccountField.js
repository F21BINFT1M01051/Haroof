import {View, Text, Image} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

export default function AccountField(props) {
  return (
    <View style={{flexDirection: 'row', marginTop: 20}}>
      <View
        style={{
          width: 55,
          height: 50,
          // borderBottomColor: '#E9ECF2',
          // borderBottomWidth: 0.8,
          marginTop: 6,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 2,
          ...props.picStyle,
        }}>
        <Image
          source={props.img}
          resizeMode="contain"
          style={{marginTop: 7, marginLeft: -15}}
        />
      </View>
      <TextInput
        label={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={'black'}
        underlineColor="lightgray"
        style={{
          backgroundColor: '#F3F3F3',
          fontSize: 14,
          marginLeft: -25,
          ...props.fieldStyle,
        }}
        width={300}
        activeUnderlineColor="lightgray"
        placeholder={props.placeholder2}
      />
    </View>
  );
}
