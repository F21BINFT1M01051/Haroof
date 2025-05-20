import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
// import ProgressBar from '../../../customcompoents/newComponents/ProgressBar';
import VerificationCodeField from '../../../customcompoents/newComponents/VerificationCodeField';
import Button from '../../../customcompoents/newComponents/Button';
import { COLORS } from '../../../services/colors';
// import CustomAlert from '../../../customcompoents/newComponents/CustomAlert';
// import { useSelector, useDispatch } from 'react-redux';
// import { apiRequest } from '../../../../services/apiServices';
import Toast from 'react-native-toast-message';
// import { saveAuthToken } from '../../../../services/authToken';
import { useNavigation } from '@react-navigation/native';
// import { setAuthToken } from '../../../../redux/AuthFlow/AuthActions';
const { width, height } = Dimensions.get('window');
// import firestore from '@react-native-firebase/firestore';
// import { useTranslation } from 'react-i18next';

const OnBoardingTwentyFour = props => {
  const [code, setCode] = useState('');
  const [otpKey, setOtpKey] = useState(0); // Add state for OTP key
  // const form = useSelector(state => state.form);
  // console.log('form...........', form)
  // const dispatch = useDispatch();
  const navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState(30);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [codeText, setCodeText] = useState('');

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(id);
          setIsResendEnabled(true);
          return 0;
        }
      });
    }, 1000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setCode('');
    setTimeLeft(30);
    setCodeText('');
    setError(false);
  }, []);

  const handleNext = () => {
    if (code.length === 4) {
      setLoading(true);
      setError(false);
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      navigation.navigate('OnBoardingTwentyFive')
      // const data = {
      //   purpose: 'signup',
      //   otp: code,
      // };
      // userVerification(data);

      // const newData = {
      //   username: form?.userName,
      //   email: form?.email,
      //   role: 'student',
      //   password: form?.password,
      //   studentFirstName: form?.studentFirstName,
      //   studentLastName: form?.studentLastName,
      //   parentFirstName: form?.firstName,
      //   parentLastName: form?.lastName,
      //   phone: form?.phone,
      //   state: form?.state,
      //   school: form?.school?.id,
      //   grade: form?.grade?.id,
      //   registerAs: form?.registrationType?.value,
      //   referralSources: form?.hearingSelection,
      //   referralCode: form?.referralCode,
      //   isReferral: form?.referralCode ? 'true' : 'false',
      //   otp: code,
      //   countryCode: '+92'
      // };
      // userRegistration(newData);

    } else {
      setError(true);
    }
  };

  // const userRegistration = async payload => {
  //   try {
  //     const response = await apiRequest._registerUser(payload);
  //      console.log('registeration..................', response.data)
  //     if (response?.status >= 200 && response?.status < 300) {
  //       navigation.navigate('OnBoardingTwentyFive');

  //       dispatch(setAuthToken(response?.data?.data?.token))
  //       saveAuthToken(response?.data?.data?.token);

  //       firestore().collection('users').doc(response?.data?.data?.userID?._id).set({
  //         name: response?.data?.data?.userID?.username,
  //         email: response?.data?.data?.userID?.email,
  //         uid: response?.data?.data?.userID?._id
  //       })


  //       Toast.show({
  //         type: 'success',
  //         text1: `${t('onBoarding_SuccessToast')}`,
  //         text2: `${t('onBoardingTwentyFour_Toast1')}`,
  //       });

  //     } else {
  //       // setError(true)
  //       Toast.show({
  //         type: 'error',
  //         text1: `${t('onBoarding_failureToast')}: ${response?.status}`,
  //         text2: response?.data?.errors?.[0] || `${t('onBoarding_wentWrongToast')}`,
  //       });
  //     }
  //   } catch (e) {
  //     // setError(true)
  //     Toast.show({
  //       type: 'error',
  //       text1: `${t('onBoarding_failureToast')}`,
  //       text2: response?.data?.errors?.[0] || `${t('onBoarding_wentWrongToast')}`,
  //     });
  //   }
  // };




  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // const resendOtpCode = async payload => {
  //   try {
  //     const response = await apiRequest._resendOtpCode(payload);
  //     // console.log('resend..................', response)

  //     if (response?.status >= 200 && response?.status < 300) {
  //       Toast.show({
  //         type: 'success',
  //         text1: `${t('onBoarding_SuccessToast')}`,
  //         text2: `${t('onBoardingTwentyFour_Toast2')}`,
  //       });
  //     } else {
  //       Toast.show({
  //         type: 'error',
  //         text1: `${t('onBoarding_failureToast')}: ${response?.status}`,
  //         text2: response?.data?.errors?.[0] || `${t('onBoarding_wentWrongToast')}`,
  //       });
  //     }
  //   } catch (e) {

  //     Toast.show({
  //       type: 'error',
  //       text1: `${t('onBoarding_failureToast')}`,
  //       text2: `${t('onBoarding_wentWrongToast')}`,
  //     });
  //   }
  // };

  // const handleResendCode = () => {
  //   resendOtpCode({ purpose: 'signup' });
  //   if (isResendEnabled) {
  //     setCodeText(`${t('onBoardingTwentyFour_t7')} ${form?.email}!`);
  //     setTimeLeft(30); // Reset the timer to 30 seconds
  //     setIsResendEnabled(false); // Disable the resend button until the timer runs out again

  //     // Restart the timer
  //     const newIntervalId = setInterval(() => {
  //       setTimeLeft(prevTime => {
  //         if (prevTime > 0) {
  //           return prevTime - 1;
  //         } else {
  //           clearInterval(newIntervalId);
  //           setIsResendEnabled(true);
  //           return 0;
  //         }
  //       });
  //     }, 1000);

  //     clearInterval(intervalId);
  //     setIntervalId(newIntervalId);

  //     setCode(''); // Clear the code state
  //     // setOtpKey(prevKey => prevKey + 1); // Force re-render
  //   }
  // };

  return (
    <SafeAreaView style={styles.safeArea}>
      
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust this value based on your layout needs
      >
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
            <View style={{ marginTop: height * 0.04, alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 22,
                  color: COLORS.heading,
                  fontFamily: 'Roboto-ExtraBold',
                }}>
                {`Verification Code`}
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  marginTop: 8,
                  color: '#808D9E',
                }}>
                You have received a Code at the E-Mail:
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: COLORS.heading,
                  marginTop: 8,
                }}>
                {`sanafahad6658@gmail.com`}
              </Text>
              {/* {error && (
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    color: 'red',
                    marginTop: 8,
                    fontSize: 10,
                    textAlign: 'center',
                  }}>
                  {`Incorrect Code.`}
                  {'\n'}{`Please check the Code and enter it again.`}
                </Text>
              )} */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: height * 0.03,
              }}>
              <VerificationCodeField
                changetext={e => {
                  setCode(e);
                  setError(false);
                }}
              />
            </View>
            <View style={{ alignItems: 'center', marginTop: height * 0.015 }}>
              {isResendEnabled ? (
                <TouchableOpacity 
                // onPress={handleResendCode}
                >
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      marginTop: 15,
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: '#009379',
                    }}>
                    Resend OTP
                  </Text>
                </TouchableOpacity>
              ) : (
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    marginTop: 15,
                    fontWeight: '400',
                    fontSize: 16,
                    color: '#808D9E',
                  }}>
                  Resend Code in :
                  <Text style={{ color: 'white' }}>
                    0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}{' '}
                  </Text>
                </Text>
              )}
            </View>
            {codeText && (
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginTop: 10,
                  fontFamily: 'Roboto-Regular',
                }}>
                {codeText}
              </Text>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={{ alignItems: 'center', marginBottom: 150 }}>
        <Button
          loading={loading}
          title={`Verify`}
          style={{
            backgroundColor: code ? COLORS.greenText : 'rgba(0, 95, 73, 0.3)',
          }}
          press={handleNext}
          textStyle={{ color: code ? COLORS.heading : 'rgba(128, 141, 158, 1)' }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingTwentyFour;

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
