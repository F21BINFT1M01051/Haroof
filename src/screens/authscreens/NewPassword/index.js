import React from 'react';
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
// import { apiRequest } from '../../../services/apiServices';
// import Toast from 'react-native-toast-message';
// import { useTranslation } from 'react-i18next';


const { width, height } = Dimensions.get('window');

export default function NewPasswordV2(props) {

  const validationSchema = yup.object({
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values) => {
    props.navigation.navigate('SignIn');

    // Handle form submission logic
    const data = {
        new_password: values.password,
        confirm_password: values.confirmPassword
  }
    // resetPasswordApi(data);
  };

  // const resetPasswordApi = async (payload) => {
  //   try {
  //     const response = await apiRequest._resetPassword(payload);
  //     if (response?.status >= 200 && response?.status < 300) {
  //       Toast.show({
  //         type: 'success',
  //         text1: `${t('onBoarding_SuccessToast')}`,
  //         text2: `${t('newPassword_toast')}`
  //       }); 
  //       props.navigation.navigate('SignIn');
  //     } else {        
  //       Toast.show({
  //         type: 'error',
  //         text1: `${t('onBoarding_failureToast')} : ${response?.status}`,
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
        <View style={{ marginTop: height * 0.09 }}>
          <PrimaryText Heading={`New Password`} style={{ fontSize: 24, color: COLORS.heading, lineHeight: 30 }} />
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
              marginHorizontal:50
            }}
          >
            {`Enter your new Password and click “Save” to change it`}
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
            {/* {`Password..`} */}
          </Text>
        </View>

        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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
              <View style={{ marginTop: height * 0.06 }}>
                <InputFieldTitle title={`Password`} style={{ color: COLORS.heading, lineHeight: 24 }} />
                <InputField
                  placeholder={`Enter your Password`}
                  style={{ backgroundColor: COLORS.inputFields, borderWidth: 0.8, height: 55,
                    width:width*0.9,
                    borderRadius:15 , borderColor: (touched.password && errors.password) ? 'rgba(255, 0, 0, 0.5)' : 'transparent'}}
                  placeholderTextColor={'rgba(227, 227, 227, 1)'}
                  secureTextEntry
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
               
              </View>

              <View style={{ marginTop: height * 0.01 }}>
                <InputFieldTitle title={`Repeat Password`} style={{ color: COLORS.heading, lineHeight: 24 }} />
                <InputField
                  placeholder={`Repeat Your Password`}
                  style={{ backgroundColor: COLORS.inputFields, borderWidth: 0.8, height: 55,
                    width:width*0.9,
                    borderRadius:15 , borderColor: (touched.confirmPassword && errors.confirmPassword) ? 'rgba(255, 0, 0, 0.5)' : 'transparent'}}
                  placeholderTextColor={'rgba(227, 227, 227, 1)'}
                  secureTextEntry
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                />
               
              </View>

              <View style={{ marginTop: height * 0.1, alignItems: 'center' }}>
                <Button
                  title={`Save`}
                  press={handleSubmit}
                  style={{ backgroundColor: COLORS.greenText }}
                  textStyle={{ fontFamily: 'Roboto-Medium', fontSize: 16, lineHeight: 20 }}
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
