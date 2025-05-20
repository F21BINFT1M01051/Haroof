import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ProgressBar from '../../../customcompoents/newComponents/ProgressBar';
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import Selection from '../../../customcompoents/newComponents/Selection';
import Button from '../../../customcompoents/newComponents/Button';
import CustomAlert from '../../../customcompoents/newComponents/CustomAlert';
import { useDispatch } from 'react-redux';
import { setFormData } from '../../../../redux/FormRedux/Actions';
import Image from '../../../../assets/images/onBoarding/textField.png';
import Image1 from '../../../../assets/images/Home/school4.png';
import Image2 from '../../../../assets/images/Home/school3.png';
import Image3 from '../../../../assets/images/Home/school2.png';
import Image4 from '../../../../assets/images/onBoarding/textField4.png';
import { COLORS } from '../../../../services/colors';
import { IMAGES, SVG_IMAGES } from '../../../../services/images';
import { apiRequest } from '../../../../services/apiServices';
import Toast from 'react-native-toast-message';
import SelectionV2 from '../../../customcompoents/newComponents/SelectionV2';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');

const OnBoardingEighteen = props => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [option, setOption] = useState([]);
  console.log(option)
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  // const toast = useToast();
  const { t } = useTranslation();


  useEffect(() => {
    getSchools()
  }, [])

  const getSchools = async () => {
    try {
      const resp = await apiRequest._getSchools();
      if (resp?.status) {
        var count = Object.keys(resp.data).length;
        let schoolData = [];
        for (var i = 0; i < count; i++) {
          schoolData.push({
            id: resp.data[i]._id,
            image: resp.data[i].image,
            text: resp.data[i].name,
            active: resp.data[i].image_active
          });
        }
        setOption(schoolData);
      }
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: `${t('onBoarding_failureToast')}`,
        text2: `${t('onBoarding_wentWrongToast')}`,
      });

    }
  };



  const options = [
    { id: option?.[0]?.id || 1, image: option?.[0]?.image, text: 'Grundschule', text2: '/ Volksschule', image2: SVG_IMAGES.School1, name: option?.[0]?.text },
    { id: option?.[2]?.id || 2, image: option?.[2]?.image, text: 'Haupt- / ', text2: 'Mittelschule', image2: SVG_IMAGES.School2, name: option?.[2]?.text },
    { id: option?.[1]?.id || 3, image: option?.[1]?.image, text: '', text2: 'Realschule', image2: SVG_IMAGES.School3, name: option?.[1]?.text },
    { id: option?.[3]?.id || 4, image: option?.[3]?.image, text: '', text2: 'Gesamtschule', image2: SVG_IMAGES.School4, name: option?.[3]?.text },
    { id: option?.[4]?.id || 5, image: option?.[4]?.image, text: '', text2: 'Gymnasium', image2: SVG_IMAGES.School5, name: option?.[4]?.text },
  ];

  const handleOptionSelect = option => {
    setSelectedOption(option);
    dispatch(setFormData({ school: option }));
  };

  const handleNext = () => {
    if (selectedOption) {
      setLoading(true);
      setTimeout(() => {
        props.navigation.navigate('OnBoardingNinteen', {})
        setLoading(false);
      }, 1000)
    } else {

      Toast.show({
        type: 'error',
        text1: `${t('onBoarding_failureToast')}`,
        text2: `${t('onBoardingEighteen_toast')}`,
        position: 'top',
      });
      // toast.show('Please select your school type!')
      // setAlertVisible(true)
    }
  }

  console.log(selectedOption)
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: Platform.OS === 'ios' ? 20 : 0,
        }}>
        <View style={styles.container}>
          <View>
            <ProgressBar progressing={20} Back={() => props.navigation.goBack()} />
          </View>
          <View style={{ marginTop: 10 }}>
            <PrimaryText Heading={t('onBoardingEighteen_h1')} />
          </View>
          <View style={{ marginTop: height * 0.055, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center', }}>
            {option.map(option => (
              <TouchableOpacity key={option.id} onPress={() => handleOptionSelect(option)}>
                <SelectionV2
                  image={option.image}
                  text={option.text}
                  // text2={option.text2}
                  // image2={option.active}
                  selected={selectedOption?.id === option.id}
                  active={option.active}
                  style={{ backgroundColor: selectedOption?.id === option.id ? COLORS.greenText : 'rgba(29, 29, 29, 0.3)' }}
                  textstyle={{ color: selectedOption?.id === option.id ? '#FFFFFF' : '#8B8B8B' }}
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ marginTop: 30, alignItems: 'center' }}>
            <Button
              loading={loading}
              title={t('nextButton')}
              style={{ backgroundColor: selectedOption ? COLORS.greenText : 'rgba(0, 95, 73, 0.3)' }}
              press={() => handleNext()}
              textStyle={{ color: selectedOption ? COLORS.heading : 'gray' }}
            />
          </View>
        </View>

      </ScrollView>

      <CustomAlert
        visible={isAlertVisible}
        onClose={() => setAlertVisible(false)}
        message="Please Select Your School"
      />
    </SafeAreaView>
  );
};

export default OnBoardingEighteen;

const styles = StyleSheet.create({
  container: {
    padding: width * 0.04,
    paddingHorizontal: width * 0.05,
  },
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.backgroundColor,
    paddingTop: 15,
    paddingBottom: 0,
  },
});
