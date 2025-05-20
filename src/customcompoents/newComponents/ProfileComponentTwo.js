import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../services/colors';

const {width, height} = Dimensions.get('window');

const ProfileComponentTwo = props => {
  return (
    <TouchableOpacity
    onPress={props.clickButton}
      style={{
        width: width * 0.9,
        backgroundColor: 'rgba(159, 174, 195, 0.05)',
        ...props.styleOne,
        borderColor:'rgba(159, 174, 195, 0.05)',
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 17,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(45, 53, 56, 1)',
          marginHorizontal: 14,
          ...props.styleTwo,
          marginBottom:2
        }}>
        <Image
          source={props.img1}
          resizeMode="contain"
          style={{width: 30, height: 26, ...props.picStyle2}}
        />
        <View style={{flex: 1}}>
          {props.log && (
            <TouchableOpacity onPress={props.onLogoutPress}>
              <Text style={{color: 'rgba(216, 0, 39, 1)', marginLeft: 16, fontFamily:'Roboto-Regular', fontWeight:'800', fontSize:14, marginTop:7}}>{props.log}</Text>
            </TouchableOpacity>
          )}
          <Text
            style={{
              fontWeight: '400',
              fontFamily: 'Roboto-Regular',
              fontSize: 13,
              color: COLORS.heading,
              flex: 1,
              marginHorizontal: 15,
              marginTop: props.email ? -2 : 3,
              ...props.texting
            }}>
            {props.text1}
            <Text>  </Text>
            <Text style={{color: 'rgba(152, 132, 3, 1)', paddingLeft: 5}}>
              {props.text2}
            </Text>
          </Text>
          {props.email && (
            <Text
              style={{
                color: 'rgba(159, 159, 159, 1)',
                fontSize: 10,
                marginLeft: 16,
                marginTop: -2,
                fontFamily: ' Roboto-Regular',
                ...props.texting2

              }}>
              {props.email}
            </Text>
          )}
        </View>

        <TouchableOpacity onPress={props.clickButton}>
          <Image
            source={props.img}
            resizeMode="contain"
            style={{
              width: 10,
              height: 10,
              marginRight: 15,
              marginTop: 5,
              ...props.picStyle,
            }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileComponentTwo;

const styles = StyleSheet.create({});
