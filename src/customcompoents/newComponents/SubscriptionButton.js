import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../../services/colors';
import { Checkbox } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SubscriptionButton({ duration, price, time, isChecked, onSelect }) {
  return (
    <View
      onPress={onSelect}
      style={{
        marginTop: 10,
        width: 358,
        height: 80,
        borderRadius: 8,
        backgroundColor: isChecked ? COLORS.greenText : 'rgba(29, 29, 29, 0.3)',
      }}>
      <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 10 , paddingVertical:5}}>
        <Checkbox
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={onSelect}
          color={COLORS.heading}
          uncheckedIcon={() => (
            <MaterialCommunityIcons
              name="checkbox-blank-circle-outline"
              size={24}
              color={COLORS.white}
            />
          )}
          checkedIcon={() => (
            <MaterialCommunityIcons
              name="checkbox-marked-circle"
              size={24}
              color={COLORS.white}
            />
          )}
        />
        <View style={{ flex: 1, marginLeft: 7 }}>
          <Text
            style={{ color: COLORS.heading, fontSize: 20, fontWeight: 'bold' }}>
            {duration}
          </Text>
          <Text
            style={{ color: COLORS.heading, fontSize: 16, fontWeight: '300' }}>
            {time}
          </Text>
        </View>
        <Text
          style={{
            color: COLORS.heading,
            fontSize: 20,
            fontWeight: 'bold',
            marginRight: 20,
            marginTop:6
          }}>
          {price}
        </Text>
      </View>
    </View>
  );
}
