import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/home/Profile.js';
import HomeBasic from '../screens/home/HomeBasic.js';
import Writings from '../screens/home/Writings.js';
import Readings from '../screens/home/Readings.js';
import Categories from '../screens/home/Categories.js';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
const COLORS = {
  primary: 'white',
  secondary: 'rgba(255, 255, 255, 0.5)',
  headingblack: '#262626',
  black: '#011114',
  white: '#ffffff',
  grey: '#858585',
  para: '#1E1E1E',
  bgcolor: '#343434',
  placeHolderColor: '#858585',
  red: '#D42A2A',
  bgGrey: '#FCFCFC',
  philippineGray: '#8B8B8B',
};

const Tab = createBottomTabNavigator();

export default function BottomNavigationScreen() {
  return (
    <Tab.Navigator
      initialRouteName="HomeBasic"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: '#24262F',
          overflow: 'hidden',
          height: Platform.OS === 'ios' ? 92 : 78,
          backgroundColor: '#24262F',
          paddingTop: 22,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="HomeBasic"
        component={HomeBasic}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.iconFlex}>
              <Feather
                name="home"
                size={22}
                color={focused ? COLORS.primary : COLORS.secondary}
              />
              <Text
                style={[
                  styles.tabtext,
                  {color: focused ? COLORS.primary : COLORS.secondary},
                ]}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Readings"
        component={Readings}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.iconFlex}>
              <Entypo
                name="book"
                size={22}
                color={focused ? COLORS.primary : COLORS.secondary}
              />

              <Text
                style={[
                  styles.tabtext,
                  {color: focused ? COLORS.primary : COLORS.secondary},
                ]}>
                My Readings
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Writings"
        component={Writings}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.iconFlex}>
              <AntDesign
                name="form"
                size={22}
                color={focused ? COLORS.primary : COLORS.secondary}
              />
              <Text
                style={[
                  styles.tabtext,
                  {color: focused ? COLORS.primary : COLORS.secondary},
                ]}>
                My Writings
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.iconFlex}>
              <Feather
                name="layers"
                size={22}
                color={focused ? COLORS.primary : COLORS.secondary}
              />
              <Text
                style={[
                  styles.tabtext,
                  {color: focused ? COLORS.primary : COLORS.secondary},
                ]}>
                Categories
              </Text>
            </View>
          ),
        }}
      />

      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconFlex}>
              <Image
                source={focused ? require('../assets/images/Home/profileActive.png') : require('../assets/images/Home/profile1.png')}
                resizeMode="contain"
                style={{ width: 24, height: 22 }}
              />
              <Text style={[styles.tabtext, { color: focused ? COLORS.primary : COLORS.secondary }]}>
                Profile
              </Text>
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabtext: {
    fontSize: 10,
    textAlign: 'center',
    paddingTop: 8,
    fontFamily: 'Roboto-Medium',
  },
  iconFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 5,
    // paddingVertical: 8,
  },
});
