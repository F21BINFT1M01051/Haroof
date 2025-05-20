import { View, Text } from 'react-native'
import React from 'react'

export default function InputFieldTitle(props) {
  return (
    <View style={{marginLeft:5, marginTop:25 }}>
      <Text style={{fontSize:13, fontFamily:'Roboto-Bold', color:'black', marginBottom:-12,...props.style, lineHeight:16}}>{props.title}</Text>
    </View>
  )
}