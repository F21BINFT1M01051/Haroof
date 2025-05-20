import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import Button from '../../../customcompoents/newComponents/Button';
import InputField from '../../../customcompoents/newComponents/InputField';
import InputFieldTitle from '../../../customcompoents/newComponents/InputFieldTitle';
import { COLORS } from '../../../services/colors';
import * as yup from 'yup';
import { Formik } from 'formik';
// import Toast from 'react-native-toast-message';
// import { apiRequest } from '../../../services/apiServices';
// import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');

export default function OTPV2(props) {
  const [loading, setLoading] = useState(false);
  // const { t } = useTranslation()

  const validationSchema = yup.object({
    code: yup.string().required('Code is required'),
  });

  const handleNext = (values) => {
    if (values.code) {
      props.navigation.navigate('NewPasswordV2');
      const data = {
        purpose: 'forget-password',
        otp: values.code,
      }
      // userVerification(data)
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  // const userVerification = async (payload) => {
  //   try {
  //     const response = await apiRequest._verifyRefrralCode(payload);
  //     if (response?.status >= 200 && response?.status < 300) {
  //       Toast.show({
  //         type: 'success',
  //         text1: `${t('onBoarding_SuccessToast')}`,
  //         text2: `${t('otp_toast2')}`
  //       });
  //       props.navigation.navigate('NewPasswordV2');
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

  // const resendOtpCode = async (payload) => {
  //   const resp = await apiRequest._resendOtpCode(payload);

  //   try {
  //     if (resp?.data) {
  //       Toast.show({
  //         type: 'success',
  //         text1: `${t('onBoarding_SuccessToast')}`,
  //         text2: `${t('otp_toast')}`
  //       });
  //     }
  //   } catch (e) {
  //     Toast.show({
  //       type: 'error',
  //       text1: `${t('onBoarding_failureToast')}`,
  //       text2: `${t('onBoarding_wentWrongToast')}`
  //     });
  //   }
  // };

  return (
    <SafeAreaView
      style={{
        padding: width * 0.04,
        paddingHorizontal: width * 0.04,
        alignItems: 'center',
        flex: 1,
        backgroundColor: COLORS.backgroundColor
      }}
    >
      <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <View style={{ marginTop: height * 0.11 }}>
          <PrimaryText Heading={`Enter Code`} style={{ fontSize: 24, color: COLORS.heading, lineHeight: 30 }} />
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Roboto-Regular',
              color: COLORS.subtitle,
              fontSize: 16,
              marginTop: 10,
              fontWeight: '400',
              lineHeight: 26,
              marginHorizontal:50,
              textAlign:'center'
            }}
          >
            {`Enter the Code you received to set a new Password`}
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Roboto-Regular',
              color: COLORS.subtitle,
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 26
            }}
          >
            {/* {`OTP CODE SEND`} */}
          </Text>
        </View>

        <Formik
          initialValues={{ code: '' }}
          validationSchema={validationSchema}
          onSubmit={handleNext}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={{ marginTop: height * 0.08 }}>

                <InputFieldTitle title={`Code`} style={{ color: COLORS.heading, fontWeight: '700', lineHeight: 24 }} />
                <InputField
                  keyboardType={'numeric'}
                  maxLength={4}
                  placeholder={`Enter code here`}
                  style={{
                    backgroundColor: COLORS.inputFields, borderWidth: 0.8, height: 55,
                    width: width * 0.9,
                    borderRadius: 15, borderColor: (touched.code && errors.code) ? 'rgba(255, 0, 0, 0.5)' : 'transparent'
                  }}
                  placeholderTextColor={'rgba(227, 227, 227, 1)'}
                  value={values.code}
                  onChangeText={handleChange('code')}
                  onBlur={handleBlur('code')}
                />

                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 10 }} 
                // onPress={() => resendOtpCode({ purpose: "forget-password" })}
                >
                  <Text style={{ color: COLORS.greenText, lineHeight: 22, fontSize: 13, fontFamily: 'Roboto-Medium' }}>
                    {`Didn’t receive the Code?`}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: height * 0.15, alignItems: 'center' }}>
                <Button
                  title={`Confirm Code`}
                  press={handleSubmit}
                  style={{ backgroundColor: COLORS.greenText }}
                  textStyle={{ fontFamily: 'Roboto-Mdium', fontSize: 16, lineHeight: 20 }}
                  loading={loading}
                />
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
                    <Text
                      style={{ fontFamily: 'Urbanist-Regular', fontSize: 15, color: 'rgba(255, 255, 255, 1)', fontWeight: '400', lineHeight: 22 }}
                    >
                      {`Back to Login`}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
