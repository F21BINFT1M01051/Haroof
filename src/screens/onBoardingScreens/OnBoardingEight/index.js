
import {
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import BlackBtn from '../../../customcompoents/BlackBtn';
import Robort2 from '../../../../assets/images/Home/AIChat.png';
import KnowledgeLevel from '../../../../assets/images/Home/knowledgeLevel.png';
import * as Progress from 'react-native-progress';
import CarouselWithDots from '../../../customcompoents/Carousel/carouselWithDots';
import ProgressBar from '../../../customcompoents/newComponents/ProgressBar';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { COLORS } from '../../../../services/colors';
import Button from '../../../customcompoents/newComponents/Button';
import Animated, { Easing, withTiming, useSharedValue, withDelay, useAnimatedStyle } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
const { width, height } = Dimensions.get('window');

const OnBoardingEight = () => {
  const {t} = useTranslation();
  const opacity = useSharedValue(0); // Initial opacity for fade-in effect
  const translateY = useSharedValue(20); // Initial translateY for slide-up effect

  const navigation = useNavigation();
  const swiperRef = useRef(null);
  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageValue, setPageValue] = useState(0);

  useEffect(() => {
    // Reset animation values whenever currentIndex changes
    opacity.value = 0; // Reset opacity
    translateY.value = 20; // Reset translateY
    
    // Apply the animation with a delay for each index
    opacity.value = withTiming(1, { duration: 900, easing: Easing.ease });
    translateY.value = withTiming(0, { duration: 900, easing: Easing.ease });
  }, [currentIndex]); // Add currentIndex as a dependency
  

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const animatedImageStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const handleNextPress = () => {
    const isLastSlide = currentIndex === textData.length - 1;

    if (isLastSlide) {
      navigation.navigate('OnBoardingThirteen');
    } else {
      const nextIndex = currentIndex + 1;
      swiperRef.current.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
      setPageValue(nextIndex);
    }
  };

  const handleBackPress = () => {
    if (currentIndex === 0) {
      navigation.goBack();
    } else {
      const prevIndex = currentIndex - 1;
      swiperRef.current.scrollToIndex({ index: prevIndex });
      setCurrentIndex(prevIndex);
      setPageValue(prevIndex);
    }
  };

  const textData = [
    {
      title: `${t('onBoardingEight_h1')}`,
      pargraph1:`${t('onBoardingEight_p1')}`,
      pargraph2: `${t('onBoardingEight_p2')}`
    },
    {
      title: `${t('onBoardingEight_h2')}`,
      pargraph1:`${t('onBoardingEight_p3')}`,      pargraph2:`${t('onBoardingEight_p4')}`
    },
    {
      title: `${t('onBoardingEight_h3')} ${'\n'} ${t('onBoardingEight_h33')}`,
      pargraph1:`${t('onBoardingEight_p5')}`,
      pargraph2:`${t('onBoardingEight_p6')}`
    },
    {
      title: `${t('onBoardingEight_h4')}`,
      pargraph1:`${t('onBoardingEight_p7')}`,
      pargraph2:`${t('onBoardingEight_p8')}`
    },
    {
      title: `${t('onBoardingEight_h5')}`,
      pargraph1:`${t('onBoardingEight_p9')}`
    },
    {
      title: `${t('onBoardingEight_h6')}`,
      image: Robort2,
      image2: KnowledgeLevel,
      pargraph3:`${t('onBoardingEight_p10')}`
    },
  ];


  const progressValue = [50, 55, 60, 65, 70, 75];

  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
        <ProgressBar
          progressing={progressValue[pageValue]}
          Back={handleBackPress}
        />
      </View>
      <SwiperFlatList
        ref={swiperRef}
        index={0}
        style={{ alignSelf: 'center' }}
        showPagination
        paginationStyle={styles.pagination}
        paginationStyleItem={styles.paginationItem}
        paginationActiveColor="rgba(0, 147, 121, 1)"
        data={textData}
        onChangeIndex={({ index }) => {
          setCurrentIndex(index);
          setPageValue(index);
          }}
        renderItem={({ item }) => (
          <View style={[styles.child]}>
            <Animated.Text style={[styles.text, animatedTextStyle]}>
              {item.title}
            </Animated.Text>
            {item?.image2 && (
              <Animated.View style={{ width: '100%' }}>
                <Animated.Image
                  source={item?.image2}
                  style={[
                    {
                      width: 420,
                      height: 30,
                      marginTop: 14,
                      right: 20,
                    },
                    animatedImageStyle,
                  ]}
                  resizeMode={'contain'}
                />
              </Animated.View>
            )}
            {item?.image && (
              <Animated.View style={{ width: '100%', top: 16 }}>
                <Animated.Image
                  source={item?.image}
                  style={[
                    {
                      width: 420,
                      height: 170,
                      right: 20,
                    },
                    animatedImageStyle,
                  ]}
                  resizeMode={'contain'}
                />
              </Animated.View>
            )}

            {item?.pargraph1 && (
              <Animated.Text style={[styles.textStyle, animatedTextStyle]}>
                {item.pargraph1}
              </Animated.Text>)}
            {item?.pargraph2 && (
              <Animated.Text style={[styles.textStyle, { marginTop: 15 }, animatedTextStyle]}>
                {item.pargraph2}
              </Animated.Text>)}
            <View style={{}}>

              {item?.pargraph3 && (
                <Animated.Text
                  style={[
                    {
                      lineHeight: 28,
                      width: 300,
                      top: 40,
                      right: 8,
                      color: COLORS.heading,
                      fontFamily: 'Roboto-Regular',
                      textAlign: 'justify',
                      fontSize: 13,
                    },
                    animatedTextStyle,
                  ]}
                >
                  {item.pargraph3}
                </Animated.Text>)}
            </View>
          </View>
        )}
      />

      <View style={styles.buttonContainer}>
        <Button title={t('nextButton')} press={handleNextPress} />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingEight;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontFamily: 'Roboto-ExtraBold',
  },
  textContainer: {
    alignSelf: 'center',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    position: 'absolute'

  },

  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  child: {
    width,
    height: 600,
    paddingVertical: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: COLORS.backgroundColor,
    paddingLeft: 15
  },
  text: {
    fontSize: 22,
    color: COLORS.heading,
    fontFamily: 'Roboto-Bold',
    alignSelf: 'center',
    textAlign: 'center',
    width: 360,
    marginLeft: 20,
    marginTop: 10
  },
  pagination: {
    bottom: 200,
  },
  paginationItem: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(171, 171, 171, 1)',
    marginLeft: -2
  },
  buttonContainer: {
    alignItems: 'center',
    bottom: 60,
  },

  textStyle: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    textAlign: 'justify',
    lineHeight: 23,
    fontWeight: '400',
    color: 'white',
    flexWrap: 'wrap',
    width: 320,
    top: 21,

  },
});

