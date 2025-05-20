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
import { useTranslation } from 'react-i18next';
import ProgressBar from '../../../customcompoents/newComponents/ProgressBar';

const OnBoardingFour = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const animationValues = Array(7)
       .fill(0)
       .map(() => useSharedValue(0));
   
     useEffect(() => {
       animationValues.forEach((value, index) => {
         value.value = withDelay(index * 300, withTiming(1, { duration: 900 }));
       });
     }, []);
   
     const animatedStyle = animationValues.map((value) =>
       useAnimatedStyle(() => ({
         opacity: value.value,
         transform: [{ translateY: (1 - value.value) * -20 }],
       }))
     );
     
  return (
    <SafeAreaView style={Styles.safeArea}>
      <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />
      <ProgressBar progressing={21} Back={() => navigation.goBack()} />
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
          paddingHorizontal: Platform.OS == 'ios' ? 20 : 0,
        }}>
        <View>
          <View style={{ marginVertical: 25 }}>
            <Text style={[Styles.heading, { marginHorizontal: 40 }]}>
              {t('onBoardingFour_h1')} {'\n'}
              {t('onBoardingFour_h2')}
            </Text>
          </View>
          <View>
            {[
              {
                title: `${t('onBoardingFour_t1')}`,
                description: `${t('onBoardingFour_b1')}`
              },
              {
                title: `${t('onBoardingFour_t2')}`,
                description: `${t('onBoardingFour_b2')}`
              },
              {
                title: `${t('onBoardingFour_t3')}`,
                description: `${t('onBoardingFour_b3')}`
              },
              {
                title: `${t('onBoardingFour_t4')}`,
                description: `${t('onBoardingFour_b4')}`
              },
              {
                title: `${t('onBoardingFour_t5')}`,
                description: `${t('onBoardingFour_b5')}`
              },
            ].map((item, index) => (
              <Animated.View
                key={index}
                style={[
                  { flexDirection: 'row', marginHorizontal: 30, marginTop: 22 },
                  animatedStyle(index),
                ]}>
                <Image
                  source={tick}
                  style={{
                    width: 21,
                    height: 21,
                    marginTop: 2,
                    right:10
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={[
                    Styles.textStyle,
                    { textAlign: 'start', marginHorizontal: 0, lineHeight: 18, },
                  ]}>
                  <Text style={{ fontFamily: 'Roboto-Bold' }}>{item.title},{`\n`}</Text>
                  {item.description}
                </Text>
              </Animated.View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={{ marginBottom: 60 }}>
        <BlackBtn
          title={t('nextButton')}
          onPress={() => navigation.navigate('OnBoardingFive')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingFour;
