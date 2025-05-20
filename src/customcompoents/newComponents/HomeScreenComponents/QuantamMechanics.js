import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

export default function QuantamMechanics(props) {
  return (
    <View
      style={{
        backgroundColor: 'rgba(30, 31, 41, 1)',
        borderRadius: 20,
        height: height * 0.125,
        flexDirection:'row',
        width:width*0.89,
        marginHorizontal: 12,
        borderColor:'rgba(44, 50, 60, 1)',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        ...props.style

      }}>
      <Image
        source={props.img}
        resizeMode="contain"
        style={{width: 48, height: 48, right:8}}
      />
      <View style={{ marginLeft:20}}>
        <Text style={{color: 'white', fontFamily:'Roboto-Medium', fontSize:15}}>{props.notes}</Text>
        <Text style={{color: 'rgba(133, 133, 133, 1)', fontFamily:'Roboto-Regular', fontSize:13, marginTop:5}}>Teacher :  {props.tutor}</Text>
        <Text style={{color: 'rgba(133, 133, 133, 1)', fontFamily:'Roboto-Regular', fontSize:13, marginTop:5}}><Text style={{fontFamily:'Roboto-Bold'}}>{props.subject}
          </Text>  |  {props.date}</Text>

      </View>
    </View>
  );
}
