import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../services/colors';
import {collapseTopMarginForChild} from 'react-native-render-html';
import CustomProgressBar from './CustomProgressBar';

const {width, height} = Dimensions.get('window');

const ProgressBar = props => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10,
        ...props.container
      }}>
      <TouchableOpacity onPress={props.Back} style={{marginRight: 20, ...props.arrowStyle}}>
        <AntDesign name="arrowleft" color={'white'} size={22} />
      </TouchableOpacity>
      <CustomProgressBar
        backgroundColor={'#009379'}
        completed={props.progressing}
        style={{width: '75%', height:6,marginLeft:5, ...props.progressStyle}}
      />

     
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({});
