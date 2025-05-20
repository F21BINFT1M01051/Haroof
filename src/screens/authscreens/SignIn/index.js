import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import Password from '../../../customcompoents/newComponents/Password';
import Button from '../../../customcompoents/newComponents/Button';
import InputField from '../../../customcompoents/newComponents/InputField';
import InputFieldTitle from '../../../customcompoents/newComponents/InputFieldTitle';
import { COLORS } from '../../../services/colors'
// import { apiRequest } from '../../../services/apiServices';
import * as yup from 'yup';
import { Formik } from 'formik';
// import Toast from 'react-native-toast-message';
// import { saveAuthToken } from '../../../services/authToken';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getAuthToken } from '../../../services/authToken';
// import { useDispatch } from 'react-redux';
// import { setAuthToken } from '../../../redux/AuthFlow/AuthActions';
// import firestore from '@react-native-firebase/firestore';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const { width, height } = Dimensions.get('window');

export default function SignIn(props) {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState('');

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   profileData();
  // }, [])

  // const profileData = async () => {
  //   const resp = await apiRequest._getProfile();
  //   if (resp?.status) {
  //     dispatch(setProfileData(resp.data))
  //   }
  // }

  let validationSchema = yup.object({
    userName: yup
      .string()
      .required('Username is required')
      .test(
        'no-spaces',
        'Username cannot contain spaces',
        value => !/\s/.test(value),
      ),
    password: yup
      .string()
      .required('Password is required'),
  });

  const handleNext = values => {
    if (values.userName && values.password) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      props.navigation.navigate('HomeBasic')
      // const data = {
      //   username: values.userName,
      //   password: values.password,
      // };
      // userLogin(data);
    } else {
      setError(true);
    }
  };



  // const userLogin = async (payload) => {
  //   try {
  //     const response = await apiRequest._userLogin(payload);

  //     if (response?.status >= 200 && response?.status < 300) {

  //       firestore().collection('users').doc(response?.data?.data?.userID?._id).set({
  //         name: response?.data?.data?.userID?.username,
  //         email: response?.data?.data?.userID?.email,
  //         uid: response?.data?.data?.userID?._id
  //       })

  //       // console.log('Response:', JSON.stringify(response, null, 2));


  //       Toast.show({
  //         type: 'success',
  //         text1: `${t('onBoarding_SuccessToast')}`,
  //         text2: `${t('signIn_t10')}`
  //       });
  //       dispatch(setAuthToken(response?.data?.token))
  //       saveAuthToken(response?.data?.token);
  //       props.navigation.navigate('HomeScreenBasic');



  //     } else {
  //       Toast.show({
  //         type: 'error',
  //         text1: `${t('onBoarding_failureToast')}: ${response?.status}`,
  //         text2: response?.data?.errors?.[0] || response?.data?.errors?.[0]?.password || `${t('onBoarding_wentWrongToast')}`,
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

  const handleUserName = (value, handleChange) => {
    const regexp = /[*%#:&\s]/g;
    if (!regexp.test(value)) {
      handleChange('userName')(value);
      setUserName(value);
    }
  };



  return (
    <SafeAreaView
      style={{
        padding: width * 0.04,
        paddingHorizontal: width * 0.04,
        alignItems: 'center',
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
      }}>
      <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <View style={{ marginTop: height * 0.11 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' , justifyContent:'center'}}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 28 }} >Haroof</Text>
            <FontAwesome5 name='book-reader' size={20} color={'white'} style={{ left: 6 }} />
          </View>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Urbanist-Regular',
              color: 'rgba(128, 141, 158, 1)',
              fontSize: 17,
              fontWeight: '400',
              lineHeight: 24,
              marginTop: 8,
            }}>
            {'Login to your Account'}
          </Text>
        </View>

        <Formik
          initialValues={{
            userName: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => handleNext(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={{ marginTop: height * 0.07 }}>


                <InputFieldTitle
                  title={`Username`}
                  style={{
                    color: COLORS.heading,
                    // fontWeight: '700',
                    lineHeight: 24,
                  }}
                />
                <InputField
                  placeholder={`Enter your username`}
                  style={[
                    {
                      backgroundColor: COLORS.inputFields,
                      borderWidth: 1,
                      height: 55,
                      width: width * 0.9,
                      borderRadius: 15
                    },
                    {
                      borderColor:
                        touched.userName && errors.userName
                          ? 'rgba(255, 0, 0, 0.5)'
                          : 'transparent',
                    },
                  ]}
                  onChangeText={handleChange('userName')} // Using custom handler here
                  onBlur={handleBlur('userName')}
                  value={values.userName}
                  placeholderTextColor={'rgba(227, 227, 227, 1)'}
                />

                <InputFieldTitle
                  title={`Password`}
                  style={{
                    color: COLORS.heading,
                    // fontWeight: '700',
                    lineHeight: 24,
                  }}
                />
                <Password
                  placeholder={`Enter your Password`}
                  style={[
                    {
                      backgroundColor: COLORS.inputFields,
                      borderWidth: 1,
                      height: 55,
                    },
                    {
                      borderColor:
                        touched.password && errors.password
                          ? 'rgba(255, 0, 0, 0.5)'
                          : 'transparent',
                    },
                  ]}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              <TouchableOpacity
                style={{ alignSelf: 'flex-end', marginTop: 16, marginRight: 5 }}
                onPress={() =>
                  props.navigation.navigate('ForgetPasswordScreen')
                }>
                <Text
                  style={{
                    color: COLORS.greenText,
                    fontFamily: 'Roboto-Medium',
                    // fontWeight: '700',
                    lineHeight: 20,
                    fontSize: 14,
                  }}>
                  {`Forget Password?`}
                </Text>
              </TouchableOpacity>
              <View style={{ marginTop: height * 0.078, alignItems: 'center' }}>
                <Button
                  title={`Login`}
                  loading={loading}
                  press={handleSubmit}
                  style={{ backgroundColor: COLORS.greenText }}
                  textStyle={{ fontSize: 16, fontFamily: 'Roboto-Medium' }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: COLORS.heading,
                      fontFamily: 'Urbanist-Regular',
                      fontWeight: '400',
                      lineHeight: 22,
                    }}>
                    {`Don’t have an Account?`}
                  </Text>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('OnBoardingOne')}>
                    <Text
                      style={{
                        fontFamily: 'Urbanist-Bold',
                        fontSize: 15,
                        color: COLORS.greenText,
                        lineHeight: 18,
                        marginLeft: 5
                      }}>
                      {`Register`}
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
