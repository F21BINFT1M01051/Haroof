import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.press} style={{...styles.btn,...props.style}} >
        <Text style={{color:'white', fontSize:16, fontFamily:'Roboto-Regular', ...props.textStyle}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn:{
        width:350,
        height:50,
        backgroundColor:'black',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    }
})