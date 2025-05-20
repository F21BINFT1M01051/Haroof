import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../../services/colors';

const {width, height} = Dimensions.get('window');

const MyTarifPremium = () => {
  var value1 = 2;
  var value2 = 0;
  return (
    <View style={{position: 'relative'}}>
      {/* Black overlay */}
      <View
        style={{
          position: 'absolute',
          top: 70,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(20, 21, 28, 0.7)', // Adjust the opacity as needed
          zIndex: 1, // Ensure the overlay is on top
        }}
      />

      <View
        style={{
          paddingHorizontal: 10,
          marginTop: height * 0.06,
          marginTop: 71,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: COLORS.heading,
              // fontWeight: '700',
              fontFamily: 'Roboto-Bold',
              fontSize: 15,
            }}>
            Tutoring-Tarif:
          </Text>
          <TouchableOpacity
            style={{
              width: 95,
              height: 21,
              borderRadius: 15,
              backgroundColor: 'grey',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.heading,
                fontFamily: 'Roboto-Medium',
                fontSize: 12,
                top:1
              }}>
                inaktive
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{marginTop:30}}>
          <TouchableOpacity>
            <Text
              style={{
                color: 'rgba(133, 133, 133, 1)',
                fontWeight: '500',
                fontFamily: 'Roboto-Regular',
                fontSize: 13,
                marginTop: 12,
              }}>
              Contract term until 18.08.2025
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              color: COLORS.heading,
              // fontWeight: '600',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              marginTop: 16,
            }}>
            5x Group Lessons per Week:
          </Text>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                width: 145,
                height: 30,
                borderRadius: 5,
                backgroundColor: 'rgba(30, 30, 30, 1)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.heading,
                  fontWeight: '500',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 11,
                }}>
                3/
                <Text style={{color: 'rgba(37, 169, 94, 1)'}}>{value1}</Text> -
                Mathematics
              </Text>
            </View>
            <View
              style={{
                width: 125,
                height: 30,
                borderRadius: 5,
                backgroundColor: 'rgba(30, 30, 30, 1)',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 5,
              }}>
              <Text
                style={{
                  color: COLORS.heading,
                  fontWeight: '500',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 11,
                }}>
                2/
                <Text style={{color: 'rgba(212, 42, 42, 1)'}}>{value2}</Text> -
                Literature
              </Text>
            </View>
          </View>

          <Text
            style={{
              color: COLORS.heading,
              // fontWeight: '600',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              marginTop: 26,
            }}>
            5x Group Lessons per Week:
          </Text>

          <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                width: 145,
                height: 30,
                borderRadius: 5,
                backgroundColor: 'rgba(30, 30, 30, 1)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.heading,
                  fontWeight: '500',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 11,
                }}>
                3/
                <Text style={{color: 'rgba(37, 169, 94, 1)'}}>{value1}</Text> -
                Mathematics
              </Text>
            </View>
            <View
              style={{
                width: 125,
                height: 30,
                borderRadius: 5,
                backgroundColor: 'rgba(30, 30, 30, 1)',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 5,
              }}>
              <Text
                style={{
                  color: COLORS.heading,
                  fontWeight: '500',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 11,
                }}>
                2/
                <Text style={{color: 'rgba(212, 42, 42, 1)'}}>{value2}</Text> -
                Literature
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: COLORS.heading,
              // fontWeight: '600',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              marginTop: 20,
            }}>
            + Learning Assistant
          </Text>
        </View> */}
      </View>
    </View>
  );
};

export default MyTarifPremium;

const styles = StyleSheet.create({});
