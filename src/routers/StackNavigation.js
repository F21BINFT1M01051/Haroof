import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';
import SplashOne from '../screens/SplashScreens/SplashOne';
import SplashTwo from '../screens/SplashScreens/SplashTwo';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../screens/authscreens/SignIn';
import ForgetPasswordV2 from '../screens/authscreens/ForgotPassword/index';
import OTPV2 from '../screens/authscreens/OTP/index';
import NewPasswordV2 from '../screens/authscreens/NewPassword/index';
import OnBoardingOne from '../screens/onBoardingScreens/OnBoardingOne';
import OnBoardingTwo from '../screens/onBoardingScreens/OnBoardingTwo';
import OnBoardingThree from '../screens/onBoardingScreens/OnBoardingThree';
import OnBoardingSixten from '../screens/onBoardingScreens/OnBoardingSixten';
import OnBoardingSeventeen from '../screens/onBoardingScreens/OnBoardingSeventeen';
import OnBoardingTwenty from '../screens/onBoardingScreens/OnBoardingTwenty';
import OnBoardingTwentyOne from '../screens/onBoardingScreens/OnBoardingTwentyOne';
import OnBoardingTwentyTwo from '../screens/onBoardingScreens/OnBoardingTwentyTwo';
import OnBoardingTwentyThree from '../screens/onBoardingScreens/OnBoardingTwentyThree';
import OnBoardingTwentyFour from '../screens/onBoardingScreens/OnBoardingTwentyFour';
import OnBoardingTwentyFive from '../screens/onBoardingScreens/OnBoardingTwentyFive';
import BottomNavigationScreen from './BottomTabNavigator';
import BookInfo from '../screens/home/bookread/BookInfo';
import TopRated from '../screens/home/viewAll/TopRated';
import CategoryDetailScreen from '../screens/home/bookcategory/CategoryDetails';
import EditProfileV2 from '../screens/home/profile/EditProfile';
import Profile from '../screens/home/Profile';
import FavouriteBooks from '../screens/home/profile/FavouriteBooks';
import ChangePassword from '../screens/home/profile/ChangePassword';
import PrivacyPolicies from '../screens/home/profile/Privacy';
import DataProtection from '../screens/home/profile/DataProtection';
import Read from '../screens/home/bookread/Read';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashOne"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          cardStyle: {backgroundColor: 'transparent'},
          headerBackTitle: ' ',
          headerBackTitleStyle: {
            color: '#000',
          },
        }}
        headerMode="screen">
        <Stack.Screen
          name="SplashOne"
          component={SplashOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashTwo"
          component={SplashTwo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordV2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTPV2"
          component={OTPV2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPasswordV2"
          component={NewPasswordV2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingOne"
          component={OnBoardingOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingTwo"
          component={OnBoardingTwo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingThree"
          component={OnBoardingThree}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingSixten"
          component={OnBoardingSixten}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingSeventeen"
          component={OnBoardingSeventeen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingTwenty"
          component={OnBoardingTwenty}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingTwentyOne"
          component={OnBoardingTwentyOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingTwentyTwo"
          component={OnBoardingTwentyTwo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingTwentyThree"
          component={OnBoardingTwentyThree}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingTwentyFour"
          component={OnBoardingTwentyFour}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingTwentyFive"
          component={OnBoardingTwentyFive}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeBasic"
          component={BottomNavigationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookInfo"
          component={BookInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopRated"
          component={TopRated}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CategoryDetail"
          component={CategoryDetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileV2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Favourites"
          component={FavouriteBooks}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrivacyPolicies"
          component={PrivacyPolicies}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DataProtection"
          component={DataProtection}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Read"
          component={Read}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
