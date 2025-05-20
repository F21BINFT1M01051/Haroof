import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
import Octicons from 'react-native-vector-icons/Octicons';

const ProfileSection = props => {
  const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth:1, borderBottomColor:'rgba(43, 44, 52, 1)', paddingBottom:12}}>
      {/* <View style={{top:4}}>
        <TouchableOpacity>
          <Octicons name="three-bars" color={'white'} size={18} />
        </TouchableOpacity>
      </View> */}
      <View>
        <Image
          source={props.img ? {uri: props.img} : props.image}
          style={{
            width: 45,
            height: 45,
            marginTop: 10,
            borderRadius: height * 0.05,
            borderWidth: 1,
            borderColor: 'rgba(43, 44, 52, 1)',
          }}
          resizeMode="cover"
        />
      </View>

      <View style={{width: 230}}>
        <Text
          style={[
            {
              fontFamily: props.notifications
                ? 'Roboto-Bold'
                : 'Roboto-Regular',
              fontSize: 16,
              marginLeft: 15,
              top: 3,
            },
            {color: 'white'},
          ]}>
          {props.notifications
            ? `Hello,${'\t'} ${props.name}`
            : `${props.name}`}
        </Text>
      </View>
      <View style={styles.notificationContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
          <Octicons name="three-bars" color={'white'} size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  container: {
    width: width * 0.92,
    height: height * 0.1,
    backgroundColor: '#14151C',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically center
    padding: 10, // Add some padding if needed
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderLeftColor: 'white',
    borderLeftWidth: 5,
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
    borderRightColor: 'green',
    borderRightWidth: 5,
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderTopColor: 'green',
    borderBottomColor: 'white',
    transform: [{rotate: '45deg'}],
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    // borderRadius:40,
    transform: [{rotate: '315deg'}], // Adjust rotation
  },
  textContainer: {
    marginLeft: 20,
    flex: 1, // Allow text container to take available space
  },
  greetingText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    marginLeft: 15,
  },
  notificationContainer: {
    marginLeft: 'auto', // Push notification icon to the far right
    marginTop: height * 0.015,
    // marginRight: 10, // Adjust top margin if needed
  },
  notificationIcon: {
    // width: 20, // Adjust size as needed
    // height: 20,
  },
});
