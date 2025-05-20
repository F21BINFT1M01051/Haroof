import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { COLORS } from '../../../../services/colors';
import { Styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import BlackBtn from '../../../customcompoents/BlackBtn';
import RadarChart from '../../../customcompoents/newComponents/SpiderGraph';
import ProgressBar from '../../../customcompoents/newComponents/ProgressBar';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');

const OnBoardingSix = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const animationValues = Array(3)
    .fill(0)
    .map(() => useSharedValue(0));

  useEffect(() => {
    animationValues.forEach((value, index) => {
      value.value = withDelay(index * 300, withTiming(1, { duration: 800 }));
    });
  }, []);

  const animatedStyle = (index) =>
    useAnimatedStyle(() => ({
      opacity: animationValues[index].value,
      transform: [{ translateY: 20 * (1 - animationValues[index].value) }],
    }));

  const data = [
    { label: 'Mathematik', value: 0.6 },
    { label: 'Deutsch', value: 0.8 },
    { label: 'Chemie', value: 0.1 },
    { label: 'Biology', value: 0.8 },
    { label: 'Politik', value: 0.4 },
    { label: 'Französisch', value: 0.5 },
  ];

  const radarData = data.reduce((acc, { label, value }) => {
    acc[label.toUpperCase()] = value;
    return acc;
  }, {});

  return (
    <SafeAreaView style={Styles.safeArea}>
      <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />
      <ProgressBar progressing={37} Back={() => navigation.goBack()} />
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
          paddingHorizontal: Platform.OS == 'ios' ? 20 : 0,
        }}
      >
        <View>
          <Animated.View style={[animatedStyle(0), { marginVertical: 20 }]}>
            <Text style={Styles.heading}>{t('onBoardingSix_h1')}</Text>
          </Animated.View>

          <Animated.View style={[animatedStyle(1), { position: 'relative', alignSelf: 'center', top: 0 }]}>
            <RadarChart
              graphSize={370}
              scaleCount={5}
              numberInterval={2}
              data={[radarData]}
              options={{
                graphShape: 1,
                showAxis: true,
                showIndicator: true,
                colorList: ['blue', 'red'],
                dotList: [false, false],
                scaleColorList: [
                  COLORS.backgroundColor,
                  COLORS.backgroundColor,
                  COLORS.backgroundColor,
                  COLORS.backgroundColor,
                  'rgba(228, 234, 240, 0.7)',
                  'rgba(228, 234, 240, 0.7)',
                ],
                scaleDotList: [false, false, false, false, true],
              }}
            />
          </Animated.View>

          <Animated.View style={[animatedStyle(2), { top: 0 }]}>
            <Text
              style={[
                Styles.textStyle,
                { textAlign: 'center', marginHorizontal: 20, lineHeight: 20, marginTop: 25 },
              ]}
            >
              {t('onBoardingSix_h2')}
            </Text>
          </Animated.View>
        </View>
      </ScrollView>

      <View style={{ marginBottom: 60 }}>
        <BlackBtn
          title={t('nextButton')}
          onPress={() => navigation.navigate('OnBoardingSeven')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingSix;
