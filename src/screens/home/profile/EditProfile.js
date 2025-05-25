import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  Alert,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS} from '../../../services/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputField from '../../../customcompoents/newComponents/InputField';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../customcompoents/newComponents/Button';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

const EditProfileV2 = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const user = useSelector(state => state.form.user);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{position: 'absolute', left: 30}}>
            <AntDesign name="arrowleft" color={'white'} size={22} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              fontFamily: 'Poppins-Medium',
              color: COLORS.heading,
              alignSelf: 'center',
            }}>
            Edit Your Profile
          </Text>
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
          <View style={styles.container}>
            <InputField
              placeholder={user?.fullName}
              value={name}
              onChangeText={setName}
              style={{
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.23)',
                borderRadius: 10,
              }}
            />
            <InputField
              placeholder={`03076590664`}
              value={phone}
              onChangeText={setPhone}
              style={{
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.23)',
                borderRadius: 10,
              }}
            />
            <InputField
              placeholder={'City'}
              value={city}
              onChangeText={setCity}
              style={{
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.23)',
                borderRadius: 10,
              }}
            />
            <InputField
              placeholder={user?.email}
              value={email}
              onChangeText={setEmail}
              style={{
                borderWidth: 0.8,
                borderColor: 'rgba(255, 255, 255, 0.23)',
                borderRadius: 10,
              }}
            />

            <View style={{marginTop: 35}}>
              <Button
                title={'Save Details'}
                style={{
                  backgroundColor:
                    // checked
                    //   ?
                    COLORS.greenText,
                  //   : 'rgba(0, 95, 73, 0.3)',
                }}
                press={() => setModalVisible(true)}
                //   disable={checked ? false : true}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        style={{backgroundColor: 'rgba(0,0,0,0.6)'}}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            // justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.53)',
          }}>
          <View
            style={{
              width: '87%',
              backgroundColor: 'rgba(19, 19, 19, 1)',
              borderRadius: 18,
              marginHorizontal: 27,
              padding: width * 0.06,
              borderWidth: 0.7,
              borderColor: 'rgba(37, 37, 37, 1)',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: height * 0.33,
              shadowColor: 'rgba(0, 147, 121, 0.5)',
              shadowOffset: {width: 0, height: 4},
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 21,
                fontFamily: 'Poppins-Bold',
                color: 'rgba(255, 255, 255, 1)',
              }}>
              {'Are you sure to edit details'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
                marginTop: 20,
              }}>
              <Button
                title={'Yes'}
                style={{
                  width: width * 0.35,
                  height: height * 0.052,
                  marginRight: 13,
                  borderRadius: 8,
                }}
                textStyle={{fontFamily: 'Poppins-Bold', fontSize: 15}}
                press={() => setModalVisible(false)}
              />
              <Button
                title={'Cancel'}
                style={{
                  width: width * 0.35,
                  backgroundColor: 'rgba(81, 81, 81, 1)',
                  height: height * 0.052,
                  marginLeft: 5,
                  borderRadius: 8,
                }}
                press={() => setModalVisible(false)}
                textStyle={{fontFamily: 'Poppins-Bold', fontSize: 15}}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default EditProfileV2;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  container: {
    paddingHorizontal: width * 0.04,
    backgroundColor: COLORS.backgroundColor,
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },

  dropdown: {
    height: height * 0.068,
    borderColor: 'rgba(255, 255, 255, 0.23)',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    width: width * 0.9,
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: COLORS.backgroundColor,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.87)',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: COLORS.heading,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: COLORS.heading,
    backgroundColor: COLORS.backgroundColor,
    margin: 0,
    marginBottom: 0,
    borderBottomWidth: 0,
  },
  item: {
    padding: 10,
    backgroundColor: COLORS.backgroundColor,
    borderColor: COLORS.greenText,
  },
  itemText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
});
