import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, Animated, Text, SafeAreaView, ScrollView } from 'react-native';
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import { COLORS } from '../../../../services/colors';
import { useTranslation } from 'react-i18next';
// import { COLORS } from '../../../../services/utils/COLORS';

const { width } = Dimensions.get('window');

const OnBoardingTwentySix = ({ navigation }) => {
  const [percent, setPercent] = useState(0);
  const [btnShow, setBtnShow] = useState(false);
  const anim = useRef(new Animated.Value(0)).current;
  const {t} = useTranslation();

  useEffect(() => {
    const onAnimate = () => {
      anim.addListener(({ value }) => {
        setPercent(parseInt(value, 10));
      });

      Animated.timing(anim, {
        toValue: 100,
        duration: 5000,
        useNativeDriver: false,
      }).start(() => {
        setBtnShow(true);
        setTimeout(()=> {
          navigation.navigate('OnBoardingTwentySeven')
        }, 1500)
      });
    };

    onAnimate();

    // Clean up the animation listener when the component unmounts
    return () => {
      anim.removeAllListeners();
    };
  }, [anim, navigation]);

  const animatedWidth = anim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

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
        <View style={styles.container}>
          <View style={{marginHorizontal:10}}>
            <PrimaryText
              Heading={`${t('onBoardingTwentySix_t1')}`}
              style={{fontSize:22,lineHeight:32}}
            />
          </View>
          {btnShow ? <Text style={{ color: '#009379', textAlign: 'center', marginTop: '20%', fontSize: 14, fontWeight: "800", letterSpacing:5, fontFamily:'Roboto-Regular'}}>{t('onBoardingTwentySix_t2')}</Text> : <View style={styles.progressBarContainer}>
            <Animated.View
              style={[
                styles.progressBar,
                { width: animatedWidth },
              ]}
            />
          </View>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoardingTwentySix;

const styles = StyleSheet.create({
  container: {
    padding: width * 0.04,
    paddingHorizontal: width * 0.06,
    flex: 1,
    justifyContent: 'center',
  },
  progressBarContainer: {
    width: width*0.78,
    height: 9,
    backgroundColor: 'rgba(32, 34, 55, 1)',
    alignSelf: 'center',
    marginTop: "20%",
    borderRadius: 3,
  },
  progressBar: {
    height: 9,
    backgroundColor: '#009379',
    borderRadius: 5,
  },
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.backgroundColor,
    paddingTop: 15,
    paddingBottom: 0,
  },
});
