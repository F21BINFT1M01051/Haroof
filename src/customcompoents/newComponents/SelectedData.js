import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../../services/colors';
import {Shadow} from 'react-native-shadow-2';

const {width, height} = Dimensions.get('window');

const SelectedData = ({
  img,
  subject,
  onPress,
  press,
  check,
  picStyle,
  IconName,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.wrapper}>
      {borderColor ? (
        <>
          <LinearGradient
            colors={['rgba(0, 147, 121, 1)', 'rgba(107, 107, 107, 1)']}
            style={styles.gradientBorder}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
          />
          <Shadow
            startColor={'rgba(0, 147, 121, 0.2)'}
            distance={15}
            containerStyle={styles.shadowContainer}>
            <View style={[styles.container, borderColor && styles.withBorder,{top:1}]}>
              <View style={styles.leftContainer}>
                {check && (
                  <Image
                    source={check}
                    style={styles.checkIcon}
                    resizeMode="contain"
                  />
                )}
                <Image
                  source={img}
                  resizeMode="contain"
                  style={[styles.image, picStyle]}
                />
                <Text style={styles.text}>{subject}</Text>
              </View>
              <TouchableOpacity onPress={press}>
                <AntDesign
                  name={IconName}
                  color={'rgba(0, 147, 121, 1)'}
                  size={18}
                />
              </TouchableOpacity>
            </View>
          </Shadow>
        </>
      ) : (
        <>
          <Shadow
            startColor={'rgba(0, 147, 121, 0.2)'}
            distance={15}
            containerStyle={styles.shadowContainer}>
            <View style={[styles.container, borderColor && styles.withBorder]}>
              <View style={styles.leftContainer}>
                {check && (
                  <Image
                    source={check}
                    style={styles.checkIcon}
                    resizeMode="contain"
                  />
                )}
                <Image
                  source={img}
                  resizeMode="contain"
                  style={[styles.image, picStyle]}
                />
                <Text style={styles.text}>{subject}</Text>
              </View>
              <TouchableOpacity onPress={press}>
                <AntDesign
                  name={IconName}
                  color={'rgba(0, 147, 121, 1)'}
                  size={18}
                />
              </TouchableOpacity>
            </View>
          </Shadow>
        </>
      )}
    </TouchableOpacity>
  );
};

export default SelectedData;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginVertical: 8,
  },
  shadowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: width * 0.88,
    height: height * 0.064,
    backgroundColor: 'rgba(43, 43, 48, 1)',
    borderColor: 'rgba(72, 72, 72, 1)',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  withBorder: {
    borderColor: 'transparent',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  text: {
    color: COLORS.heading,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 15,
    fontFamily: 'Roboto-Regular',
  },
  checkIcon: {
    marginRight: 18,
    width: 23,
    height: 23,
  },
  gradientBorder: {
    position: 'absolute',
    width: width * 0.89,
    height: height * 0.064 + 2.5,
    borderRadius: 12,
    marginLeft:-2
  },
});
