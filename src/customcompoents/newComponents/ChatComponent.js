import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { COLORS } from '../../../services/colors';
import moment from 'moment';
const { width, height } = Dimensions.get('window');

const ChatComponent = ({ name, message, time, messagesCount, onPress, img, image }) => {
  // console.log(message)
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: width * 0.9,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <View style={{width: 40, height: 40,borderRadius:25, backgroundColor:'#D9D9D9', alignItems:'center', justifyContent:'center' }}>
          <Image
            source={img ? { uri: img } : image}
            resizeMode="cover"
            style={{ width: img ? 40 : 20 , height: img ? 40 : 20 }}
            borderRadius={img ? 25 : 0}
          />
        </View>

        <View style={{ marginLeft: 12, width: '85%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text
              style={{
                fontFamily: 'Inter_18pt-Bold',
                color: COLORS.heading,
                fontWeight: 'bold',
                fontSize: 13,
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontFamily: 'Inter_18pt-Medium',
                color: 'rgba(163, 163, 163, 1)',
                fontSize: 12,
                right: 10,
                textAlign: 'right',
              }}>
              {moment(time).format('h:mm A')}
            </Text>
          </View>
          <View
            style={{
              width: '96%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <View style={{ width: 220 }}>
              <Text
                style={{
                  fontFamily: 'Inter_18pt-Regular',
                  color: 'rgba(163, 163, 163, 1)',
                  fontSize: 12,
                  fontWeight: '400',
                  lineHeight: 17,
                }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {message?.text}
              </Text>
            </View>
            {
              messagesCount > 0  &&
                <>
                  <View
                    style={{ width: 20, height: 20, backgroundColor: '#038E13', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Text style={{ color: 'white', fontFamily: 'Roboto-Regular', fontSize: 12 }}>{messagesCount}</Text>
                  </View>
                </>
            }

          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatComponent;

const styles = StyleSheet.create({});
