import { View, Text , StyleSheet, Dimensions} from 'react-native'
import React from 'react'

const {width,height} = Dimensions.get('window')

export default function SlecteldBox(props) {
  return (
    <View style={{...styles.btn, ...props.style}}>
        <Text style={{color:'white', fontSize:15, fontFamily:'Roboto-Regular', ...props.textstyle}}>{props.title}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
    btn:{
        width:width*0.9,
        height:height*0.065,
        backgroundColor:'#BCBCBC',
        borderRadius:13,
        justifyContent:'center',
        alignItems:'center',
        marginTop:14
    }
})