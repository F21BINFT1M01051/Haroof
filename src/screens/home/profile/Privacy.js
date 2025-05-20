import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../services/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const PrivacyPolicies = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: 20}}>
          <AntDesign name="arrowleft" color={'white'} size={22} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Roboto-Medium',
            color: COLORS.heading,
            alignSelf: 'center',
          }}>
          Privacy Policies
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 24,
            fontFamily: 'Roboto-Regular',
            color: COLORS.heading,
            textAlign: 'left',
          }}>
          At Haroof, we value your privacy and are committed to protecting your
          personal information. Our app is designed to help users improve their
          reading and writing skills without collecting unnecessary personal
          data. We do not require you to provide sensitive information such as
          your name, email, or payment details to use the app. All activities
          and progress made within the app remain private and secure on your
          device.
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 24,
            fontFamily: 'Roboto-Regular',
            color: COLORS.heading,
            textAlign: 'left',
            marginTop: 16,
          }}>
          We do not sell, share, or transfer your data to any third parties.
          Haroof works entirely offline, which means your information is never
          sent to external servers or services.
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 24,
            fontFamily: 'Roboto-Regular',
            color: COLORS.heading,
            textAlign: 'left',
            marginTop: 16,
          }}>
          If any future updates require additional permissions or data, we’ll
          always ask for your clear consent and explain how your data will be
          handled. Your privacy and trust are very important to us.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyPolicies;

const styles = StyleSheet.create({
  container: {
    paddingTop: 41,
    flex: 1,
    paddingHorizontal: 14,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    padding: 15,
  },
});
