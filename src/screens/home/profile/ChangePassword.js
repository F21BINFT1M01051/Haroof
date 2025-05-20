import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../services/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import Button from '../../../customcompoents/newComponents/Button';
import InputField from '../../../customcompoents/newComponents/InputField';
import InputFieldTitle from '../../../customcompoents/newComponents/InputFieldTitle';

const {width} = Dimensions.get('window');

const ChangePassword = () => {
  const navigation = useNavigation();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{position: 'absolute', left: 0}}>
                  <AntDesign name="arrowleft" color={'white'} size={24} />
                </TouchableOpacity>
                <Text style={styles.title}>Change Password</Text>
              </View>
              <View style={{marginTop:40}}>
                <View style={styles.inputContainer}>
                  <InputFieldTitle
                    title={'Old Password'}
                    style={styles.inputTitle}
                  />
                  <InputField
                    placeholder={'Enter old password'}
                    style={styles.input}
                    placeholderTextColor={'rgba(227, 227, 227, 1)'}
                    secureTextEntry
                    value={oldPassword}
                    onChangeText={setOldPassword}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <InputFieldTitle
                    title={'New Password'}
                    style={styles.inputTitle}
                  />
                  <InputField
                    placeholder={'Enter your new password'}
                    style={styles.input}
                    placeholderTextColor={'rgba(227, 227, 227, 1)'}
                    secureTextEntry
                    value={newPassword}
                    onChangeText={setNewPassword}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <InputFieldTitle
                    title={'Repeat Password'}
                    style={styles.inputTitle}
                  />
                  <InputField
                    placeholder={'Repeat your Password'}
                    style={styles.input}
                    placeholderTextColor={'rgba(227, 227, 227, 1)'}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                  />
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <Button title={'Save'} />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: width * 0.05,
    backgroundColor: COLORS.backgroundColor,
    flex: 1,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Roboto-Medium',
    color: COLORS.heading,
    marginLeft: 10,
  },
  content: {
    marginTop: 35,
    alignItems: 'center',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: 'rgba(128, 141, 158, 1)',
    paddingHorizontal: 40,
    marginTop: 8,
    textAlign: 'center',
  },
  inputContainer: {},
  inputTitle: {
    color: COLORS.heading,
    lineHeight: 24,
    fontFamily: 'Poppins-Medium',
  },
  input: {
    backgroundColor: COLORS.inputFields,
    borderWidth: 0.8,
    height: 55,
    width: width * 0.9,
    borderRadius: 15,
    borderColor: 'transparent',
  },
  buttonContainer: {
    marginTop: 80,
    alignSelf: 'center',
    bottom: 20,
  },
});
