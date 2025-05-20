import { View, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';
import React, { useRef } from 'react';
import { COLORS } from '../../../services/colors';
import PhoneInput from 'react-native-phone-number-input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function PhoneInputV2(props) {
  const { width, height } = Dimensions.get('window');

  const { setCountryCode, setPhone, phone, style } = props;
  
  // Create a ref for PhoneInput
  const phoneInputRef = useRef(null);

  return (
    <View
      style={[{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        width: width * 0.897,
        borderWidth: 0.9,
        borderColor: 'rgba(255, 255, 255, 0.23)',
        borderRadius: 10,
        height: 60,
        backgroundColor: COLORS.backgroundColor,
      }, style]}
    >
      <PhoneInput
        ref={phoneInputRef} // Add ref to PhoneInput
        defaultCode="DE"
        value={phone}
        onChangeText={setPhone}
        onChangeFormattedText={text => setCountryCode(text)}
        containerStyle={{
          width: width * 0.58,
          borderColor: COLORS.backgroundColor,
          height: 50,
          fontSize: 10,
          backgroundColor: COLORS.backgroundColor,
          borderRadius: 10
        }}
        maxLength={10}
        textContainerStyle={{
          paddingVertical: 0,
          fontSize: 13,
          paddingHorizontal: 0,
        }}
        textInputStyle={{
          fontSize: 15,
          marginLeft: -10,
          backgroundColor: COLORS.backgroundColor,
          paddingVertical: 0,
          height: 50,
          color: 'rgba(255, 255, 255, 0.87)',
          fontWeight: '400',
          fontFamily: 'Roboto-Regular',
          borderColor: COLORS.backgroundColor,
          borderWidth: 1
        }}
        codeTextStyle={{
          backgroundColor: COLORS.backgroundColor,
          borderColor: COLORS.backgroundColor,
          fontSize: 16,
          paddingVertical: 13,
          alignSelf: 'center',
          color: 'rgba(255, 255, 255, 0.54)',
          height: 50,
          fontWeight: '400',
          fontFamily: 'BalooBhai2-Regular',
          lineHeight: 24,
          borderColor: COLORS.backgroundColor,
          borderWidth: 1,
          paddingLeft:20
        }}
        textInputProps={{
          placeholder: '',
          color: 'rgba(255, 255, 255, 0.87)',
          maxLength: 10,
          fontFamily: 'BalooBhai2-Regular',
          selectionColor: 'white', // Set cursor and selection color to white
          cursorColor: 'white',
          fontSize: 16,
          lineHeight: 24,
          backgroundColor: COLORS.backgroundColor,
          borderColor: COLORS.backgroundColor,
          borderWidth: 1
        }}
        flagButtonStyle={{ // Hide the flag button
          display: 'none', // This will hide the flag button
        }}
        renderDropdownImage={null} // Prevent dropdown image rendering
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    fontFamily: 'Roboto-Regular',
    width: 250,
  },
});
