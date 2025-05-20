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

const TopicSelectionComponent = ({
  img,
  subject,
  isSelected,
  onPress,
  press,
  check,
  unCheck,
  picStyle,
  isSelected2,
  opacity = 1,
  styling,
  styleGradient,
  component,
  showArrow,
  allPress,
  shadowStyle,
  containerWrapperCustom
}) => {
  return (
    <TouchableOpacity style={[styles.containerWrapper,containerWrapperCustom]} onPress={allPress}>
      {isSelected && isSelected2 ? (
        <View style={styles.shadowContainer}>
          <LinearGradient
            colors={['rgba(0, 147, 121, 1)', 'rgba(107, 107, 107, 1)']}
            style={[styles.gradientBorder, styleGradient]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
          />
          
          <Shadow
            startColor={'rgba(0, 147, 121, 0.2)'}
            distance={15}
            containerStyle={[styles.shadowStyle, shadowStyle]}
          >
            <View style={[styles.container, {opacity}, styling]}>
              <View style={styles.leftContainer}>
                <TouchableOpacity onPress={onPress}>
                  <Image
                    source={isSelected ? check : unCheck}
                    style={styles.checkIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Image
                  source={img}
                  resizeMode="contain"
                  style={[styles.image, picStyle]}
                />
                <Text style={styles.text}>{subject}</Text>
              </View>
              {showArrow && (
                <TouchableOpacity onPress={press}>
                  <AntDesign
                    name="right"
                    color={component ? 'white' : isSelected ? 'rgba(0, 147, 121, 1)' : 'white'}
                    size={18}
                  />
                </TouchableOpacity>
              )}
            </View>
          </Shadow>
        </View>
      ) : (
        <View style={[styles.container, {opacity}, styling]}>
          <View style={styles.leftContainer}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={isSelected ? check : unCheck}
                style={styles.checkIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Image
              source={img}
              resizeMode="contain"
              style={[styles.image, picStyle]}
            />
            <Text style={styles.text}>{subject}</Text>
          </View>
          {showArrow && (
            <TouchableOpacity onPress={press}>
              <AntDesign
                name="right"
                color={component ? 'white' : isSelected ? 'rgba(0, 147, 121, 1)' : 'white'}
                size={18}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TopicSelectionComponent;

const styles = StyleSheet.create({
  containerWrapper: {
    position: 'relative',
    borderRadius: 10,
    marginBottom: 5,
    paddingTop: 10,
    left:24
  },
  shadowContainer: {
    position: 'relative',
    width: width * 0.9,
    height: height * 0.064,
  },
  shadowStyle: {
    width: width * 0.9,
    height: height * 0.064,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: width * 0.9,
    height: height * 0.064,
    backgroundColor: 'rgba(43, 43, 48, 1)',
    borderColor: 'rgba(72, 72, 72, 1)',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    top:2
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  text: {
    color: COLORS.heading,
    fontSize: 14,
    marginLeft: 15,
    fontFamily: 'Roboto-Regular',
  },
  checkIcon: {
    marginRight: 18,
    width: 24,
    height: 24,
  },
  gradientBorder: {
    position: 'absolute',
    width: width * 0.91,
    height: height * 0.068,
    borderRadius: 10,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
  },
});
