import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('window');

export default function FlashCards(props) {

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
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../../assets/images/Home/script2.png')}
          style={{ width: 36, height: 30, ...props.picStyle }}
          resizeMode="contain"
        />
        <View style={{
          marginLeft: 3, height: 60, paddingVertical: 4,
          // backgroundColor:'red'
        }}>
          <Text
            style={{
              color: props.textColor,
              fontFamily: 'Roboto-Bold',
              // marginTop: 5,
              marginLeft: 14,
              fontSize: 12,
              ...props.textStyle,
              bottom: 2
            }}>
            {props.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 14,
              ...props.viewStyle,
              top: 5,
              // backgroundColor:'red'
            }}>
            <View
              style={{
                width: 75,
                height: 24,
                borderRadius: 15,
                backgroundColor: 'rgba(97, 140, 255, 1)',
                alignItems: 'center',
                ...props.backgroundColor,
                justifyContent: 'center',
                top: 1
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 10,
                }}>
                {props.language}
              </Text>
            </View>
            <Progress.Bar
              progress={props?.progressing || 0.5}
              width={75}
              color="#009379"
              borderColor="#2B2B30"
              unfilledColor="#919191"
              style={{ height: 27, marginLeft: 7, ...props.ProgressStyle }}
              height={27}
              borderRadius={15}
              {...props.progress}
            />
            <Text style={{ color: 'white', fontSize: 12, fontFamily: 'Roboto-Medium', right: 50, top: 4, ...props.progressText }}>
              {`${(props?.progressing * 100)}%` || '50%'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
