import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import * as Progress from 'react-native-progress';
import { COLORS } from '../../../services/colors';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
const { width, height } = Dimensions.get('window');
import { Popable, Popover } from 'react-native-popable';

export default function CompletedExamCards(props) {
  const extraTopics = [
    {
      id: 1,
      title: 'Topic Example',
    },
    {
      id: 1,
      title: 'Topic Example',
    },
    {
      id: 1,
      title: 'Topic Example',
    },
    {
      id: 1,
      title: 'Topic Example',
    },
    {
      id: 1,
      title: 'Topic Example',
    },
  ];

  return (
    <View style={{ position: 'relative' }}>
      <TouchableOpacity
        onPress={props.press}
        style={{
          width: width * 0.88,
          backgroundColor: 'rgba(43, 43, 48, 1)',
          borderRadius: 15,
          paddingHorizontal: width * 0.05,
          paddingVertical: 10,
          marginTop: 15,
          elevation: 5,
          flexDirection: 'row',
          borderColor: 'rgba(72, 72, 72, 1)',
          borderWidth: 1,
          ...props.margin,
          alignItems: 'center',
          zIndex: -9999999,
        }}>
        <Image
          source={props.img}
          style={{ width: width * 0.1, height: height * 0.04 }}
          resizeMode="contain"
        />
        <View style={{ marginLeft: 30 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Roboto-Bold',
                marginTop: 0,
                marginLeft: 14,
                fontSize: 12,
              }}>
              Categorie, Topic
            </Text>
            <Popable
              content={
                <>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', marginVertical: 3, fontSize:10 , paddingTop:10}}>
                    Topic Example
                    </Text>
                    <Text style={{ color: 'white', marginVertical: 3, fontSize:10 }}>
                    Topic Example
                    </Text>
                    <Text style={{ color: 'white', marginVertical: 3, fontSize:10 }}>
                    Topic Example
                    </Text>
                    <Text style={{ color: 'white', marginVertical: 3, fontSize:10 }}>
                    Topic Example
                    </Text>
                    <Text style={{ color: 'white', marginVertical: 3, fontSize:10, paddingBottom:10 }}>
                    Topic Example
                    </Text>
                  </View>
                </>
              }
              position='bottom'
              backgroundColor={'rgba(58, 58, 58, 1)'}
              style={{ width: 160, paddingVertical: 10, top: 1, left: 26 }}
              caretPosition='left'
            >
              <View>
                <Text
                  style={{
                    color: COLORS.greenText,
                    fontFamily: 'Roboto-Bold',
                    marginLeft: 7,
                    fontSize: 12,
                  }}>
                  {props.extra}
                </Text>
              </View>
            </Popable>

          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: -7,
              marginBottom: 5,
              marginLeft: 14,
            }}>
            <View
              style={{
                width: 90,
                height: 26,
                borderRadius: 15,
                backgroundColor: 'rgba(97, 140, 255, 1)',
                alignItems: 'center',
                marginTop: 15,
                ...props.backgroundColor,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 10,
                  fontWeight: '400',
                }}>
                {props.language}
              </Text>
            </View>
            <View
              style={{
                width: 90,
                height: 27,
                borderRadius: 15,
                backgroundColor: 'rgba(26, 26, 26, 1)',
                alignItems: 'center',
                marginLeft: 10,
                marginTop: 15,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Medium',
                  fontSize: 9,
                }}>
                {props.action}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
