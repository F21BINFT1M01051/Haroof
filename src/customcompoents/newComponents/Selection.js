import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Selection = props => {
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
        paddingVertical:10
      }}>

      {/* {props.selected && ( */}
        <Image
        source={{uri:`${props.image}`}}
          style={{
            width: 45,
            height: 45,
            alignSelf: 'center',
            // marginTop: 15,
          }}
          resizeMode="contain"
        />
      {/* ) 
          //  <props.image2 />
        
      } */}
      <Text
        style={{
          color: props.selected ? '#000000' : '#8B8B8B', // Darker text when selected
          ...props.textstyle,
          fontSize: 12,
          fontFamily: 'Roboto-Bold',
        }}>
        {props.text}
      </Text>
      <Text
        style={{
          color: props.selected ? '#000000' : '#8B8B8B',
          ...props.textstyle,
          fontSize: 12,
          fontFamily: 'Roboto-Bold',
        }}>
        {props.text2}
      </Text>
    </View>
  );
};

export default Selection;

const styles = StyleSheet.create({});
