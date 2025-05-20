import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
  } from 'react-native';
  import React from 'react';
  import * as Progress from 'react-native-progress';
  import { IMAGES } from '../../../services/images';
import { COLORS } from '../../../services/colors';
  import CustomProgressBar from './CustomProgressBar';

  const {width, height} = Dimensions.get('window');
  
  const ProfileSectionTwo = props => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
              source={props.img}
              style={{
              width: 55,
              height: 55,
              marginTop: 3,
              borderRadius: 100,
              marginLeft: 5,
              borderWidth: 1,
              borderColor: 'rgba(43, 44, 52, 1)',
            }}
            resizeMode="cover"
          />
        </View>
  
        <View style={{width:252, left:14}}>
          <Text style={{color:COLORS.heading, fontFamily:'Roboto-Regular', fontSize:14}}>
            {props.name} {props.name2}
          </Text>
          <View style={{flexDirection:'row', marginTop:3}}>
            <Text style={{ color:'rgba(136, 140, 164, 1)', fontFamily:'Roboto-Regular'}}>
              Knowledge Level
            </Text>
            <Image
              source={IMAGES.information}
              style={{marginLeft:5, marginTop:2, width:16, height:16}}
              resizeMode='contain'
            />
          </View>
          <View style={{ bottom:18}}>

          <Text style={{alignSelf:'flex-end', color:'white', fontFamily:'Roboto-Bold', fontSize:12,}}>{props.progress}%</Text>
          <CustomProgressBar completed={props.progress} backgroundColor={'rgba(64, 182, 33, 1)'} style={{ marginTop:4, width:'100%', backgroundColor:'rgba(136, 140, 164, 0.4)'}} />
          </View>

        </View>
        
      </View>
    );
  };
  
  export default ProfileSectionTwo;
  
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
      // fontWeight: '700',
      fontSize: 18,
      marginLeft: 20,
    },
    notificationContainer: {
      marginLeft: 'auto', // Push notification icon to the far right
      marginTop: height*0.02,
      // marginRight: 10, // Adjust top margin if needed
    },
    notificationIcon: {
      // width: 20, // Adjust size as needed
      // height: 20,
    },
  });
  