import {View, TextInput, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import OTPTextInput from 'react-native-otp-textinput';

export default function VerificationCodeField({changetext, keyProp}) {
  let otpInput = useRef(null);


  return (
    <View>
      <OTPTextInput
        key={otpInput}
        handleTextChange={changetext}
        ref={e => (otpInput = e)}
        textInputStyle={{
          color: 'white',
          backgroundColor: 'rgba(95, 95, 95, 0.1)',
          borderWidth:0,
          selectionColor:'white'
        }}
        // tintColor={'transparent'}
        offTintColor={'transparent'}
        containerStyle={{borderWidth:0}}
        autoFocus={true}
       
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(95, 95, 95, 0.1)',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    color: 'white',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth:0
  },
});
