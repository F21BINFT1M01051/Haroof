import { View, Text , Dimensions, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { IMAGES } from '../../../../services/images'

const{width, height} = Dimensions.get('window')


export default function Tools(props) {
  return (
    <View style={{width:width*0.445, height: height*0.136, backgroundColor:'#2B2B30', borderWidth:1, borderColor:'#484848',borderRadius:height*0.02,...props.style}}>
      <TouchableOpacity onPress={props.onClick}>

        <Image source={props.info} style={{width:20, height:20, alignSelf:'flex-end', marginTop:8, marginRight:10, ...props.infoStyle}}  resizeMode='contain'/>
      </TouchableOpacity>
        <Image source={props.img}  resizeMode='contain' style={{width:30, height:30, alignSelf:'center',...props.imgStyle,}} />
        <View style={{position:'absolute', alignSelf:'center', marginTop:65}}>
        <Text  style={{color:'white', fontSize:14, fontFamily:'Roboto-Regular', alignSelf:'center', ...props.text1Style}}>{props.text1}</Text>
        <Text style={{color:'white', fontSize:14, fontFamily:'Roboto-Regular', alignSelf:'center', marginTop:-6}}>{props.text2}</Text>
        </View>

    </View>
  )
}