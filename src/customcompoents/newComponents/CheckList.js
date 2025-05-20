import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  import { COLORS } from '../../../services/colors';
import { IMAGES } from '../../../services/images';
  
  const {width, height} = Dimensions.get('window');
  
  const CheckList = props => {
    return (
      <View
        style={{
          display:'flex',
          flexDirection: 'row',
          marginTop: height * 0.01,
        //   backgroundColor:'red',
          paddingVertical:10, 
          borderBottomColor:'#373737',
          borderBottomWidth:0.4
        }}>
        <TouchableOpacity style={{marginTop:3}}>
          <Image
            source={IMAGES.tick}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View
          style={{
            marginLeft: 20,
            width: width * 0.75,
            flexWrap: 'wrap',
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.heading,
                fontFamily: 'Roboto-Bold',
              }}>
              {props.title}
            </Text>
            <Text style={{color: COLORS.heading, fontFamily: 'Roboto-Regular', fontSize:12}}>
              {props.desc}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  
  export default CheckList;
  
  const styles = StyleSheet.create({});
  