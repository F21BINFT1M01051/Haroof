import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../../services/colors';
import { useTranslation } from 'react-i18next';

LocaleConfig.locales['custom'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], // Two-letter day abbreviations
  // today: 'Today',
};

LocaleConfig.defaultLocale = 'custom';

const CustomCalender = ({ startDate, endDate, onDateRangeSelect, onPress }) => {
  const { t } = useTranslation();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format

  const handleMonthChange = (month) => {
    console.log('Month Changed:', month);
    setCurrentMonth(new Date(month.year, month.month - 1));
  };

  const handleArrowPress = (direction) => {
    let newMonth = new Date(currentMonth);

    if (direction === 'left') {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else if (direction === 'right') {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }

    console.log('New Month:', newMonth);
    setCurrentMonth(newMonth);
  };


  const onDayPress = day => {
    const date = day.dateString;

    if (!startDate || (startDate && endDate)) {
      onDateRangeSelect(date, null);
    } else if (startDate && !endDate) {
      if (new Date(date) >= new Date(startDate)) {
        onDateRangeSelect(startDate, date);
      } else {
        onDateRangeSelect(date, null);
      }
    }
  };

  const getMarkedDates = () => {
    const marked = {};

    if (startDate) {
      let current = new Date(startDate);
      const end = endDate ? new Date(endDate) : new Date(startDate);

      while (current <= end) {
        const dateString = current.toISOString().split('T')[0];

        marked[dateString] = {
          color: dateString === startDate || dateString === endDate
            ? COLORS.greenText // Start and End dates
            : 'red', // Dates between
          textColor: 'white',
          startingDay: dateString === startDate,
          endingDay: dateString === endDate,
          marked: true,
          dotColor: 'transparent', // No dot, circular background only
          customStyles: {
            container: {
              backgroundColor: dateString === startDate || dateString === endDate
                ? COLORS.greenText // Circular background for start & end
                : 'rgba(0, 147, 121, 0.2)', // Circular background for in-between dates
              borderRadius: 16,
              width: 50, // Circular style
              height: 30,
            },
            text: {
              color: 'white', // Text color
            },
          },
        };
        current.setDate(current.getDate() + 1);
      }
    }

    return marked;
  };

  return (
    <View>
      <Calendar
        style={{
          height: 390,
          backgroundColor: 'rgba(20, 21, 34, 1)',
          borderWidth: 1,
          borderColor: 'rgba(44, 50, 60, 1)',
          marginHorizontal: 14,
          borderRadius: 20,
        }}
        key={currentMonth.toISOString().split('T')[0]} // Force remount
        current={currentMonth.toISOString().split('T')[0]} // Ensure correct format
        onMonthChange={(month) => handleMonthChange(month)}
        renderHeader={(date) => {
          const month = currentMonth.toLocaleString('default', { month: 'long' });
          const year = currentMonth.getFullYear();
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 6,
                paddingVertical: 20,
                flex:1
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Urbanist-Regular',
                }}>
                {`${month} ${year}`}
              </Text>
              <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity onPress={onPress}>
                  <Text
                    style={{
                      color: COLORS.greenText,
                      fontFamily: 'Roboto-Regular',
                      right: 20,
                    }}>
                    {t('meet_t2')}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleArrowPress('left')}>
                  <View
                    style={{
                      backgroundColor: 'rgba(198, 202, 201, 0.5)',
                      borderRadius: 20,
                      padding: 4,
                      marginRight: 14,
                    }}>
                    <AntDesign name="left" color="rgb(255, 255, 255)" size={15} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleArrowPress('right')}>
                  <View
                    style={{
                      backgroundColor: 'rgba(198, 202, 201, 0.5)',
                      borderRadius: 20,
                      padding: 4,
                    }}>
                    <AntDesign name="right" color="rgb(255, 255, 255)" size={15} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        theme={{
          backgroundColor: 'rgba(20, 21, 34, 1)',
          calendarBackground: 'rgba(20, 21, 34, 1)',
          textSectionTitleColor: 'white',
          selectedDayBackgroundColor: 'rgba(0, 147, 121, 1)',
          selectedDayTextColor: '#ffffff',
          todayTextColor: 'white',
          dayTextColor: 'white',
          textDisabledColor: 'white',
          textDayFontFamily: 'Urbanist-Regular',
          textDayHeaderFontFamily: 'Urbanist-Bold',
          textMonthFontFamily: 'Urbanist-Bold',
          monthTextColor: 'white',
          arrowColor: 'rgba(0, 147, 121, 1)',
        }}
        onDayPress={onDayPress}
        markingType={'custom'}
        markedDates={getMarkedDates()}
        hideArrows={true}
        hideExtraDays={true}
        firstDay={1}
        enableSwipeMonths={true}
      />
    </View>
  );
};

export default CustomCalender;

const styles = StyleSheet.create({});