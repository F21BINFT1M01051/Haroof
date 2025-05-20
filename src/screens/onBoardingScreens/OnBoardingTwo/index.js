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
// import { Styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../customcompoents/newComponents/Button'
import { COLORS } from '../../../services/colors';
import { Styles } from '../OnBoardingOne/Styles';

const OnBoardingTwo = () => {
  const navigation = useNavigation();

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
            <View style={{ marginVertical: 10 }}>
              <Text style={[Styles.heading ,{fontSize:20}]}>
              Haroof – Empowering Readers and Writers in the Digital Era
              </Text>
            </View>
          </Animated.View>

          <Animated.View>
            <View>
              <Text
                style={[
                  Styles.textStyle,
                  { textAlign: 'justify', marginHorizontal: 34 , lineHeight:24, marginTop:20},
                ]}>
                Our mission is to make reading and writing more accessible and enjoyable for everyone. Haroof provides a secure and user-friendly platform where authors can publish their books digitally and readers can explore a vast collection of literature. Once you sign up, you can browse through various categories, discover new books, and enjoy a seamless reading experience. Authors can upload their manuscripts, set pricing, and track their sales with ease. Readers can bookmark, review, and download books for offline access. With Haroof’s subscription model, users get unlimited access to a growing digital library while ensuring fair compensation for authors. Whether you're a reader looking for your next favorite book or a writer ready to share your work with the world, Haroof is designed to support and enhance your literary journey              </Text>
            </View>
          </Animated.View>
        </View>
      </ScrollView>

      <View style={{ marginBottom: 40 }}>
        <Button
          title={`Next`}
          press={() => navigation.navigate('OnBoardingThree')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingTwo;
