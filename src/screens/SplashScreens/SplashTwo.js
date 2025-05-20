import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  BackHandler,
  StatusBar
} from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from '../../services/colors';
import Button from '../../customcompoents/newComponents/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const { width, height } = Dimensions.get('window');

const SplashTwo = () => {
  const navigation = useNavigation();
  const backAction = () => {
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />

      <View style={styles.container}>
        <View style={{ marginTop: 70, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 28 }} >Haroof</Text>
            <FontAwesome5 name='book-reader' size={20} color={'white'} style={{ left: 6 }} />
          </View>
          <Text
            style={{
              color: 'rgba(128, 141, 158, 1)',
              fontFamily: 'Urbanist-Regular',
              fontSize: 14,
              textAlign: 'center',
              marginHorizontal: 70
            }}>
            Unlock the Power of Reading & Writing in One App!
          </Text>
        </View>

        <View style={{ alignItems: 'center', marginTop: -34 }}>
          {/* <SVG_IMAGES.Splash /> */}
          <Image
            source={require('../../assets/images/Home/SplashImg.png')}
            resizeMode="contain"
            style={{
              width: width * 1,
              height: height * 0.65,
              position: 'relative',
              marginTop: -68,
            }}
          />
          <Image
            source={require('../../assets/images/Home/SplashImg2.png')}
            resizeMode="contain"
            style={{
              width: 450,
              height: 230,
              position: 'absolute',
              marginTop: 90,
            }}
          />
        </View>
        <View style={{ marginTop: -90 }}>
          <Button
            title={`Do'nt have an account? SignUp`}
            press={() => navigation.navigate('OnBoardingOne')}
            textStyle={{ fontFamily: 'Roboto-Medium', fontSize: 16 }}
          />
          <Button
            title={'Sign In'}
            style={{ backgroundColor: 'rgba(11, 11, 11, 1)', marginTop: 20 }}
            press={() => navigation.navigate('SignIn')}
            textStyle={{ fontFamily: 'Roboto-Medium', fontSize: 16 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashTwo;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
});
