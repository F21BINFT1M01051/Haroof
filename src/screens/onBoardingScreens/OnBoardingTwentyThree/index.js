import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import InputField from '../../../customcompoents/newComponents/InputField';
import Password from '../../../customcompoents/newComponents/Password';
import Button from '../../../customcompoents/newComponents/Button';
import InputFieldTitle from '../../../customcompoents/newComponents/InputFieldTitle';
import {COLORS} from '../../../services/colors';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../../../services/baseUrls';
import {userData} from '../../redux/Actions';

const {width, height} = Dimensions.get('window');

const OnBoardingTwentyThree = props => {
  const [loading, setLoading] = useState(false);
  const formikRef = useRef(null);
  const options = useSelector(state => state.form);
  const base_url = 'http://192.168.249.193:3000';
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string().required('Password is required'),
    name: yup.string().required('Name is required'),
  });

  const handleSignUp = async values => {
    setLoading(true);
    try {
      const payload = {
        fullName: values.name,
        password: values.password,
        email: values.email,
      };
      await userRegister(payload);
    } catch (error) {
      console.log('handleSignUp error:', error);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async data => {
    try {
      const response = await axios.post(`${BASE_URL}/v1/auth/signup`, data);
      if (response.data.success) {
        navigation.navigate('HomeBasic');
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
        dispatch(userData(response.data.user));
        Toast.show({
          type: 'success',
          text1: 'Sign Up',
          text2: 'User registered successfully!',
        });
      } else {
        console.log('Signup failed:', response.data.message);
        Toast.show({
          type: 'error',
          text1: 'Sign Up',
          text2: response.data.message,
        });
      }
    } catch (error) {
      console.log('userRegister error:', error);
      Toast.show({
        type: 'error',
        text1: 'Sign Up',
        text2:  error.response.data.message,
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
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
            <View style={{marginTop: height * 0.03}}>
              <Text
                style={{
                  fontSize: 22,
                  color: COLORS.heading,
                  fontFamily: 'Roboto-ExtraBold',
                  alignSelf: 'center',
                  lineHeight: 24,
                }}>
                {`Create Account`}
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: 'rgba(128, 141, 158, 1)',
                  alignSelf: 'center',
                  marginTop: 8,
                }}>
                {`Create your Account and get started`}
              </Text>
            </View>

            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => handleSignUp(values)}
              innerRef={formikRef}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={{marginTop: height * 0.03}}>
                  <InputFieldTitle
                    title={`Full Name`}
                    style={{color: COLORS.heading}}
                  />
                  <InputField
                    placeholder={`Enter your name`}
                    style={[
                      {
                        backgroundColor: COLORS.inputFields,
                        borderWidth: 1,
                        width: '100%',
                        fontSize: 14,
                        height: 55,
                        borderRadius: 15,
                      },
                      {
                        borderColor:
                          touched.name && errors.name
                            ? 'rgba(255, 0, 0, 0.5)'
                            : 'transparent',
                      },
                    ]}
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                  />

                  <InputFieldTitle
                    title={`Email`}
                    style={{color: COLORS.heading}}
                  />
                  <InputField
                    placeholder={`Enter email`}
                    style={[
                      {
                        backgroundColor: COLORS.inputFields,
                        borderWidth: 1,
                        width: '100%',
                        fontSize: 14,
                        height: 55,
                        borderRadius: 15,
                      },
                      {
                        borderColor:
                          touched.email && errors.email
                            ? 'rgba(255, 0, 0, 0.5)'
                            : 'transparent',
                      },
                    ]}
                    type={'email'}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />

                  <InputFieldTitle
                    title={`Password`}
                    style={{color: COLORS.heading}}
                  />
                  <Password
                    placeholder={`Enter Password`}
                    style={[
                      {
                        backgroundColor: COLORS.inputFields,
                        borderWidth: 1,
                        width: '100%',
                        fontSize: 14,
                        height: 55,
                      },
                      {
                        borderColor:
                          touched.password && errors.password
                            ? 'rgba(255, 0, 0, 0.5)'
                            : 'transparent',
                      },
                    ]}
                    type={'password'}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />

                  <InputFieldTitle
                    title={`Confirm Password`}
                    style={{color: COLORS.heading}}
                  />
                  <Password
                    placeholder={`Enter Confirm Password`}
                    style={[
                      {
                        backgroundColor: COLORS.inputFields,
                        borderWidth: 1,
                        width: '100%',
                        fontSize: 14,
                        height: 55,
                      },
                      {
                        borderColor:
                          touched.confirmPassword && errors.confirmPassword
                            ? 'rgba(255, 0, 0, 0.5)'
                            : 'transparent',
                      },
                    ]}
                    type={'password'}
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                  />

                  <View
                    style={{marginTop: height * 0.18, alignItems: 'center'}}>
                    <Button
                      loading={loading}
                      title={`Next`}
                      press={handleSubmit}
                      style={{
                        backgroundColor:
                          values.userName &&
                          values.password &&
                          values.email &&
                          values.name
                            ? COLORS.greenText
                            : 'rgba(0, 95, 73, 0.3)',
                      }}
                      textStyle={{
                        color:
                          values.userName &&
                          values.password &&
                          values.email &&
                          values.name
                            ? COLORS.heading
                            : 'rgba(128, 141, 158, 1)',
                      }}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: width * 0.04,
    paddingHorizontal: width * 0.04,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    paddingTop: 15,
    paddingBottom: 0,
  },
  buttonContainer: {
    // position: 'absolute',
    bottom: 10,
    // left: 0,
    // right: 0,
    // marginTop:height*0.2,

    alignItems: 'center',
    paddingHorizontal: width * 0.06,
    paddingBottom: 20,
  },
});

export default OnBoardingTwentyThree;
