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

const DataProtection = () => {
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
            fontFamily: 'Poppins-Medium',
            color: COLORS.heading,
            alignSelf: 'center',
          }}>
          Data Protection
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Roboto-Bold',
            color: COLORS.heading,
            textAlign: 'left',
          }}>
          Offline App:
          <Text
            style={{
              fontSize: 14,
              lineHeight: 24,
              fontFamily: 'Roboto-Regular',
              color: COLORS.heading,
              textAlign: 'left',
            }}>
            {' '}
            All data stays on your device — no internet connection is required
            for core features.
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Roboto-Bold',
            color: COLORS.heading,
            textAlign: 'left',
            marginTop: 20,
          }}>
          No Data Sharing:
          <Text
            style={{
              fontSize: 14,
              lineHeight: 24,
              fontFamily: 'Roboto-Regular',
              color: COLORS.heading,
              textAlign: 'left',
            }}>
            {' '}
            We do not share, sell, or transmit any user data to other companies
            or services.
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Roboto-Bold',
            color: COLORS.heading,
            textAlign: 'left',
            marginTop: 20,
          }}>
          Encryption for Writers:
          <Text
            style={{
              fontSize: 14,
              lineHeight: 24,
              fontFamily: 'Roboto-Regular',
              color: COLORS.heading,
              textAlign: 'left',
            }}>
            {' '}
            Writers’ book content is fully encrypted in the app to prevent
            unauthorized copying or theft.
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Roboto-Bold',
            color: COLORS.heading,
            textAlign: 'left',
            marginTop: 20,
          }}>
          Decryption Only Within the App:
          <Text
            style={{
              fontSize: 14,
              lineHeight: 24,
              fontFamily: 'Roboto-Regular',
              color: COLORS.heading,
              textAlign: 'left',
            }}>
            {' '}
            Encrypted books can only be decrypted and read through the Haroof
            app itself, ensuring content protection.
          </Text>
        </Text>

        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Roboto-Bold',
            color: COLORS.heading,
            textAlign: 'left',
            marginTop: 20,
          }}>
          Ad-Free and Tracker-Free:
          <Text
            style={{
              fontSize: 14,
              lineHeight: 24,
              fontFamily: 'Roboto-Regular',
              color: COLORS.heading,
              textAlign: 'left',
            }}>
            {' '}
            Haroof is completely ad-free and does not use third-party trackers.
          </Text>
        </Text>

        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Roboto-Bold',
            color: COLORS.heading,
            textAlign: 'left',
            marginTop: 20,
          }}>
          Transparent Updates:
          <Text
            style={{
              fontSize: 14,
              lineHeight: 24,
              fontFamily: 'Roboto-Regular',
              color: COLORS.heading,
              textAlign: 'left',
            }}>
            {' '}
            If future versions require new permissions or data access, users
            will be clearly informed and asked for consent.
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DataProtection;

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
