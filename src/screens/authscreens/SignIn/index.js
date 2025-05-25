import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import Password from '../../../customcompoents/newComponents/Password';
import Button from '../../../customcompoents/newComponents/Button';
import InputField from '../../../customcompoents/newComponents/InputField';
import InputFieldTitle from '../../../customcompoents/newComponents/InputFieldTitle';
import {COLORS} from '../../../services/colors';
import * as yup from 'yup';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../../../services/baseUrls';
import {useDispatch} from 'react-redux';
import {userData} from '../../redux/Actions';
import Toast from 'react-native-toast-message';
const {width, height} = Dimensions.get('window');

export default function SignIn(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const handleSignIn = async values => {
    setLoading(true);
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };
      await userLogin(payload);
    } catch (error) {
      console.log('handleSignIn error:', error);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async data => {
    try {
      const response = await axios.post(`${BASE_URL}/v1/auth/login`, data, {
        withCredentials: true,
      });
      // console.log('response...........', response);
      if (response.data.success) {
        console.log('data', response.data.user);
        navigation.navigate('HomeBasic');
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
        dispatch(userData(response.data.user));
        Toast.show({
          type: 'success',
          text1: 'Sign In',
          text2: 'User signed in successfully!',
        });
      } else {
        console.log(response.data.message);
        Toast.show({
          type: 'error',
          text1: 'Sign In',
          text2: response.data.message,
        });
      }
    } catch (error) {
      console.log('Error in login', error.response.data.message);
      Toast.show({
        type: 'error',
        text1: 'Sign In',
        text2: error.response.data.message,
      });
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
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <View style={{marginTop: height * 0.11}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 28,
              }}>
              Haroof
            </Text>
            <FontAwesome5
              name="book-reader"
              size={20}
              color={'white'}
              style={{left: 6}}
            />
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
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => handleSignIn(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={{marginTop: height * 0.07}}>
                <InputFieldTitle
                  title={`Email`}
                  style={{
                    color: COLORS.heading,
                    // fontWeight: '700',
                    lineHeight: 24,
                  }}
                />
                <InputField
                  placeholder={`Enter your email`}
                  style={[
                    {
                      backgroundColor: COLORS.inputFields,
                      borderWidth: 1,
                      height: 55,
                      width: width * 0.9,
                      borderRadius: 15,
                    },
                    {
                      borderColor:
                        touched.email && errors.email
                          ? 'rgba(255, 0, 0, 0.5)'
                          : 'transparent',
                    },
                  ]}
                  onChangeText={handleChange('email')} // Using custom handler here
                  onBlur={handleBlur('email')}
                  value={values.email}
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
                style={{alignSelf: 'flex-end', marginTop: 16, marginRight: 5}}
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
              <View style={{marginTop: height * 0.078, alignItems: 'center'}}>
                <Button
                  title={`Login`}
                  loading={loading}
                  press={handleSubmit}
                  style={{backgroundColor: COLORS.greenText}}
                  textStyle={{fontSize: 16, fontFamily: 'Roboto-Medium'}}
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
                        marginLeft: 5,
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
