import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, Platform } from 'react-native';
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import { COLORS } from '../../../../services/colors';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
// import { COLORS } from '../../../../services/utils/COLORS';

const { width, height } = Dimensions.get('window');

const OnBoardingTwentySeven = () => {
  const navigation = useNavigation();
   const {t} = useTranslation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomeScreenBasic'); // Replace 'NextScreenName' with your next screen's name
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts before the timeout
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
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
        <View style={styles.container}>
          <View style={{ marginTop: height * 0.4 }}>
            <PrimaryText Heading={`${t('onBoardingTwentySeven_t1')}`} style={{ fontSize: 24 }} />
            <PrimaryText Heading={`${t('onBoardingTwentySeven_t2')}`}  style={{ fontSize: 24}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoardingTwentySeven;

const styles = StyleSheet.create({
  container: {
    padding: width * 0.04,
    paddingHorizontal: width * 0.06,
  },
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.backgroundColor,
    paddingTop: 15,
    paddingBottom: 0,
  },
});
