import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  StatusBar,
  Text
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../customcompoents/newComponents/Button'
import { COLORS } from '../../../services/colors';

const OnBoardingOne = () => {
  // const { t } = useTranslation();
  const navigation = useNavigation();
  const [screenCount, setScreenCount] = useState(1)
  const animationValues = Array(7)
    .fill(0)
    .map(() => useSharedValue(0));

  useEffect(() => {
    animationValues.forEach((value, index) => {
      value.value = withDelay(index * 300, withTiming(1, { duration: 900 }));
    });
  }, []);

  const animatedStyles = animationValues.map((value) =>
    useAnimatedStyle(() => ({
      opacity: value.value,
      transform: [{ translateY: (1 - value.value) * -20 }],
    }))
  );

  const handleNextPress = () => {
    setScreenCount(screenCount + 1)
  };

  return (
    <SafeAreaView style={Styles.safeArea}>
      <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />
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
          <Animated.View>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Animated.Text
                style={[
                  Styles.textStyle,
                  {
                    fontFamily: 'Urbanist-Regular',
                    marginTop: 6,
                    marginRight: 10,
                  },
                ]}>
                {`Have an account?`}
              </Animated.Text>
              <Animated.Text
                style={[
                  Styles.textStyle,
                  { fontWeight: 'bold', fontFamily: 'Roboto', marginRight: 12, marginTop: 3 },
                ]}>
                {`Login`}

              </Animated.Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View>
            <Text style={Styles.heading}>{`Welcome to Haroof`}
            </Text>
          </Animated.View>

          <Animated.View>
            <Text
              style={{
                textAlign: 'justify',
                marginHorizontal: 30,
                fontSize: 13,
                lineHeight: 20,
                fontWeight: '400',
                color: COLORS.heading,
                fontFamily: 'Roboto-Regular',
                marginTop: 25,
              }}>
              {`Haroof is a pioneering reading and writing app designed to transform learning and enhance literacy skills.`}
            </Text>
          </Animated.View>
          <Animated.View>
            <Text
              style={{
                color: COLORS.heading,
                fontFamily: 'Roboto-ExtraBold',
                fontSize: 15,
                lineHeight: 20,
                textAlign: 'center',
                marginTop: 25,
                marginHorizontal: 20
              }}>
              {`Our platform offers two main features that can be used separately:`}
            </Text>
          </Animated.View>
          
          <Animated.View>
            <View style={{ marginHorizontal: 60, marginTop: 10, marginBottom: 10 }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 30
                }}>
                <Text
                  style={{
                    right: 90,
                    fontSize: 16,
                    lineHeight: 20,
                    letterSpacing: -0.01,
                    textAlign: 'justify',
                    color: COLORS.heading,
                    fontFamily: 'Bungee-Regular',

                  }}>
                  1.
                </Text>
                <Text
                  style={{
                    color: '#009379',
                    fontWeight: '600',
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                  }}>
                  {`Reading`}
                </Text>
              </View>
              <Text
                style={[
                  Styles.textStyle,
                  { textAlign: 'justify', marginLeft: 10, marginTop: 10 },
                ]}>
                {'The Reading feature in Haroof helps users improve their literacy skills by providing engaging and interactive content. It offers a variety of texts, stories, advanced passages.'}

              </Text>
            </View>
          </Animated.View>
          <Animated.View>

            <View style={{ marginHorizontal: 60, marginTop: 10, marginBottom: 10 }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 30,
                }}>
                <Text
                  style={{
                    right: 92,
                    fontSize: 16,
                    lineHeight: 20,
                    letterSpacing: -0.01,
                    textAlign: 'center',
                    color: COLORS.heading,
                    fontFamily: 'Bungee-Regular',
                  }}>
                  2.
                </Text>
                <Text
                  style={{
                    color: '#009379',
                    fontWeight: '600',
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                    textAlign: 'center',
                  }}>
                  {'Writing'}

                </Text>
              </View>
              <Text
                style={[
                  Styles.textStyle,
                  { textAlign: 'justify', marginLeft: 10, marginTop: 10 },
                ]}>
                {'The Writing feature empowers users to develop their writing skills through structured exercises and creative expression.'}
              </Text>
            </View>
          </Animated.View>
        </View>
      </ScrollView>

      {
        <View style={{ position: 'absolute', bottom: 30, left: 0, right: 0, alignItems: 'center', marginHorizontal: 20 }}>
          <Button title={'Next'} press={() => navigation.navigate('OnBoardingTwo')} buttonStyle={{ width: '100%' }} />
        </View>
      }



    </SafeAreaView >
  );
};

export default OnBoardingOne;
