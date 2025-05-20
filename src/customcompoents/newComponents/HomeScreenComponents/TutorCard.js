import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function TutorCard(props) {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={props.onPress}>
          <Image
            source={props.image ? props.image  : {uri: props.img}}
            resizeMode="cover"
            style={{width: 130, height: 160, borderRadius: 8}}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: 'rgba(29, 28, 28, 0.8)',
            borderRadius: 5,
            padding: 3,
            width: 100,
            height: 24,
            marginVertical: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Roboto-Regular',
              fontSize: 12,
              left: 5,
            }}>
            {props.name.length > 10
              ? props.name.slice(0, 13) + '...'
              : props.name}
          </Text>
        </View>
        {props.view && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 5,
              bottom: 3,
            }}>
            <AntDesign name="eyeo" size={18} color={'rgba(98, 99, 109, 1)'} />
            <Text
              style={{
                color: 'rgba(98, 99, 109, 1)',
                fontSize: 12,
                left: 6,
                fontFamily: 'Roboto-Regular',
                bottom: 1,
              }}>
              {props.rating}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
