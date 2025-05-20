import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const InputField2 = (props) => {
  return (
    <View style={{width: 328,
      marginLeft:10,
        height: 60,
        backgroundColor: '#F3F3F3',
        marginTop: 15,
        flexDirection:'row',
        borderWidth:1,
        borderColor:'lightgray',alignItems:'center', paddingHorizontal:10, ...props.style}}>
          <Image source={props.img} style={{width:20, height:20, marginHorizontal:6}} resizeMode='contain' />

            <TextInput placeholder={props.placeholder} placeholderTextColor={'gray'} inputstyle={{fontFamily:'Roboto-Regular', width:250}} />

    </View>
  )
}

export default InputField2

