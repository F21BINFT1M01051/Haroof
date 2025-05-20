import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../services/colors';
import ProfileComponentTwo from '../../customcompoents/newComponents/ProfileComponentTwo';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Profile = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const userDoc = await firestore()
          .collection('Users')
          .doc(currentUser.uid)
          .get();
        const userData = userDoc.data();
        setUserData(userData);
      }
    };
    fetchUserData();
  }, []);

  const imagePicker = () => {
    ImagePicker.openPicker({
      width: 1000,
      height: 1000,
      cropping: true,
      compressImageMaxWidth: 800,
      compressImageMaxHeight: 800,
      compressImageQuality: 1,
    })
      .then(selectedImage => {
        if (selectedImage.path) {
          setImage({uri: selectedImage.path});
          const data = new FormData();
          data.append('image', {
            name: 'Profile_Image.png',
            type: selectedImage.mime,
            uri:
              Platform.OS === 'ios'
                ? selectedImage.path.replace('file://', '')
                : selectedImage.path,
          });
          updateImage(data);
        }
      })
      .catch(error => {});
  };

  const logOut = async () => {
    try {
      await AsyncStorage.multiRemove(['email', 'password']);
      await AsyncStorage.setItem('logout', 'yes');
      navigation.navigate('SignIn');
    } catch (error) {
    } finally {
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
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
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{position: 'absolute', left: 0}}>
              <AntDesign name="arrowleft" color={'white'} size={24} />
            </TouchableOpacity>
            <Text style={styles.title}>Your Profile</Text>
          </View>
          <View style={{marginTop: 30}}>
            <Image
              source={
                image
                  ? {uri: image.path}
                  : require('../../assets/images/Home/Tutor.png')
              }
              resizeMode="cover"
              borderRadius={50}
              style={{
                width: 85,
                height: 85,
                alignSelf: 'center',
              }}
            />
            <TouchableOpacity onPress={imagePicker}>
              <Image
                source={require('../../assets/images/Home/Camera.png')}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  alignSelf: 'center',
                  marginTop: -27,
                  marginLeft: 47,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',
                fontFamily: 'Roboto-Regular',
                fontWeight: '600',
                fontSize: 12,
                lineHeight: 15,
                color: COLORS.heading,
                marginTop: 10,
              }}>
              {userData?.name}
            </Text>
          </View>
          <View style={{marginTop: 28, alignSelf: 'center'}}>
            <Text
              style={{
                color: 'rgba(149, 151, 166, 1)',
                fontFamily: 'Roboto-Regular',
                marginVertical: 14,
                marginLeft: 5,
              }}>
              Reading Information
            </Text>

            <ProfileComponentTwo
              styleOne={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}
              img1={require('../../assets/images/Home/newIcon.png')}
              text1={`Favorite Books`}
              pressOne={() => navigation.navigate('Favourites')}
              img={require('../../assets/images/Home/right.png')}
              texting={{fontFamily: 'Roboto-Bold'}}
              clickButton={() => navigation.navigate('Favourites')}
            />

            <ProfileComponentTwo
              img1={require('../../assets/images/Home/userIcon.png')}
              text1={userData?.name}
              img={require('../../assets/images/Home/right.png')}
              email={userData?.email}
              texting={{fontFamily: 'Roboto-Bold'}}
              clickButton={() => navigation.navigate('EditProfile')}
            />

            <ProfileComponentTwo
              img1={require('../../assets/images/Home/lockIcon.png')}
              text1={`Change Password`}
              img={require('../../assets/images/Home/right.png')}
              clickButton={() => navigation.navigate('ChangePassword')}
            />

            <ProfileComponentTwo
              img1={require('../../assets/images/Home/logOut.png')}
              log={`Log out`}
              onLogoutPress={logOut}
              picStyle2={{marginTop: 5}}
              styleOne={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
              styleTwo={{
                borderTopWidth: 0,
                borderBottomColor: 'rgba(45, 53, 56, 1)',
                borderBottomWidth: 0,
                paddingVertical: 0,
                paddingTop: 10,
              }}
              // clickButton={handleLogOut}
            />
          </View>
          <View style={{marginBottom: 14, alignSelf: 'center'}}>
            <Text
              style={{
                color: 'rgba(149, 151, 166, 1)',
                fontFamily: 'Roboto-Regular',
                marginVertical: 22,
                marginLeft: 5,
              }}>
              Security Settings
            </Text>

            <ProfileComponentTwo
              styleOne={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}
              img1={require('../../assets/images/Home/Privacy.png')}
              text1={`Privacy Policy`}
              img={require('../../assets/images/Home/right.png')}
              clickButton={() => navigation.navigate('PrivacyPolicies')}
            />
            <ProfileComponentTwo
              styleOne={{
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}
              styleTwo={{borderBottomWidth: 0}}
              img1={require('../../assets/images/Home/Contact.png')}
              text1={`Data Protection`}
              img={require('../../assets/images/Home/right.png')}
              clickButton={() => navigation.navigate('DataProtection')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    paddingHorizontal: width * 0.02,
    paddingBottom: 20,
  },
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.backgroundColor,
    padding: 15,
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  modalOverlay: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(20, 21, 28, 0.8)',
  },

  gradientBorder: {
    width: width * 0.808,
    marginTop: height * 0.25,
    borderRadius: 13,
    marginHorizontal: 20,
    alignSelf: 'center',
    height: height * 0.385,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: height * 0.405,
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
  backButton: {
    left: 28,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Roboto-Regular',
    right: 10,
  },
  imageContainer: {
    marginTop: height * 0.03,
  },
  image: {
    height: 50,
    width: width * 0.99,
  },
  aiChatContainer: {
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.02,
  },
  aiChatImage: {
    width: width * 0.88,
    height: height * 0.2,
  },
  inputContainer: {
    alignSelf: 'baseline',
    backgroundColor: 'rgba(36, 38, 47, 1)',
    width: width * 0.99,
    height: height * 0.1,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  linkButton: {
    marginTop: 11,
    marginLeft: 8,
  },
  textInputWrapper: {
    width: width * 0.85,
    height: height * 0.045,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'rgba(72, 72, 72, 1)',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(45, 48, 55, 1)',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    paddingVertical: 5,
  },
  sendButton: {
    paddingHorizontal: 10,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.04,
  },
  modalTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 4,
  },
  modalPrice: {
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
  },
  modalSubtitle: {
    fontSize: 13,
    fontWeight: '300',
    color: 'white',
  },
  modalUnlockText: {
    fontSize: 15,
    fontWeight: '300',
    color: 'white',
    marginTop: 20,
  },
  modalDescription: {
    fontSize: 11,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 10,
  },
  modalButtonContainer: {
    marginTop: height * 0.05,
    width: width * 0.5,
  },
  modalButton: {
    height: height * 0.065,
  },
});
