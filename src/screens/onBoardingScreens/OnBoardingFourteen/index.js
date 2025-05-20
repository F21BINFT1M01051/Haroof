import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import BlackBtn from '../../../customcompoents/BlackBtn';
import tick from '../../../../assets/icons/ob_tick.png';
import ProgressBar from '../../../customcompoents/newComponents/ProgressBar';
import { useTranslation } from 'react-i18next';
const OnBoardingFourteen = () => {
  const navigation = useNavigation();
const {t} = useTranslation();
  // Ensure each element gets its own unique `useSharedValue`
  const animationValues = Array.from({ length: 10 }, () => useSharedValue(0));

  useEffect(() => {
    animationValues.forEach((value, index) => {
      value.value = withDelay(index * 300, withTiming(1, { duration: 800 }));
    });
  }, []);

  const animatedStyle = (index) =>
    useAnimatedStyle(() => ({
      opacity: animationValues[index].value,
      transform: [{ translateY: 20 * (1 - animationValues[index].value) }],
    }));

  return (
    <SafeAreaView style={Styles.safeArea}>
      <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />
      <ProgressBar progressing={90} Back={() => navigation.goBack()} />
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
          <View style={{ marginVertical: 20 }}>
            <Text style={[Styles.heading, { marginHorizontal: 60 }]}>
              {t('onBoardingFourteen_h1')} {"\n"}
              {t('onBoardingFourteen_h2')}
            </Text>
            <Animated.View style={animatedStyle(0)}>
              <Text
                style={[
                  Styles.textStyle,
                  { textAlign: 'justify', margin: 20, lineHeight: 22, marginHorizontal: 25 },
                ]}>
                  {t('onBoardingFourteen_h3')}
              </Text>
            </Animated.View>
            <Animated.View style={[{ marginTop: 12 }, animatedStyle(1)]}>
              <Text style={[Styles.heading, { marginHorizontal: 40 }]}>
                <Text style={{ color: '#009379' }}>{t('onBoardingFourteen_h4')} </Text>{t('onBoardingFourteen_h5')}
              </Text>
            </Animated.View>
          </View>
          {[
            {
              title:`${t('onBoardingFourteen_b1')}`,
              description:`${t('onBoardingFourteen_t1')}`
            },
            {
              title: `${t('onBoardingFourteen_b2')}`,
              description:`${t('onBoardingFourteen_t2')}`
            },
            {
              title: `${t('onBoardingFourteen_b3')}`,
              description:`${t('onBoardingFourteen_t3')}`
            },
            {
              title: `${t('onBoardingFourteen_b4')}`,
              description:`${t('onBoardingFourteen_t4')}`
            },
          ].map((item, index) => (
            <Animated.View
              key={index}
              style={[
                { flexDirection: 'row', alignItems: 'flex-start', marginHorizontal: 30, marginTop: 10 },
                animatedStyle(index + 2),
              ]}>
              <Image
                source={tick}
                style={{
                  width: 21,
                  height: 21,
                  marginTop: 5,
                }}
                resizeMode="contain"
              />
              <Text style={[Styles.textStyle, { textAlign: 'start', marginHorizontal: 10 }]}>
                <Text style={{  fontFamily: 'Roboto-Bold' }}>{item.title},</Text> {item.description}
              </Text>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
      <View style={{ marginBottom: 40 }}>
        <BlackBtn title={t('nextButton')} onPress={() => navigation.navigate('OnBoardingFifteen')} />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingFourteen;
