import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
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
import tick from '../../../assets/icons/ob_tick.png';
import Button from '../../../customcompoents/newComponents/Button';

const OnBoardingThree = () => {
  const navigation = useNavigation();
  const animationValues = Array(7)
       .fill(0)
       .map(() => useSharedValue(0));
   
     useEffect(() => {
       animationValues.forEach((value, index) => {
         value.value = withDelay(index * 300, withTiming(1, { duration: 1000 }));
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
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
          paddingHorizontal: Platform.OS === 'ios' ? 20 : 0,
        }}
      >
        <View>
          <View style={{ marginTop: 25, marginBottom:40 }}>
            <Animated.View>
              <Text style={[Styles.heading, { marginHorizontal: 30, lineHeight: 30 }]}>
                <Text style={{ color: '#009379' }}>Haroof </Text>
               offers more than traditional Learning Apps 
                </Text>
            </Animated.View>
          </View>

          {[
            {
              text: `Allows authors to write and publish their books online. Eliminates the need for traditional publishing intermediaries`,
              bold: `Digital Book Publishing`,
            },
            {
              text: `Provides a built-in digital book reader. Uses encryption to protect books from unauthorized copying`,
              bold: `Secure Digital Reading`,
            },
            {
              text: `Readers access books through a subscription plan. Authors earn a share of the subscription revenue.`,
              bold: `Subscription-Based Model`,
            },
            {
              text: `Authors track their book sales and earnings. Offers a royalty-based system for fair compensation.`,
              bold: `Author Monetization`,
            },
            {
              text: `Browse, search, and read books across multiple genres.Includes bookmarking, book recommendations, and user reviews.`,
              bold: `Reader Features`,
            },
          ].map((item, index) => (
            <Animated.View
              key={index}
              style={[ { flexDirection: 'row', alignItems: 'flex-start', marginHorizontal: 20, marginTop: 30 }]}
            >
              <Image source={tick} style={{ width: 21, height: 21, marginTop: 5 }} resizeMode="contain" />
              <Text style={[Styles.textStyle, { flex: 1, marginLeft: 10, textAlign: 'left', lineHeight: 18 , fontSize:14}]}>
                <Text style={{ fontFamily: 'Roboto-Bold' }}>{item.bold}</Text> {item.text}
              </Text>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
      <View style={{ marginBottom: 40 }}>
        <Button
          title={`Next`}
          press={() => navigation.navigate('OnBoardingSixten')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingThree;
