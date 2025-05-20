import { View, Text , Dimensions, Image} from 'react-native'
import React from 'react'

const{width, height} = Dimensions.get('window')


export default function UseCards(props) {
  return (
    <View style={{width:width*0.7, height:height*0.1, backgroundColor:'#2B2B30', borderWidth:1, borderColor:'#484848',borderRadius:20}}>
        <Text  style={{color:'white', fontSize:14, fontFamily:'Roboto-Regular', alignSelf:'center', marginTop:15}}>{props.text1}</Text>
        <Text style={{color:'white', fontSize:14, fontFamily:'Roboto-Regular', alignSelf:'center', marginTop:5}}>{props.text2}</Text>

    </View>
  )
}