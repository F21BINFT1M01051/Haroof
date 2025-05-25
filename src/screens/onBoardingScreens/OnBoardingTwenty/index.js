import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Image,
} from 'react-native';
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import InputField from '../../../customcompoents/newComponents/InputField';
import Button from '../../../customcompoents/newComponents/Button';
import {COLORS} from '../../../services/colors';
import CustomPhoneInput from '../../../customcompoents/newComponents/PhoneInput';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
// import { apiRequest } from '../../../../services/apiServices';
import {Formik} from 'formik';
// import Toast from 'react-native-toast-message';
import {IMAGES} from '../../../services/images';
import axios from 'axios';

import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const OnBoardingTwenty = props => {
  const [checked, setChecked] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [loading, setLoading] = useState(false);
  

  const schema1 = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    phoneNumber: yup.string().required('Phone Number is required'),
    address: yup.string().required('Provide your address'),
  });

  const navigation = useNavigation();

  const handleNext = async values => {
    if (
      values.firstName &&
      values.lastName &&
      values.address &&
      values.phoneNumber &&
      checked
    ) {
      const payload = {

      }

    }
  };

  const userRegister = async data => {
    try {
      const response = await axios.post(`${base_url}/v1/auth/signup`, data);
      console.log('response...........', response);
      navigation.navigate('OnBoardingTwentyOne');
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <View style={{paddingHorizontal: width * 0.056, marginVertical: 10}}>
          <View style={{marginTop: 10}}>
            <PrimaryText Heading={`User Information`} />
          </View>
        </View>
        <ScrollView
          bounces={false}
          scrollEventThrottle={16}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: Platform.OS === 'ios' ? 20 : 0,
          }}>
          <View style={[styles.container]}>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
              }}
              validationSchema={schema1}
              onSubmit={values => {
                handleNext(values);
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <View>
                    <View>
                      <InputField
                        placeholder={`First Name`}
                        value={values.firstName}
                        onChangeText={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                        style={[
                          {
                            borderWidth: 1,
                            borderColor: 'white',
                            borderRadius: 10,
                            marginTop: 16,
                          },
                          {
                            borderColor:
                              touched.firstName && errors.firstName
                                ? 'rgba(255, 0, 0, 0.5)'
                                : 'rgba(255, 255, 255, 0.23)',
                          },
                        ]}
                      />

                      <InputField
                        placeholder={`Last Name`}
                        value={values.lastName}
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        style={[
                          {
                            borderWidth: 1,
                            borderColor: 'white',
                            borderRadius: 10,
                          },
                          {
                            borderColor:
                              touched.lastName && errors.lastName
                                ? 'rgba(255, 0, 0, 0.5)'
                                : 'rgba(255, 255, 255, 0.23)',
                          },
                        ]}
                      />

                      <CustomPhoneInput
                        setCountryCode={setCountryCode}
                        countryCode={countryCode}
                        setValidate={setIsValidPhone}
                        setPhone={handleChange('phoneNumber')}
                        phone={values.phoneNumber}
                        style={{
                          borderColor:
                            (!isValidPhone && values.phoneNumber) ||
                            (touched.phoneNumber && errors.phoneNumber)
                              ? 'rgba(255, 0, 0, 0.5)'
                              : 'rgba(255, 255, 255, 0.23)',
                        }}
                      />
                    </View>
                    <InputField
                      placeholder={`Your address`}
                      value={values.address}
                      onChangeText={handleChange('address')}
                      onBlur={handleBlur('address')}
                      style={[
                        {
                          borderWidth: 1,
                          borderColor: 'white',
                          borderRadius: 10,
                          marginTop: 16,
                        },
                        {
                          borderColor:
                            touched.address && errors.address
                              ? 'rgba(255, 0, 0, 0.5)'
                              : 'rgba(255, 255, 255, 0.23)',
                        },
                      ]}
                    />
                  </View>

                  <View
                    style={{
                      marginTop: 16,
                      flexDirection: 'row',
                      marginBottom: 5,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity onPress={() => setChecked(!checked)}>
                        <Image
                          source={checked ? IMAGES.checked : IMAGES.unchecked}
                          style={{width: 22, height: 22}}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>

                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: 'Roboto-Regular',
                          color: COLORS.heading,
                          marginLeft: 10,
                          fontWeight: '400',
                        }}>
                        {`I agreed to your terms and conditions`}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      marginVertical: 20,
                      alignItems: 'center',
                      marginBottom: 30,
                    }}>
                    <Button
                      loading={loading}
                      title={`Next`}
                      style={{
                        backgroundColor: checked
                          ? COLORS.greenText
                          : 'rgba(0, 95, 73, 0.3)',
                      }}
                      press={handleSubmit}
                      textStyle={{fontSize: 16, fontFamily: 'Roboto-SemiBold'}}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OnBoardingTwenty;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  container: {
    paddingHorizontal: width * 0.06,
    backgroundColor: COLORS.backgroundColor,
    flex: 1,
    marginTop: 50,
    // position:'absolute',
    // backgroundColor: 'red',
  },
});
