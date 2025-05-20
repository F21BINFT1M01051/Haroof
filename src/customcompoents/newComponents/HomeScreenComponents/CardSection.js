import {Image, StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

const CardSection = props => {
  return (
    <View style={{flexDirection: 'row', marginTop: 20, height: 70, marginBottom:10}}>
      <View
        style={{
          width: width*0.026,
          height: 83,
          backgroundColor: '#FB7F2D',
          paddingLeft: 10,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          ...props.borderStyle,
        }}></View>
      <View
        style={{
          backgroundColor: props.backgroundColorTheme,
          height: 83,
          padding: 10,
          width: width*0.85,
          borderTopRightRadius: height*0.015,
          borderBottomRightRadius: height*0.015,
          elevation: 5,
    
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri : props.flag}}
            style={{width: 30, height: 20, marginTop: 3, borderRadius:2}}
            resizeMode="cotain"
          />
          <View>
            <Text
              style={{
                fontSize: 10,
                color: props.textColor,
                fontFamily: 'Roboto-Bold',
                marginLeft: 10,
                marginTop: -2,
                // fontWeight:'700'
              }}>
              {props.title}
            </Text>
            <Text
              style={{
                fontSize: 9,
                color: props.textColor,
                fontFamily: 'Roboto-Regular',
                marginLeft: 10,
                marginTop: -5,
                fontWeight:'500'
              }}>
              {props.subTitle}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginTop:-10, alignItems:'center'}}>
          <Text
            style={{
              fontSize: 11,
              color: 'rgba(115, 115, 115, 1)',
              fontFamily: 'Roboto-Bold',
              marginRight: 10,
              // marginTop: -4,
              // fontWeight:'600'
            }}>
            {props.time}
          </Text>
          <TouchableOpacity
            style={{
              // width: width*0.2,
              height: height*0.031,
              backgroundColor: props.learnNow,
              borderRadius: height*0.05,
              alignItems: 'center',
              // marginTop: -height*0.01,
              marginRight: 10,
              alignItems:'center',
              justifyContent:'center'
            }}>
            {/* <Text
              style={{
                fontSize: 10,
                alignSelf: 'center',
                color: props.learnNowText,
                fontFamily:'Roboto-Regular',
                fontWeight:'400',
                alignSelf:'center',
              }}>
              Learn now
            </Text> */}
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <View
            style={{
              width: 96,
              height: 29,
              backgroundColor: '#FB7F2D',
              borderRadius: height*0.05,
              alignItems: 'center',
              marginTop: -height*0.011,
              ...props.buttonColor,
              marginLeft:1,
              justifyContent:'center'
            }}>
            <Text style={{color: 'white', fontSize:11, fontFamily:'Roboto-Medium', lineHeight:16}}>{props.language}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({});
