import React, { useEffect } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '../../../customcompoents/newComponents/ProgressBar';
import BlackBtn from '../../../customcompoents/BlackBtn';
import { useTranslation } from 'react-i18next';
const OnBoardingThirteen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  // Shared values for animation
  const animationValues = Array(3) // 3 elements to animate (heading, description, and button)
    .fill(0)
    .map(() => useSharedValue(0));

  useEffect(() => {
    // Trigger animations sequentially
    animationValues.forEach((value, index) => {
      value.value = withDelay(index * 300, withTiming(1, { duration: 800 }));
    });
  }, []);

  // Animated styles for each element
  const animatedStyle = (index) =>
    useAnimatedStyle(() => ({
      opacity: animationValues[index].value,
      transform: [{ translateY: 10 * (1 - animationValues[index].value) }],
    }));

  return (
    <SafeAreaView style={Styles.safeArea}>
      <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />
      <ProgressBar progressing={80} Back={() => navigation.goBack()} />

      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
          paddingHorizontal: Platform.OS === 'ios' ? 20 : 0,
        }}>
        <View style={{ marginVertical: '80%' }}>
          {/* Heading */}
          <Animated.View style={animatedStyle(0)}>
            <Text style={Styles.heading}>
              {t('onBoardingThirteen_h1')}
            </Text>
          </Animated.View>

          {/* Subheading */}
          <Animated.View style={animatedStyle(1)}>
            <Text style={[Styles.heading, { top: 20 }]}>
              {t('onBoardingThirteen_h2')}

            </Text>
          </Animated.View>
        </View>
      </ScrollView>

      {/* Button */}
      <View style={[{ bottom: 60 }]}>
        <BlackBtn
          title={t('nextButton')}

          onPress={() => navigation.navigate('OnBoardingFourteen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingThirteen;
