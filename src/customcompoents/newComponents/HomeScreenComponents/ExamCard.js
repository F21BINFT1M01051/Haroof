import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
const { width, height } = Dimensions.get('window');

export default function ExamCards(props) {
  return (
    <TouchableOpacity>


      <View
        style={{
          width: width * 0.62,
          height: height * 0.095,
          backgroundColor: props.backgroundColorTheme,
          borderRadius: 15,
          paddingHorizontal: width * 0.05,
          paddingVertical: 10,
          marginTop: 10,
          marginLeft: 12,
          marginRight: width * 0.04,
          elevation: 5,
          marginBottom: 10,
          flexDirection: 'row',
          borderColor: props.border,
          borderWidth: 1,
          ...props.margin,
          alignItems: 'center'
        }}>
        <Image
          source={require('../../../../assets/images/Home/script2.png')}
          style={{ width: 36, height: 30 }}
          resizeMode="contain"
        />
        <View style={{
          marginLeft: 3,
          //  backgroundColor:'red',
          height: 60
        }}>
          <Text
            style={{
              color: props.textColor,
              fontFamily: 'Roboto-Bold',
              top: 1,
              marginLeft: 14,
              fontSize: 12,
            }}>
            {props.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 14,
              // backgroundColor:'red',
              top: 9
            }}>
            <View
              style={{
                width: 75,
                height: 24.7,
                borderRadius: 15,
                backgroundColor: 'rgba(97, 140, 255, 1)',
                alignItems: 'center',
                ...props.backgroundColor,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 10,
                  top: 1
                }}>
                {props.language}
              </Text>
            </View>
            <View
              style={{
                width: 75,
                height: 26,
                borderRadius: 15,
                backgroundColor: 'rgba(26, 26, 26, 1)',
                alignItems: 'center',
                marginLeft: 7,
                justifyContent: 'center'
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Medium',
                  fontSize: 10,
                }}>
                {'sehr gut'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
