import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import ProgressBar from '../../../customcompoents/newComponents/ProgressBar';
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import SelectionGrade from '../../../customcompoents/newComponents/SelectionGrade';
import Button from '../../../customcompoents/newComponents/Button';
import { COLORS } from '../../../../services/colors';
import CustomAlert from '../../../customcompoents/newComponents/CustomAlert';
import { useDispatch, useSelector } from 'react-redux'; 
import { setFormData } from '../../../../redux/FormRedux/Actions'; 
import { apiRequest } from '../../../../services/apiServices';
import Toast from 'react-native-toast-message';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');

const OnBoardingNineteen = props => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState([]);


  const form = useSelector(state => state.form);
const {t} = useTranslation();
  const dispatch = useDispatch();
  // const toast = useToast();

  useEffect(() => {
    if (selectedOption) {
      dispatch(setFormData({ grade: selectedOption }));
    }
  }, [selectedOption]);

  useEffect(()=> {
    getGrades()
  }, [])


  
  const getGrades = async () => {
    try{
      const resp = await apiRequest._getGrades(form?.school?.id);
      
      if (resp?.status) {        



        var count = Object.keys(resp.data).length;
        let schoolData = [];
        for (var i = 0; i < count; i++) {
          schoolData.push({
            id: resp.data[i]._id,
            grade: resp.data[i].name,
            text2: `${resp.data[i]?.name}. Klasse`
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

  const grades = [
    { id: option?.[0]?.id || 1, grade: option?.[0]?.grade || 5, text2: `${option?.[0]?.grade || 5}. Klasse` },
    { id: option?.[1]?.id || 2, grade: option?.[1]?.grade || 6, text2: `${option?.[1]?.grade || 6}. Klasse` },
    { id: option?.[2]?.id || 3, grade: option?.[2]?.grade || 7, text2: `${option?.[2]?.grade || 7}. Klasse` },
    { id: option?.[3]?.id || 4, grade: option?.[3]?.grade || 8, text2: `${option?.[3]?.grade || 8}. Klasse` },
    { id: option?.[4]?.id || 5, grade: option?.[4]?.grade || 9, text2: `${option?.[4]?.grade || 9}. Klasse` },
  ];

  const handleNext = () => {
    // props.navigation.navigate('OnBoardingTwenty') 
    if(selectedOption) {
      setLoading(true);
      setTimeout(()=> {
        props.navigation.navigate('OnBoardingTwenty') 
      setLoading(false);
      }, 1000)
    } else {

      Toast.show({
        type: 'error',
        text1: `${t('onBoarding_failureToast')}`,
        text2: `${t('onBoardingNineteen_toast')}`,
        position: 'top',
      });


      // toast.show('Please select your grade!')
      // setAlertVisible(true)
    }
  }

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
        <View style={{ padding: width * 0.04, paddingHorizontal: width * 0.06 }}>
          <View>
            <ProgressBar progressing={30} Back={() => props.navigation.goBack()} />
          </View>
          <View style={{marginTop:8}}>
            <PrimaryText Heading={t('onBoardingNineteen_h1')} />
          </View>
          <View
            style={{
              marginTop: height * 0.055,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              // alignSelf:'center'
            }}>
            {option.map(option => (
              <TouchableOpacity key={option.id} onPress={() => setSelectedOption(option)}>
                <SelectionGrade
                  grade={option.grade}
                  text2={option.text2}
                  style={{ backgroundColor: selectedOption?.id === option.id ? COLORS.greenText : 'rgba(29, 29, 29, 0.3)' }}
                  textstyle={{ color: selectedOption?.id === option.id ? '#FFFFFF' : '#8B8B8B' }}
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ marginTop:30, alignItems: 'center' }}>
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
        message="Please Select Your Grade"
      />
    </SafeAreaView>
  );
};

export default OnBoardingNineteen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.backgroundColor,
    paddingTop: 15,
    paddingBottom: 0,
  },
});
