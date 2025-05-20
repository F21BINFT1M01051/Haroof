import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { COLORS } from '../../../services/colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useSelector, useDispatch } from 'react-redux';
import { availability } from '../../../redux/ProfileSlice/Actions';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');

const AvaiablityComponent = props => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isSelectingFrom, setIsSelectingFrom] = useState(true);
  const [fromTime, setFromTime] = useState('9:00');
  const [toTime, setToTime] = useState('5:00');
  const {t} = useTranslation()
  const dispatch = useDispatch();

  const reduxData = useSelector(state => state.profile.Availability);
  


  const handleSave = () => {
    dispatch(availability({
     available : props.check,
     day : props.detail,
     from : fromTime,
     to : toTime
    }))   

  }


  const showTimePicker = (selectingFrom) => {
    setIsSelectingFrom(selectingFrom);
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = time => {
    const formattedTime = time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    if (isSelectingFrom) {
      props.setFromTime(formattedTime)
      setFromTime(formattedTime);
    } else {
      props.setToTime(formattedTime)
      setToTime(formattedTime);
    }

    hideTimePicker();
  };

  return (
    <View
      style={{
        width: width * 0.92,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical:10,
        alignSelf:'center',
        left:6
      }}>
      {/* <Checkbox
        status={props.check ? 'checked' : 'unchecked'}
        onPress={props.press}
        color={props.check ? COLORS.greenText : 'rgba(255, 255, 255, 1)'} 
        uncheckedColor="rgba(255, 255, 255, 0.4)" 
      /> */}
      <View
        style={{
          width: 70,
          height: 30,
          borderRadius: 50,
          backgroundColor: 
          // props.check
          //   ? 
            'rgba(100, 100, 100, 1)',
            // : 'rgba(43, 43, 48, 1)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 12,
            color:
            //  props.check
            //   ? 
              'rgba(255, 255, 255, 1)'
              // : 'rgba(255, 255, 255, 0.2)',
          }}>
          {props.day}
        </Text>
      </View>
      <Text
        style={{
          color: 
          // props.check
          // ?
           'rgba(133, 133, 133, 1)',
          // : 'rgba(133, 133, 133, 0.5)', 
          fontFamily: 'BalooBhai2-Regular',
          fontSize: 14,
        }}>
        {t('from2')}
      </Text>
      <TouchableOpacity
        // onPress={() => props.check && showTimePicker(true)} 
        disabled={!props.check} 
        style={{
          width: 82,
          height: 30,
          borderRadius: 21,
          backgroundColor: 
          // props.check
          //   ?
             'rgba(240, 240, 240, 1)',
            // : 'rgba(240, 240, 240, 0.3)', 
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 11,
            color:
            //  props.check
            //   ? 
              'rgba(133, 133, 133, 1)'

              // : 'rgba(133, 133, 133, 0.5)', 
          }}>
          {fromTime} Uhr
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color:
          //  props.check
          // ? 
          'rgba(133, 133, 133, 1)',
          // : 'rgba(133, 133, 133, 0.5)', 
          fontFamily: 'BalooBhai2-Regular',
          fontSize: 14,
        }}>
        {t('to')}
      </Text>
      <TouchableOpacity
        onPress={() => props.check && showTimePicker(false)} 
        disabled={!props.check} 
        style={{
          width: 82,
          height: 30,
          borderRadius: 21,
          backgroundColor: 
          // props.check
          //   ? 
            'rgba(240, 240, 240, 1)',

            // : 'rgba(240, 240, 240, 0.3)', 
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 11,
            color:
            // props.check
            //   ? 
              'rgba(133, 133, 133, 1)',

              // : 'rgba(133, 133, 133, 0.5)', 
          }}>
          {toTime} Uhr
        </Text>
      </TouchableOpacity>
      <View style={{ backgroundColor: 'black' }}>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideTimePicker}
          isDarkModeEnabled={true}
        />
      </View>
    </View>
  );
};

export default AvaiablityComponent;

const styles = StyleSheet.create({});
