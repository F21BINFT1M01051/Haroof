import { View, Text, Image, Dimensions, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
const { width, height } = Dimensions.get('window');
import { COLORS } from '../../../services/colors';
import { IMAGES } from '../../../services/images';

const OnBoardingTwentyFive = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate('HomeBasic'); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
          paddingHorizontal: Platform.OS == 'ios' ? 20 : 0,
        }}>
        <View>
         
          <View style={{ alignItems: 'center', marginTop: height * 0.3 }}>
            <Image
              source={IMAGES.verified}
              style={{ width: 70, height: 70 }}
              resizeMode="contain"
            />
            <Text style={{ color: COLORS.heading, fontFamily: 'Roboto-Regular', fontSize: 18, marginTop: 15 }}>{`Verified`}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoardingTwentyFive;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.backgroundColor,
    paddingTop: 15,
    paddingBottom: 0,
  },
});
