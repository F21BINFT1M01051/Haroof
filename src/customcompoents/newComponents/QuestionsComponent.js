import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../../../services/colors';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const QuestionComponent = ({
  onPress,
  question,
  newContainerStyle,
  textStyle,
  img,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Shared values for height and color animations
  const heightAnim = useSharedValue(height * 0.06); // Initial height
  const colorAnim = useSharedValue(0); // 0 = default color, 1 = green color

  // Handle press to toggle height and color
  const handlePress = () => {
    setIsExpanded(!isExpanded);

    // Animate height
    heightAnim.value = withTiming(isExpanded ? height * 0.06 : height * 0.12, {
      duration: 300,
    });

    // Animate background color to green
    colorAnim.value = withTiming(1, { duration: 300 });

    // Reset background color after 2 seconds
    setTimeout(() => {
      colorAnim.value = withTiming(0, { duration: 300 }); // Fade back to original color
    }, 500); // 2 seconds delay

    if (onPress) {
      onPress();
    }
  };

  // Animated styles for dynamic color and height
  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorAnim.value,
      [0, 1],
      ['rgba(43, 43, 48, 1)', COLORS.greenText]
    );

    return {
      height: heightAnim.value,
      backgroundColor, // Apply animated background color
    };
  });

  return (
    <TouchableOpacity onPress={handlePress} style={styles.innerContainer}>
      <Animated.View
        style={[styles.container, animatedStyle, newContainerStyle]}
      >


        {isExpanded && (
          <TouchableOpacity style={{ alignSelf: 'flex-end', bottom: 5, left:5 }}>
            <Image
              source={require('../../../assets/images/Home/turn.png')}
              style={{ width: 13, height: 13 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        <Text style={[styles.text]}>
          {isExpanded
            ? 'When you click on the flashcard, the answer from the back side could appear here.'
            : question}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default QuestionComponent;

const styles = StyleSheet.create({
  container: {
    width: width * 0.88,
    borderColor: 'rgba(72, 72, 72, 1)',
    borderWidth: 1,
    borderRadius: 8,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 15,
    marginLeft: 20,
    position: 'relative',
    marginTop: 14,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: COLORS.heading,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Roboto-Regular',
  },
});
