import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../services/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Shadow} from 'react-native-shadow-2';

const {width, height} = Dimensions.get('window');

const ChoiceComponent = ({
  correct,
  onPress,
  isSelected,
  choice,
  isShowAnswer,
}) => {
  return (
    <View
      style={{
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:5
      }}>
      {isSelected && correct && isShowAnswer ? (
        <>
          <LinearGradient
            colors={['rgba(0, 147, 121, 1)', 'rgba(107, 107, 107, 1)']}
            style={[styles.gradientBorder]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
          />
          <Shadow
            startColor={'rgba(0, 147, 121, 0.2)'}
            distance={15}
            containerStyle={{alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={[
                {
                  width: width * 0.85,
                  height: height * 0.06,
                  backgroundColor: 'rgba(43, 43, 48, 1)',
                  borderRadius: 10,
                  alignItems: 'center',
                  paddingHorizontal: 15,
                  flexDirection: 'row',
                },
              ]}>
              <Image
                source={require('../../../assets/images/Home/CorrectAnswer.png')}
                resizeMode="contain"
                style={{width: 22, height: 22}}
              />

              <Text
                style={{
                  color: COLORS.greenText,
                  fontFamily: 'Roboto-Regular',
                  marginLeft: 20,
                }}>
                {choice}
              </Text>
            </View>
          </Shadow>
        </>
      ) : isSelected && !correct && isShowAnswer ? (
        <>
          <LinearGradient
            colors={['rgba(231, 76, 60, 1)', 'rgba(107, 107, 107, 1)']}
            style={[styles.gradientBorder]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
          />
          <Shadow
            startColor={'rgba(231, 76, 60, 0.4)'}
            distance={15}
            containerStyle={{alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={[
                {
                  width: width * 0.85,
                  height: height * 0.06,
                  backgroundColor: 'rgba(43, 43, 48, 1)',

                  borderRadius: 10,
                  alignItems: 'center',
                  paddingHorizontal: 15,
                  flexDirection: 'row',
                },
              ]}>
              <Image
                source={require('../../../assets/images/Home/wrong.png')}
                resizeMode="contain"
                style={{width: 18, height: 18}}
              />

              <Text
                style={{
                  color: 'rgba(231, 76, 60, 1)',
                  fontFamily: 'Roboto-Regular',
                  marginLeft: 20,
                }}>
                {choice}
              </Text>
            </View>
          </Shadow>
        </>
      ) : isShowAnswer && !isSelected && correct ? (
        <>
          <View
            style={[
              {
                width: width * 0.88,
                height: height * 0.06,
                backgroundColor: 'rgba(43, 43, 48, 1)',
                borderRadius: 10,
                alignItems: 'center',
                paddingHorizontal: 15,
                flexDirection: 'row',
                borderColor: COLORS.greenText,
                borderStyle: 'dashed',
                borderWidth: 1.3,
              },
            ]}>
            <Image
              source={require('../../../assets/images/Home/CorrectAnswer.png')}
              resizeMode="contain"
              style={{width: 22, height: 22}}
            />

            <Text
              style={{
                color: COLORS.greenText,

                fontFamily: 'Roboto-Regular',
                marginLeft: 20,
              }}>
              {choice}
            </Text>
          </View>
        </>
      ) : (
        <>
          <View
            style={[
              {
                width: width * 0.868,
                height: height * 0.06,
                backgroundColor: 'rgba(43, 43, 48, 1)',
                borderWidth: 1,
                borderColor: isSelected
                  ? 'rgba(180, 180, 180, 1)'
                  : 'rgba(72, 72, 72, 1)',
                borderRadius: 10,
                alignItems: 'center',
                paddingHorizontal: 15,
                flexDirection: 'row',
              },
            ]}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={
                  isSelected
                    ? require('../../../assets/images/Home/selected22.png')
                    : require('../../../assets/images/Home/categoryUncheck.png')
                }
                resizeMode="contain"
                style={{width: 22, height: 22}}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: COLORS.heading,
                fontFamily: 'Roboto-Regular',
                marginLeft: 20,
              }}>
              {choice}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ChoiceComponent;

const styles = StyleSheet.create({
  gradientBorder: {
    position: 'absolute',
    width: width * 0.86,
    height: height * 0.06 + 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 8,
  },
});
