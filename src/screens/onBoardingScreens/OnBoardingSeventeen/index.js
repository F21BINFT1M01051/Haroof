import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  Alert,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import Button from '../../../customcompoents/newComponents/Button';
// import axios from 'axios';
import { COLORS } from '../../../services/colors';
import SecondaryText from '../../../customcompoents/newComponents/SecondaryText';
import { useNavigation } from '@react-navigation/native';
// import {apiRequest} from '../../../../services/apiServices';
// import Toast from 'react-native-toast-message';

const { width, height } = Dimensions.get('window');

const OnBoardingSeventeen = props => {
  // const toast = useToast();
  const navigation = useNavigation()

  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);




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
          <View style={{ marginTop: 10 }}>
            <PrimaryText Heading={`Sign Up To Haroof App`} />
          </View>


        </View>
        <View style={{marginTop:50}}>
          <Text style={{color:'white', fontFamily:'Roboto-Regular'}}>Choose your role for sign up:</Text>
          <Button
            loading={loading}
            title={`Reader`}
            style={{
              // backgroundColor: value ? COLORS.greenText : 'rgba(0, 95, 73, 0.3)',
              // width: width * 0.35,
              marginTop: 20
            }}
            press={() => navigation.navigate('OnBoardingTwentyTwo')}
          />
          <Button
            loading={loading}
            title={`Writer`}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 1)',
              marginTop: 20

              // width: width * 0.35,
            }}
          // press={() => handleNext()}
          />
        </View>
      </ScrollView>



    </SafeAreaView>
  );
};

export default OnBoardingSeventeen;

const styles = StyleSheet.create({
  container: {
    padding: width * 0.2,
    paddingHorizontal: width * 0.06,
  },

  dropdown: {
    height: height * 0.06,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 0.8,
    borderRadius: 13,
    paddingHorizontal: 15,
    alignSelf: 'center',
    width: width * 0.89,
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
    fontFamily: 'Roboto-Regular',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'Roboto-Regular',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'Roboto-Regular',
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
    fontFamily: 'Roboto-Regular',
  },
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.backgroundColor,
    padding: 15,
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  // item: {
  //   padding: 10,
  //   backgroundColor: value ? 'green' : 'gray',
  //   borderColor: COLORS.greenText,
  //   // borderRadius:10

  // },
  itemText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
  },
});
