import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import SecondaryText from '../../../customcompoents/newComponents/SecondaryText';
import Button from '../../../customcompoents/newComponents/Button';
import {COLORS} from '../../../services/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');

const OnBoardingSixten = props => {
  const navigation = useNavigation();
  const animationValues = Array(7)
    .fill(0)
    .map(() => useSharedValue(0));

  useEffect(() => {
    animationValues.forEach((value, index) => {
      value.value = withDelay(index * 300, withTiming(1, {duration: 900}));
    });
  }, []);

  const animatedStyle = animationValues.map(value =>
    useAnimatedStyle(() => ({
      opacity: value.value,
      transform: [{translateY: (1 - value.value) * -20}],
    })),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />

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
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
            <AntDesign name="arrowleft" color={'white'} size={22} />
          </TouchableOpacity>
          <View>
            <View style={{marginTop: height * 0.25}}>
              <PrimaryText
                Heading={`Start now with Haroof’s Reading and Writing features — completely free!`}
                style={[
                  {
                    color: COLORS.greenText,
                    fontSize: 16,
                    marginHorizontal: 40,
                    lineHeight: 20,
                  },
                ]}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: width * 0.04,
                marginTop: height * 0.03,
              }}>
              <View style={{}}>
                <SecondaryText
                  text={`Try our App, Haroof, for free and without any charges`}
                  style={[{fontSize: 16}]}
                />
                <SecondaryText
                  text={`No payment or subscription required!`}
                  style={[
                    {fontFamily: 'Roboto-Bold', fontSize: 16, marginTop: 10},
                  ]}
                />
              </View>
              <SecondaryText
                text={`Enjoy unlimited access to all features at no cost.`}
                style={[{fontSize: 16, marginTop: 10}]}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{bottom: 40, alignItems: 'center'}}>
        <Button
          title={`Start Now`}
          press={() => props.navigation.navigate('OnBoardingTwentyTwo')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingSixten;

const styles = StyleSheet.create({
  container: {
    // Additional container styling can be added here if needed
  },
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.backgroundColor,
    padding: 15,
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
