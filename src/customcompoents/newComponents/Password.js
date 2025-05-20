import { View, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../services/colors';
export default function Password(props) {
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const { width, height } = Dimensions.get('window');

  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (props.onFocusChange) {
      props.onFocusChange(true); // Notify parent about focus
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (props.onFocusChange) {
      props.onFocusChange(false); // Notify parent about blur
    }
  };

  return (
    <View
      style={[
        {
          width: width * 0.9,
          height: 60,
          borderRadius: 15,
          marginTop: 20,
          flexDirection: 'row',
          borderWidth: 0.7,
          borderColor: isFocused ? COLORS.greenText : COLORS.inputFields,
          paddingHorizontal: 10,
        },
        props.style,

      ]}
    >
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={'rgba(227, 227, 227, 1)'}
        style={[styles.inputStyle, { color: 'white', fontSize: 14, fontWeight:'400', lineHeight:16 }]}
        secureTextEntry={!visible}
        onChangeText={props.onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        cursorColor={'white'}
      />
      <TouchableOpacity
        onPress={togglePasswordVisibility}
        style={{ width: 28, position: 'absolute', marginTop: 15, right: 20 }}
      >
        <Feather name={visible ? 'eye' : 'eye-off'} size={20} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    fontFamily: 'Roboto-Regular',
    width: 250,
  },
});
