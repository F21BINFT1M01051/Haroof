import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { SvgUri } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const SelectionV2 = props => {
  console.log(props.selected)
  return (
    <View
      style={{
        width: width * 0.25,
        height: height * 0.12,
        backgroundColor: props.selected ? '#FFFFFF' : '#F3F3F3',
        alignItems: 'center',
        marginHorizontal: width * 0.025,
        marginVertical: height * 0.02,
        borderRadius: 5,
        ...props.style,
        paddingVertical: 10
      }}>
      {
        props.selected ?
          <>
            <Image
              source={{ uri: props.active }}
              style={{
                width: 45,
                height: 45,
                alignSelf: 'center',
              }}
              resizeMode="contain"
            />
          </>
          :
          <>
            <SvgUri width="45" height="45" uri={props.image} />
          </>
      }

      <Text
        style={{
          color: props.selected ? '#000000' : '#8B8B8B', // Darker text when selected
          ...props.textstyle,
          fontSize: 12,
          fontFamily: 'Roboto-Regular',
          marginTop: 6
        }}>
        {props.text}
      </Text>
      <Text
        style={{
          color: props.selected ? '#000000' : '#8B8B8B',
          ...props.textstyle,
          fontSize: 12,
          fontFamily: 'Roboto-Regular',
          bottom: 2
        }}>
        {props.text2}
      </Text>
    </View>
  );
};

export default SelectionV2;

const styles = StyleSheet.create({});
