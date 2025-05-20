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

const SelectionOfSubjects = ({
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
  shadowStyle,
  containerWrapperCustom
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{marginBottom: 5}}>
      <View style={[styles.containerWrapper, containerWrapperCustom]}>
        {isSelected ? (
          <Shadow startColor={'rgba(0, 147, 121, 0.2)'}  distance={10} containerStyle={[{left:20, alignItems:'center', justifyContent:'center'},shadowStyle]}>
            <View
              style={[
                styles.container,
                // isSelected && styles.selected,
                {opacity},
                styling,
              ]}>
              <View style={styles.leftContainer}>
                <Image
                  source={img}
                  resizeMode="contain"
                  style={[styles.image, picStyle]}
                />
                <Text style={styles.text}>{subject}</Text>
              </View>
              <TouchableOpacity onPress={press}>
                <AntDesign
                  name="right"
                  color={isSelected ? 'rgba(0, 147, 121, 1)' : 'white'}
                  size={18}
                />
              </TouchableOpacity>
            </View>
          </Shadow>
        ) : (
          <View
            style={[
              styles.container,
              // isSelected && styles.selected,
              {opacity},
              styling,
              {marginLeft:20}
            ]}>
            <View style={styles.leftContainer}>
              <Image
                source={img}
                resizeMode="contain"
                style={[styles.image, picStyle]}
              />
              <Text style={styles.text}>{subject}</Text>
            </View>
            <TouchableOpacity onPress={press}>
              <AntDesign
                name="right"
                color={isSelected ? 'rgba(0, 147, 121, 1)' : 'white'}
                size={18}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SelectionOfSubjects;

const styles = StyleSheet.create({
  containerWrapper: {
    position: 'relative',
    borderRadius: 10,
    paddingTop:10,
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
    // marginLeft: 20,
    // marginBottom: 10,
    position: 'relative',

    // zIndex: 1,
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
  selected: {
    shadowColor: 'rgba(0, 147, 121, 1)',
    shadowOpacity: 1,
    shadowRadius: 25,
    shadowOffset: {width: 0, height: 0},
    elevation: 15,
  },
});
