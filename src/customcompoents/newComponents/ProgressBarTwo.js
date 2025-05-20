import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../../services/colors';
import { collapseTopMarginForChild } from 'react-native-render-html';
import CustomProgressBar from './CustomProgressBar';
import ProgressBar from 'react-native-animated-progress';

const { width, height } = Dimensions.get('window');

const ProgressBarTwo = props => {
  const [detail, setDetail] = useState(false);
  const toggleAction = () => {
    setDetail(!detail)
  }
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          // alignItems: 'center',
          marginVertical: 5,
        }}>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          <Text
            style={{
              color: COLORS.heading,
              fontFamily: 'Roboto-Medium',
              // marginBottom: -25,
              fontSize: 20,
              fontWeight: '600',
              top: 25
            }}>
            {props.subject}
          </Text>
          <Text
            style={{
              color: COLORS.heading,
              fontFamily: 'Roboto-Regular',
              alignSelf: 'flex-end',
              // marginRight:50
            }}>
            {props.progressing}%
          </Text>
          <ProgressBar progress={props.progressing} height={7} backgroundColor={props.fill} trackColor='rgba(32, 34, 55, 1)' />

        </View>
        <TouchableOpacity
          disabled={props.disabled}
          onPress={toggleAction}
          style={{ top: 20, ...props.style2 }}>
          <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', top:20 }}>


            <Image
              source={
                detail
                  ? require('../../../assets/images/Home/upperArrow.png')
                  : require('../../../assets/images/Home/downArrow.png')
              }
              resizeMode="contain"
              style={{
                width: 14, height: 14,
                
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      {detail && (
        <View style={{ paddingHorizontal: 40, marginBottom: 20, }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: COLORS.heading,
                fontFamily: 'Roboto-Regular',
                fontSize: 12,
                marginTop: 15
              }}>
              {props.topic1}
            </Text>
            <View style={{ marginTop: 15, right: 10, }}>
              <Progress.Circle
                size={40}
                indeterminate={false}
                unfilledColor="rgba(32, 34, 55, 1)"
                progress={props.progress1}
                borderColor="rgba(32, 34, 55, 1)"
                borderWidth={0}
                thickness={4}
                color={props.fill}
                showsText
                textStyle={{ color: 'white', fontSize: 11, fontFamily: 'Roboto-Medium' }}
                formatText={() => `${(props.progress1 * 100).toFixed(0)}%`} // Display percentage

              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: COLORS.heading,
                fontFamily: 'Roboto-Regular',
                marginBottom: -25,
                fontSize: 12,
                fontWeight: '500',
              }}>
              {props.topic2}
            </Text>
            <View style={{ marginTop: 15, right: 10, }}>
              <Progress.Circle
                size={40}
                indeterminate={false}
                unfilledColor="rgba(32, 34, 55, 1)"
                progress={props.progress2}
                borderColor="rgba(32, 34, 55, 1)"
                borderWidth={0}
                thickness={4}
                color={props.fill}
                showsText
                textStyle={{ color: 'white', fontSize: 11, fontFamily: 'Roboto-Medium' }}
                formatText={() => `${(props.progress2 * 100).toFixed(0)}%`} // Display percentage

              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: COLORS.heading,
                fontFamily: 'Roboto-Regular',
                marginBottom: -25,
                fontSize: 12,
                fontWeight: '500',
              }}>
              {props.topic3}
            </Text>
            <View style={{ marginTop: 15, right: 10, }}>
              <Progress.Circle
                size={40}
                indeterminate={false}
                unfilledColor="rgba(32, 34, 55, 1)"
                progress={props.progress3}
                borderColor="rgba(32, 34, 55, 1)"
                borderWidth={0}
                thickness={4}
                color={props.fill}
                showsText
                textStyle={{ color: 'white', fontSize: 11, fontFamily: 'Roboto-Medium' }}
                formatText={() => `${(props.progress3 * 100).toFixed(0)}%`}

              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProgressBarTwo;

const styles = StyleSheet.create({});
