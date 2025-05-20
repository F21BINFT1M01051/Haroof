import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated'; // Import Animated from Reanimated
import { COLORS } from '../../services/colors';
const PrimaryText = (props) => {
  return (
    <View>
      <Animated.Text style={[styles.heading, props.style]}>
        {props.Heading}
      </Animated.Text>
    </View>
  );
};

export default PrimaryText;

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    color: COLORS.heading,
    textAlign: 'center',
    lineHeight: 28.5,
    fontFamily: 'Roboto-ExtraBold',
    marginTop: 10,
  },
});
