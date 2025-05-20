import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../services/colors';

const {width, height} = Dimensions.get('window');

const ProfileComponents = props => {
  return (
    <View
      style={{
        width: width * 0.9,
        paddingVertical: 20,
        backgroundColor: 'rgba(159, 174, 195, 0.05)',
        borderRadius: 20,
        ...props.style,
      }}>
      <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingBottom:2}}>
        <Image
          source={props.img1}
          resizeMode="contain"
          style={{width: 30, height: 26}}
        />

        <Text
          style={{
            // fontWeight: '300',
            fontFamily: 'Roboto-Bold',
            fontSize: 13,
            color: COLORS.heading,
            flex: 1,
            marginHorizontal: 15,
            marginTop: 3,
            ...props.TextStyle,
          }}>
          {props.text1}
        </Text>
        <TouchableOpacity onPress={props.pressOne}>
          <Image
            source={props.img}
            resizeMode="contain"
            style={{
              width: 20,
              height: 14,
              marginRight: 15,
              marginTop: 5,
              ...props.picStyle,
            }}
          />
        </TouchableOpacity>
      </View>
      {props.email && (
        <Text style={{color:'rgba(159, 159, 159, 1)', marginHorizontal:60, fontSize:11, marginTop:-5}}>{props.email}</Text>
      )}
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: 'rgba(45, 53, 56, 1)',
          marginVertical: 15,
          marginHorizontal: 14,
        }}></View>
      <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingBottom:2}}>
        <Image
          source={props.img2}
          resizeMode="contain"
          style={{width: 30, height: 26}}
        />
        <Text
          style={{
            // fontWeight: '700',
            fontFamily: 'Roboto-Bold',
            fontSize: 13,
            color: COLORS.heading,
            flex: 1,
            marginHorizontal: 15,
            marginTop: 5,
            ...props.TextStyle,
          }}>
          {props.text2}
        </Text>
        <TouchableOpacity onPress={props.pressTwo}>
          <Image
            source={props.img}
            resizeMode="contain"
            style={{
              width: 20,
              height: 14,
              marginRight: 15,
              marginTop: 5,
              ...props.picStyle,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileComponents;

const styles = StyleSheet.create({});
