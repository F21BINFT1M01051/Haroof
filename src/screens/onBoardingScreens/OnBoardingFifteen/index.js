import React, { useEffect } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { Styles } from './Styles';
import BlackBtn from '../../../customcompoents/BlackBtn';
import ProgressBar from '../../../customcompoents/newComponents/ProgressBar';

import tick from '../../../../assets/icons/ob_tick.png';

const OnBoardingFifteen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  // Create shared values for animation
  const animationValues = Array.from({ length: 10 }, () => useSharedValue(0));

  useEffect(() => {
    animationValues.forEach((value, index) => {
      value.value = withDelay(index * 300, withTiming(1, { duration: 800 }));
    });
  }, []);

  const animatedStyle = (index) =>
    useAnimatedStyle(() => ({
      opacity: animationValues[index]?.value || 0,
      transform: [{ translateY: 20 * (1 - (animationValues[index]?.value || 0)) }],
    }));

  return (
    <SafeAreaView style={Styles.safeArea}>
      <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />
      <ProgressBar progressing={95} Back={() => navigation.goBack()} />

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
          <Animated.View style={[{ marginVertical: 20 }, animatedStyle(0)]}>
            <Text style={[Styles.heading, { marginHorizontal: 60 }]}>
              {t('onBoardingFifteen_h1')} {'\n'}
              {t('onBoardingFifteen_h2')}
            </Text>
          </Animated.View>

          <Animated.View style={animatedStyle(1)}>
            <Text
              style={[
                Styles.heading,
                {
                  marginHorizontal: 40,
                  marginTop: 30,
                  fontSize: 18,
                  lineHeight: 24,
                },
              ]}>
              <Text style={{ color: '#009379', fontSize: 19, lineHeight: 24 }}>
                {t('onBoardingFifteen_h3')} 
               </Text>
              {'\n'}
              {t('onBoardingFifteen_h4')} 
           </Text>
          </Animated.View>

          <View>
            {[
              {
                title: `${t('onBoardingFifteen_b1')}`,
                description: `${t('onBoardingFifteen_t1')}`
              },
              {
                title: `${t('onBoardingFifteen_b2')}`,
                description:`${t('onBoardingFifteen_t2')}`
              },
              {
                title: `${t('onBoardingFifteen_b3')}`,
                description:`${t('onBoardingFifteen_t3')}`
              },
              {
                title: `${t('onBoardingFifteen_b4')}`,
                description:`${t('onBoardingFifteen_t4')}`
              },
            ].map((item, index) => (
              <Animated.View
                key={index}
                style={[
                  {
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginHorizontal: 30,
                    marginTop: 20,
                  },
                  animatedStyle(index + 2), // Apply animation to each item starting from index 2
                ]}>
                <Image
                  source={tick}
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 2,
                  }}
                  resizeMode={'cover'}
                />
                <Text
                  style={[Styles.textStyle, { textAlign: 'start', marginHorizontal: 10 }]}>
                  <Text style={{ fontFamily: 'Roboto-Bold' }}>{item.title}</Text> {item.description}
                </Text>
              </Animated.View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View>
        <BlackBtn
          title={t('nextButton')}
          buttonStyle={{ marginBottom: 60 }}
          onPress={() => navigation.navigate('OnBoardingSixten')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingFifteen;
