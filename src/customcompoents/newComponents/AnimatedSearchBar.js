import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useRef } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../../services/colors';

const { width } = Dimensions.get('window');

const AnimatedSearchBar = ({ customStyle,setSearchQuery, searchQuery }) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedWidth = useRef(new Animated.Value(40)).current;
  const animatedIconRight = useRef(new Animated.Value(22)).current;
  const searchBarRef = useRef(null);


  const animateSearchBar = (toWidth) => {
    Animated.timing(animatedWidth, {
      toValue: toWidth,
      duration: 200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };

  const animateIconPosition = (toValue) => {
    Animated.timing(animatedIconRight, {
      toValue: toValue,
      duration: 200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };

  const handleFocus = () => {
    setIsFocused(true);
    animateSearchBar(width * 0.77);
    animateIconPosition(5);
  };

  const handleBlur = () => {
    // if (searchQuery === '') {
      animateSearchBar(40);
      setIsFocused(false);
      animateIconPosition(22);
    // }
  };

  const handleTouch = () => {
    if (!isFocused) {
      animateSearchBar(width * 0.77);
      animateIconPosition(5);
      searchBarRef.current?.focus();
    } else {
      searchBarRef.current?.blur();
    }
  };

 

  const handleChangeText = (text) => {
    setSearchQuery(text); 
  };


  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <Animated.View style={[styles.searchBarWrapper, { width: animatedWidth, right: 0 }]}>
        <TextInput
          ref={searchBarRef}
          style={[styles.textInput, customStyle, { textAlign: 'left', paddingVertical: 0 }]}
          placeholder="Search"
          placeholderTextColor="rgba(112, 112, 112, 1)"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          value={searchQuery}
          // onSubmitEditing={onFilterData}
        />
        <Animated.View style={[styles.icon, { right: animatedIconRight }]}>
            <FontAwesome name="search" color={'white'} size={15} />
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default AnimatedSearchBar;

const styles = StyleSheet.create({
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'flex-start',
    borderColor: 'rgba(72, 72, 72, 1)',
    borderWidth: 1,
    backgroundColor: COLORS.backgroundColor,
    position: 'absolute',
    paddingHorizontal: 10,
    height: 40,
  },
  icon: {
    right: 22,
    bottom: 1,
  },
  textInput: {
    flex: 1,
    fontSize: 12,
    color: COLORS.heading,
    fontFamily: 'Roboto-Regular',
    paddingRight: 20,
  },
});
