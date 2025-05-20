import React, { useEffect } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Styles } from './Styles';
import BlackBtn from '../../../customcompoents/BlackBtn';
import ProgressBar from '../../../customcompoents/newComponents/ProgressBar';
import card from '../../../../assets/icons/ob_card.png';
import ProfileSection from '../../../customcompoents/newComponents/HomeScreenComponents/ProfileSection';
import ProgressBarTwo from '../../../customcompoents/newComponents/ProgressBarTwo';
import { useTranslation } from 'react-i18next';
const OnBoardingFive = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  // Shared animation values for the elements
  const animationValues = Array(4) // 3 elements: Heading, Card, and Text
    .fill(0)
    .map(() => useSharedValue(0));

  // Trigger animations on mount
  useEffect(() => {
    animationValues.forEach((value, index) => {
      value.value = withDelay(index * 300, withTiming(1, { duration: 800 }));
    });
  }, []);

  // Create animated styles for each element
  const animatedStyle = (index) =>
    useAnimatedStyle(() => ({
      opacity: animationValues[index].value,
      transform: [{ translateY: 20 * (1 - animationValues[index].value) }], // Fade-in and slide-up effect
    }));

  return (
    <SafeAreaView style={Styles.safeArea}>
      <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />
      <ProgressBar progressing={30} Back={() => navigation.goBack()} />

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
        <View>
          {/* Animated Heading */}
          <Animated.View style={animatedStyle(0)}>
            <View style={{ marginVertical: 20 }}>
              <Text style={Styles.heading}>{t('onBoardingFive_h1')}</Text>
            </View>
          </Animated.View>
          <Animated.View style={animatedStyle(1)}>

            <View style={{ alignSelf: 'center', right: 16, top: 24 }}>

              <ProfileSection name={'Sam Smith'} image={require('../../../../assets/images/Home/profile.png')} progress={25} textColor={'white'} notifications={false} />
            </View>
            <View>
              <ProgressBarTwo subject={'Mathematik'} progressing={34} fill={'red'} disabled={true} />
            </View>
            <View style={{ bottom: 20 }}>
              <ProgressBarTwo subject={'German'} progressing={23} fill={'rgba(171, 64, 242, 1)'} disabled={true} />

            </View>
          </Animated.View>


          <Animated.View style={animatedStyle(2)}>
            <View>
              <Text
                style={[
                  Styles.textStyle,
                  {
                    textAlign: 'center',
                    marginHorizontal: 21,
                    marginTop: 40,
                  },
                ]}>
                {t('onBoardingFive_h2')}
              </Text>
            </View>
          </Animated.View>
        </View>
      </ScrollView>

      {/* Static Button */}
      <View style={{ marginBottom: 60 }}>
        <BlackBtn title={t('nextButton')} onPress={() => navigation.navigate('OnBoardingSix')} />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingFive;
