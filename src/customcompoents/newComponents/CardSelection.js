import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, useAnimatedReaction, runOnJS } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { numberOfFlashCards } from '../../../redux/AiRedux/setFlashCards/Action';

const { width } = Dimensions.get('window');
const BAR_WIDTH = width * 0.85; // Width of the bar

const FlashCardSelectionComponent = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [text, setText] = useState('');
  const X = useSharedValue(0); // Current position of the circle
  const maxRange = 40; // Maximum steps
  const stepSize = (BAR_WIDTH - 20) / maxRange; // Size of each step
  const previousTranslationX = useSharedValue(0); // Store previous movement

  const debouncedDispatch = debounce((value) => {
    dispatch(numberOfFlashCards(value));
  }, 500);

  // Gesture handler for dragging
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = X.value;
    },
    onActive: (event, ctx) => {
      const delta = event.translationX - previousTranslationX.value;

      // Smooth movement during drag
      if (delta > 0 && X.value < BAR_WIDTH - 20) {
        X.value = Math.min(ctx.startX + Math.round(event.translationX / stepSize) * stepSize, BAR_WIDTH - 20);
      } else if (delta < 0 && X.value > 0) {
        X.value = Math.max(ctx.startX + Math.round(event.translationX / stepSize) * stepSize, 0);
      }
      previousTranslationX.value = event.translationX;
    },
    onEnd: () => {
      previousTranslationX.value = 0; // Reset after movement ends
    },
  });

  // Tap gesture handler
  const onTap = (event) => {
    const tappedX = event.nativeEvent.x; // Tap position
    const snappedValue = Math.round(tappedX / stepSize) * stepSize; // Snap to closest step
    X.value = Math.min(Math.max(snappedValue, 0), BAR_WIDTH - 20); // Clamp values within range
  };

  // Update displayed values dynamically
  useAnimatedReaction(
    () => X.value,
    (xValue) => {
      const newValue = Math.round((xValue / (BAR_WIDTH - 20)) * maxRange);
      runOnJS(setValue)(newValue); // Update value

      // Set text dynamically
      if (newValue >= 10) {
        runOnJS(setText)(props.text);
      } else {
        runOnJS(setText)('');
      }

      // Dispatch value with debounce
      runOnJS(debouncedDispatch)(newValue);
    }
  );

  
  // Filled bar animation
  const filledBarStyle = useAnimatedStyle(() => ({
    width: X.value + 20,
  }));

  // Circle animation
  const circleAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: X.value }],
  }));

  // Text position animation
  const textPosition = useAnimatedStyle(() => ({
    transform: [{ translateX: X.value / 2 }],
  }));

  const textVisibility = useAnimatedStyle(() => ({
    opacity: X.value > 0 ? 1 : 0,
  }));

  return (
    <View>
      {/* Tap Gesture Handler */}
      <TapGestureHandler onHandlerStateChange={onTap}>
        <Animated.View>
          <View style={styles.barContainer}>
            {/* Filled Bar */}
            <Animated.View style={[filledBarStyle, styles.gradientFillContainer]}>
              <LinearGradient
                colors={['rgba(141, 207, 195, 1)', 'rgba(16, 154, 129, 1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientFill}
              />
            </Animated.View>

            {/* Pan Gesture for smooth dragging */}
            <PanGestureHandler onGestureEvent={gestureHandler}>
              <Animated.View style={[styles.circle, circleAnimatedStyle]}>
                <View style={styles.circleRed} />
              </Animated.View>
            </PanGestureHandler>

            {/* Text inside bar */}
            <Animated.View style={[styles.textContainer, textPosition, textVisibility]}>
              <Text style={styles.text}>{value} {text} </Text>
            </Animated.View>
          </View>
        </Animated.View>
      </TapGestureHandler>

      {/* Labels for steps */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 6 }}>
        <Text style={styles.label}>10</Text>
        <Text style={styles.label}>20</Text>
        <Text style={styles.label}>30</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    width: BAR_WIDTH,
    height: 17,
    backgroundColor: 'rgba(204, 204, 204, 1)',
    borderRadius: 9,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
  },
  gradientFillContainer: {
    position: 'absolute',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: 0,
  },
  gradientFill: {
    height: '100%',
    borderRadius: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },
  circleRed: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(16, 154, 129, 1)',
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 2,
    alignItems: 'center',
    zIndex: 2,
  },
  text: {
    fontSize: 11,
    color: 'white',
  },
  label: {
    color: 'rgba(129, 129, 129, 1)',
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '600',
  },
});

export default FlashCardSelectionComponent;
