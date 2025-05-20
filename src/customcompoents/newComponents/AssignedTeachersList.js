import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../services/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('window');

import Tooltip from 'react-native-walkthrough-tooltip';

const AssignedTeachersList = ({
  pic,
  name,
  subject,
  more,
  subject2,
  subject3,
  subject4,
  onPress
}) => {
  const [tooltip, setToolTip] = useState(false);
  return (
    <View
      style={{
        width: width * 0.9,
        borderWidth: 1,
        borderColor: 'rgba(43, 43, 43, 1)',
        borderRadius: 20,
        backgroundColor: 'rgba(28, 27, 27, 0.3)',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 13,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Image
            source={pic}
            resizeMode="contain"
            style={{width: 55, height: 77}}
            borderRadius={10}
          />
        </View>
        <View style={{left: 10}}>
          <Text
            style={{
              color: COLORS.heading,
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
            }}>
            {name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: 'rgba(133, 133, 133, 1)',
                fontFamily: 'Roboto-Bold',
                fontSize: 11,
              }}>
              {subject}
            </Text>

            <Tooltip
              isVisible={tooltip}
              content={
                <View style={{}}>
                  <Text style={{color:'white', fontFamily:'Roboto-Medium', fontSize:12, textAlign:'center',}}>{subject2}</Text>
                  <Text style={{color:'white', fontFamily:'Roboto-Medium', fontSize:12, textAlign:"center"}}>{subject3}</Text>
                  {subject4 ? <Text style={{color:'white', fontFamily:'Roboto-Medium', fontSize:12, textAlign:'center'}}>{subject4}</Text> : null}
                </View>
              }
              contentStyle={{backgroundColor:'rgba(58, 58, 58, 1)',width:100}}
              placement="right"
              onClose={() => setToolTip(false)}
              tooltipStyle={{borderRadius:20}}
              childContentSpacing={20}
              childrenWrapperStyle={{}}
              backgroundColor="transparent">
              <TouchableOpacity onPress={() => setToolTip(true)}>
                <Text
                  style={{
                    color: 'rgba(0, 147, 121, 1)',
                    fontFamily: 'Roboto-Bold',
                    fontSize: 11,
                    left: 10,
                  }}>
                  +{more} more
                </Text>
              </TouchableOpacity>
            </Tooltip>
          </View>
        </View>
      </View>
      <View style={{right: 14}}>
        <TouchableOpacity style={{marginLeft: 0, position: 'relative'}} onPress={onPress}>
          <AntDesign name="arrowright" color={'white'} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AssignedTeachersList;

const styles = StyleSheet.create({});
