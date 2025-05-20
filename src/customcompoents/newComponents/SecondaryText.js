import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated'; // Import Animated from Reanimated
import { COLORS } from '../../services/colors';

const SecondaryText = (props) => {
  return (
    <View>
      <Animated.Text style={[styles.text, props.style]}>
        {props.text}
      </Animated.Text>
    </View>
  );
};

export default SecondaryText;

const styles = StyleSheet.create({
  text: {
    color: COLORS.heading,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    lineHeight: 22,
  },
});
