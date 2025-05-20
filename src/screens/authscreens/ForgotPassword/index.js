import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import Button from '../../../customcompoents/newComponents/Button';
import InputField from '../../../customcompoents/newComponents/InputField';
import InputFieldTitle from '../../../customcompoents/newComponents/InputFieldTitle';
import * as yup from 'yup';
import { Formik } from 'formik';
// import { apiRequest } from '../../../services/apiServices';
// import Toast from 'react-native-toast-message';
// import { saveAuthToken } from '../../../services/authToken';
import { COLORS } from '../../../services/colors';


const { width, height } = Dimensions.get('window');

export default function ForgetPasswordV2(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
  });

  const handleNext = (values) => {
    if (values.email) {
      props.navigation.navigate('OTPV2');
      const data = {
        email: values.email,
      }
      // forgetPasswordApi(data);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setError(true);
    }
  };

  // const forgetPasswordApi = async (payload) => {
  //   try {
  //     const response = await apiRequest._forgetPassword(payload);
  
  //     if (response?.status >= 200 && response?.status < 300) {
  //       saveAuthToken(response?.data?.token);
  //       Toast.show({
  //         type: 'success',
  //         text1: 'Success',
  //         text2: 'OTP Send Successfully'
  //       }); 
  //       props.navigation.navigate('OTPV2');
  //     } else {        
  //       Toast.show({
  //         type: 'error',
  //         text1: `Failure: ${response?.status}`,
  //         text2: response?.data?.errors?.[0] || 'Something went wrong',
  //       });
  //     }
  //   } catch (e) {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Failure',
  //       text2: 'Something went wrong',
  //     });
  //   }
  // };

  return (
    <SafeAreaView
      style={{
        padding: width * 0.04,
        paddingHorizontal: width * 0.05,
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
          <PrimaryText Heading={`Forget Password`} style={{ fontSize: 24, color: COLORS.heading, lineHeight: 30 }} />
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Roboto-Regular',
              color: COLORS.subtitle,
              fontSize: 16,
              marginTop: 10,
              fontWeight: '400',
              lineHeight: 26,
              textAlign:'center',
              marginHorizontal:30
            }}
          >
            {`Enter your E-Mail Address, and we will send you a Code to reset your Password`}
          </Text>
          {/* <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Roboto-Regular',
              color: COLORS.subtitle,
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 26
            }}
          >
          {`${t('forget_t3')}`}
          </Text> */}
        </View>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={values => handleNext(values)}
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
                <InputFieldTitle title={`E-mail`} style={{ color: COLORS.heading, lineHeight: 24 }} />
                <InputField
                  placeholder={`Enter your email`}
                  style={{
                    backgroundColor: COLORS.inputFields,
                    borderWidth: 0.8,
                    height: 55,
                    width:width*0.9,
                    borderRadius:15,  
                    borderColor: (touched.email && errors.email) ? 'rgba(255, 0, 0, 0.5)' :  'transparent',
                alignSelf:'center'
                  }}
                  placeholderTextColor={'rgba(227, 227, 227, 1)'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')} // Uncommented
                />
              </View>

              <View style={{ marginTop: height * 0.2, alignItems: 'center' }}>
                <Button
                  title={`Reset Password`}
                  press={handleSubmit} // This should call Formik's handleSubmit
                  style={{
                    backgroundColor: COLORS.greenText
                  }}
                  textStyle={{ fontFamily:'Roboto-Medium', fontSize: 16, lineHeight: 20 }}
                  loading={loading}
                />
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
                    <Text
                      style={{ fontFamily: 'Urbanist-Regular', fontSize: 15, color: 'rgba(255, 255, 255, 1)', fontWeight: '400', lineHeight: 22 }}
                    >
                      Back to Login
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
