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
import FontAwsome from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get('window');

const ChecklistNumbers = props => {
  return (
    <View style={{ width: 350, marginVertical: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginTop: 1, width: 30, height: 30, backgroundColor: COLORS.greenText, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.num}</Text>
        </View>
        <View style={{ flexDirection: 'row', width: 300, left: 14 }}>
          <Text style={{
            color: COLORS.heading, fontFamily: 'Roboto-Regular', fontSize: 14,
          }}>
            <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: COLORS.heading,
              fontFamily: 'Roboto-Bold',
            }}>{props.title} </Text>
            {props.desc} {props.desc2}
          </Text>


        </View>
      </View>

    </View>






    // <View
    //   style={{
    //     display:'flex',
    //     flexDirection: 'row',
    //     marginTop: height * 0.01,
    //     paddingVertical:10, 
    //     backgroundColor:'red',
    //   }}>
    //   <View style={{marginTop:1, width:30, height:30, backgroundColor:COLORS.greenText, borderRadius:15, alignItems:'center', justifyContent:'center'}}>
    //    <Text style={{ color:'white', fontWeight:'bold'}}>{props.num}</Text>
    //   </View>
    //   <View
    //     style={{
    //       marginLeft: 13,
    //       // width: width * 0.5,
    //       // flexWrap:'wrap',
    //       // flexDirection:'row',
    //       backgroundColor:'grey'
    //     }}>
    //     <View style={{flexDirection:'row'}} >
    //       <Text
    //         style={{
    //           fontSize: 15,
    //           fontWeight: 'bold',
    //           color: COLORS.heading,
    //           fontFamily: 'Roboto-Bold',
    //           textAlign:'justify'
    //         }}>
    //         {props.title}
    //       </Text>
    //       <Text style={{color: COLORS.heading, fontFamily: 'Roboto-Regular', fontSize:14, textAlign:'justify'}}>
    //         {props.desc}
    //       </Text>
    //       <Text style={{color: COLORS.heading, fontFamily: 'Roboto-Regular', fontSize:14, textAlign:'justify'}}>{props.desc2} </Text>
    //     </View>
    //   </View>
    // </View>
  );
};

export default ChecklistNumbers;

const styles = StyleSheet.create({});
