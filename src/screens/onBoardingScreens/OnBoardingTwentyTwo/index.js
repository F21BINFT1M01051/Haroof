import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setFormData} from '../../../../redux/FormRedux/Actions';
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import Button from '../../../customcompoents/newComponents/Button';
import SlecteldBox from '../../../customcompoents/newComponents/SlecteldBox';
import {COLORS} from '../../../services/colors';
import {formData} from '../../redux/Actions';
// import CustomAlert from '../../../customcompoents/newComponents/CustomAlert';
// import Toast from 'react-native-toast-message';

const {width, height} = Dimensions.get('window');

const OnBoardingTwentyTwo = props => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const optionsArray = [
    {id: 1, text: `Classic Literature`},
    {id: 2, text: `Science Fiction`},
    {id: 3, text: `Science & Technology`},
    {id: 4, text: `Religious & Spiritual`},
    {id: 5, text: `Plays & Dramas`},
    {id: 6, text: `Fairy Tales & Fables`},
    {id: 7, text: `Romance`},
    {id: 8, text: `Regional & Cultural Literature`},
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(formData(selectedOptions));
  }, [selectedOptions]);

  const toggleOption = optionId => {
    const option = optionsArray.find(item => item.id === optionId);
    if (selectedOptions.includes(option.text)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option.text));
    } else {
      setSelectedOptions([...selectedOptions, option.text]);
    }
  };

  const isSelected = optionId => {
    const option = optionsArray.find(item => item.id === optionId);
    return selectedOptions.includes(option.text);
  };

  const handleNext = () => {
    if (selectedOptions.length > 0) {
      setLoading(true);
      setTimeout(() => {
        props.navigation.navigate('OnBoardingTwentyThree');
        setLoading(false);
      }, 1000);
    } else {
      Toast.show({
        type: 'error',
        text1: `${t('onBoarding_failureToast')}`,
        text2: `${t('onBoardingTwentyTwo_toast')}`,
        position: 'top',
      });

      // toast.show('Please select your answer!')
      // setAlertVisible(true)
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{marginVertical: 5}}>
          <PrimaryText
            Heading={`Interested Genre`}
            style={{fontSize: 22, fontFamily: 'Roboto-ExtraBold'}}
          />
        </View>
        <View style={{marginTop: height * 0.01}}>
          {optionsArray.map(option => (
            <TouchableOpacity
              key={option.id}
              onPress={() => toggleOption(option.id)}>
              <SlecteldBox
                title={option.text}
                style={{
                  backgroundColor: isSelected(option.id)
                    ? '#009379'
                    : '#1D1D1D',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{alignItems: 'center', top: 70}}>
        <Button
          loading={loading}
          title={`Next`}
          style={{
            backgroundColor:
              selectedOptions.length > 0
                ? COLORS.greenText
                : 'rgba(0, 95, 73, 0.3)',
          }}
          press={() => handleNext()}
          textStyle={{
            color: selectedOptions.length > 0 ? COLORS.heading : 'gray',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingTwentyTwo;

const styles = StyleSheet.create({
  container: {
    padding: width * 0.02,
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
