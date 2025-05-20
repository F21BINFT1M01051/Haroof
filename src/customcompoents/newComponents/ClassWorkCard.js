import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

export default function ClassworkCard(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                backgroundColor: 'rgba(30, 31, 41, 1)',
                borderRadius: 20,
                height: height * 0.16,
                flexDirection: 'row',
                width: width * 0.9,
                borderColor: 'rgba(44, 50, 60, 1)',
                borderWidth: 1,
                alignItems: 'center',
                // justifyContent: 'center',
                ...props.style,
                marginVertical: 7,
                paddingLeft: 40

            }}>
            <Image
                source={{ uri: props.img }}
                resizeMode="contain"
                style={{ width: 32, height: 32, right: 8, bottom: 10 }}
            />
            <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'white', fontFamily: 'Roboto-Medium', fontSize: 14 }}>{props.notes}</Text>
                <Text style={{ color: 'rgba(133, 133, 133, 1)', fontFamily: 'Roboto-Regular', fontSize: 12, marginTop: 5 }}>Teacher :  {props?.tutor || 'NA'}</Text>
                <Text style={{ color: 'rgba(133, 133, 133, 1)', fontFamily: 'Roboto-Regular', fontSize: 12, marginTop: 5 }}><Text style={{ fontFamily: 'Roboto-Bold' }}>{props.subject}
                </Text>  |  {props.date}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', top: 2 }}>
                    <Text style={{ color: 'rgba(133, 133, 133, 1)', fontFamily: 'Roboto-Bold', fontSize: 12, marginTop: 5 }}>Status:</Text>
                    <View style={{ width: 90, height: 24, borderRadius: 14, backgroundColor: props.status === 'completed' ? 'rgba(107, 226, 190, 0.24)' : 'rgba(255, 181, 114, 0.2)', left: 6, alignItems: 'center', justifyContent: 'center', top: 2 }}>
                        <Text style={{ color: 'rgb(253, 253, 253)', fontFamily: "Roboto-Regular", fontSize: 11 }}>{props.status}</Text>
                    </View>


                </View>

            </View>
        </TouchableOpacity>
    );
}
