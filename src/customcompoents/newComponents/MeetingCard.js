import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { COLORS } from '../../../services/colors';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const MeetingCard = ({
  meetingTitle,
  name,
  subject,
  profile,
  subjectPic,
  time,
  timerIcon,
  button,
  disabled,
  onPress,
  profileSection,
  profileDisable,
  image
}) => {
  const navigation = useNavigation();
  const [rating, setRatings] = useState(false)

  return (
    <View
      style={{
        width: width * 0.9,
        backgroundColor: 'rgba(28, 27, 27, 0.3)',
        borderColor: 'rgba(43, 43, 43, 1)',
        borderWidth: 1,
        borderRadius: 20,
        padding: 14,
        marginTop: 17,
      }}>
      <TouchableOpacity onPress={profileSection} style={{}} disabled={profileDisable}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            //   source={require('../../../assets/images/Home/tutor2.png')}
            source={profile ? {uri : profile} : image}
            resizeMode="contain"
            style={{ width: 60, height: 61, borderRadius: 16 }}
          />
          <View style={{ marginLeft: 14, marginTop: -6 }}>
            <Text
              style={{
                color: COLORS.heading,
                fontFamily: 'Manrope-Bold',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              {meetingTitle}
            </Text>
            <Text
              style={{
                color: 'rgba(227, 227, 227, 1)',
                fontFamily: 'Manrope-Regular',
                fontSize: 12,
                top: 1,
                fontWeight: '400',
              }}>
              {name}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 2 }}>
              <Image
                source={{ uri: subjectPic }}
                resizeMode="contain"
                style={{ width: 12, height: 12 }}
              />
              <Text
                style={{
                  color: COLORS.heading,
                  fontFamily: 'Manrope-Regular',
                  fontSize: 12,
                  marginLeft: 4,
                  fontWeight: '400',
                }}>
                {subject}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderColor: 'rgba(43, 43, 43, 1)',
          marginTop: 18,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 12,
          alignItems: 'center',
        }}>
        <View style={{ flexDirection: 'row', top: 3, alignItems: 'center' }}>
          <Image
            source={timerIcon}
            resizeMode="contain"
            style={{ width: 18, height: 18 }}
          />
          <Text
            style={{
              color: COLORS.heading,
              fontFamily: 'Roboto-Regular',
              fontSize: 12,
              marginLeft: 8,
              top: 1
            }}>
            {time}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 100,
            height: 28,
            backgroundColor: button === 'Rate Teacher' ? 'rgba(138, 85, 10, 1)' : button === 'Join' ? 'rgba(35, 107, 44, 1)' : 'rgba(43, 43, 48, 1)',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPress}
          disabled={disabled}
        >
          <Text
            style={{
              color: COLORS.heading,
              fontFamily: 'Roboto-Regular',
              fontSize: 12,
            }}>
            {button}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MeetingCard;

const styles = StyleSheet.create({});
