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

const TodoTopicSelection = ({
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
  disabled
}) => {



  return (
    <TouchableOpacity style={styles.containerWrapper} onPress={allPress} disabled={disabled}>
      {isSelected && isSelected2 ? (
        <>
          <LinearGradient
            colors={['rgba(0, 147, 121, 1)', 'rgba(107, 107, 107, 1)']}
            style={[styles.gradientBorder, styleGradient]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
          />
          <Shadow
            startColor={'rgba(0, 147, 121, 0.2)'}
            distance={10}
            containerStyle={[{
              left:20,
            }]}
            >
            <View style={[styles.container, {opacity}, styling]}>
              <View style={styles.leftContainer}>
                <TouchableOpacity onPress={onPress}>
                  <Image
                    source={isSelected ? check : unCheck}
                    style={{marginRight: 18, width: 24, height: 24}}
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
                  {component ? (
                    <AntDesign name="right" color={'white'} size={18} />
                  ) : (
                    <AntDesign
                      name="right"
                      color={isSelected ? 'rgba(0, 147, 121, 1)' : 'white'}
                      size={18}
                    />
                  )}
                </TouchableOpacity>
              )}
            </View>
          </Shadow>
        </>
      ) : (
        <View style={[styles.container, {opacity}, styling,{marginLeft:20}]}>
          <View style={styles.leftContainer}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={isSelected ? check : unCheck}
                style={{marginRight: 18, width: 24, height: 24}}
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
              {component ? (
                <AntDesign name="right" color={'white'} size={18} />
              ) : (
                <AntDesign
                  name="right"
                  color={isSelected ? 'rgba(0, 147, 121, 1)' : 'white'}
                  size={18}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TodoTopicSelection;

const styles = StyleSheet.create({
  containerWrapper: {
    position: 'relative',
    borderRadius: 10,
    marginBottom: 5,
    paddingTop:10,
    // backgroundColor:'red',
    right:3
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
    position: 'relative',
    top:1,
    
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
  gradientBorder: {
    position: 'absolute',
    width: width * 0.9 + 1,
    height: height * 0.065 + 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 19,
    left: 0.8,
    marginTop:10
  },
});
