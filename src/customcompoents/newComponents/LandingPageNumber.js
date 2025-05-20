import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import PrimaryText from './PrimaryText';
import { COLORS } from '../../../services/colors';

const {width, height} = Dimensions.get('window');

export default function LandingPageNumber(props) {
  return (
    <View
      style={{
        borderBottomColor: 'rgba(36, 38, 47, 1)',
        borderBottomWidth: 1,
        paddingBottom: 25,
      }}>
      <PrimaryText
        Heading={props.num}
        style={{
          color: COLORS.greenText,
          fontSize: 48,
          lineHeight: 56,
          fontWeight: '700',
          marginTop: 20,
          fontFamily:'LeagueSpartan-Regular'
        }}
      />
      <Image
        source={require('../../../assets/images/Home/linePicture.png')}
        resizeMode="contain"
        style={{width: width * 0.25, alignSelf: 'center', marginTop: 10}}
      />
      <Text
        style={{
          textAlign: 'center',
          color: COLORS.heading,
          fontSize: 17,
          lineHeight: 24,
          fontWeight: '700',
          marginTop: 10,
          alignSelf:'center',
          fontFamily:'LeagueSpartan-Regular'
        }}>
        {props.title} 
        </Text>
      <Text
        style={{
          color: 'rgba(145, 146, 151, 1)',
          fontWeight: '400',
          textAlign: 'center',
          fontSize: 17,
          lineHeight: 24,
          marginTop: 9,
          fontFamily:'LeagueSpartan-Regular'
        }}>
        {props.explain}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
