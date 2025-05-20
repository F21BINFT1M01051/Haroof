import React, { useEffect } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { Styles } from './Styles';
import BlackBtn from '../../../customcompoents/BlackBtn';
import ProgressBar from '../../../customcompoents/newComponents/ProgressBar';

const OnBoardingSeven = () => {
  const navigation = useNavigation();
 const {t} = useTranslation();
  // Shared values for sequential animation
  const animationValues = Array(2)
    .fill(0)
    .map(() => useSharedValue(0));

  useEffect(() => {
    // Trigger animations sequentially
    animationValues.forEach((value, index) => {
      value.value = withDelay(index * 300, withTiming(1, { duration: 800 }));
    });
  }, []);

  // Animated styles for each line
  const animatedStyle = (index) =>
    useAnimatedStyle(() => ({
      opacity: animationValues[index].value,
      transform: [{ translateY: 10 * (1 - animationValues[index].value) }],
    }));

  return (
    <SafeAreaView style={Styles.safeArea}>
      <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />

      <ProgressBar progressing={45} Back={() => navigation.goBack()} />
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
          {/* Animated Line 1 */}
          <Animated.Text style={[Styles.heading, animatedStyle(0)]}>
            {t("onBoardingSeven_h1")}
          </Animated.Text>
          
        </View>
      </ScrollView>

      <View style={{ bottom: 60 }}>
        <BlackBtn
          title={`${t('awsomeButton')}`}
          onPress={() => navigation.navigate('OnBoardingEight')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingSeven;
