import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Dimensions , Keyboard} from 'react-native';
import { COLORS } from '../../services/colors';

const { width } = Dimensions.get('window');

const InputField = ({ placeholder, onChangeText, onFocusChange, style, value, placeholderTextColor, keyboardType='default', maxLength}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocusChange) {
      onFocusChange(true); // Notify parent about focus change
    }
  };

  const handleBlur = () => {
    // Keyboard.dismiss();
    setIsFocused(false);
    if (onFocusChange) {
      onFocusChange(false); 
    }
  };

  return (
    <View
      style={[
        styles.container,
        { borderColor: isFocused ? COLORS.greenText : COLORS.inputFields },
        style,
      ]}
    >
      <TextInput
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || 'rgba(255, 255, 255, 1)'} // Use default if not provided
        style={[styles.inputStyle, { color: 'white', fontSize: 14, lineHeight: 16, fontWeight: '400' }]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        value={value}
        cursorColor={'white'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.88, 
    height: 60, 
    borderRadius: 12,
    marginTop: 20,
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  inputStyle: {
    fontFamily: 'Roboto-Regular',
    width: '100%', // Full width of the container
  },
});

export default InputField;
