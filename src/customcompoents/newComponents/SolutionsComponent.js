import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../services/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Shadow } from 'react-native-shadow-2';

const { width, height } = Dimensions.get('window');

const SolutionComponent = ({
    correct,
    answer,
    isShowAnswer,
}) => {


    return (
        <View
            style={{
                paddingVertical: 20,
                alignSelf: 'center'
            }}>
            {(correct === answer && isShowAnswer) ? (
                <>
                    <LinearGradient
                        colors={['rgba(0, 147, 121, 1)', 'rgba(107, 107, 107, 1)']}
                        style={[styles.gradientBorder]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    />
                    <Shadow
                        startColor={'rgba(0, 147, 121, 0.2)'}
                        distance={15}
                        containerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={[
                                {
                                    width: width * 0.85,
                                    height: height * 0.06,
                                    backgroundColor: 'rgba(43, 43, 48, 1)',
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    paddingHorizontal: 15,
                                    flexDirection: 'row',
                                    left: 2
                                },
                            ]}>
                            <Image
                                source={require('../../../assets/images/Home/CorrectAnswer.png')}
                                resizeMode="contain"
                                style={{ width: 22, height: 22 }}
                            />

                            <Text
                                style={{
                                    color: COLORS.greenText,
                                    fontFamily: 'Roboto-Regular',
                                    marginLeft: 20,
                                }}>
                                {answer}
                            </Text>
                        </View>
                    </Shadow>
                </>
            ) : (correct !== answer && isShowAnswer) ? (
                <>
                    <LinearGradient
                        colors={['rgba(231, 76, 60, 1)', 'rgba(107, 107, 107, 1)']}
                        style={[styles.gradientBorder]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    />
                    <Shadow
                        startColor={'rgba(231, 76, 60, 0.4)'}
                        distance={15}
                        containerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={[
                                {
                                    width: width * 0.85,
                                    height: height * 0.06,
                                    backgroundColor: 'rgba(43, 43, 48, 1)',
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    paddingHorizontal: 15,
                                    flexDirection: 'row',
                                    left: 2
                                },
                            ]}>
                            <Image
                                source={require('../../../assets/images/Home/wrong.png')}
                                resizeMode="contain"
                                style={{ width: 18, height: 18 }}
                            />

                            <Text
                                style={{
                                    color: 'rgba(231, 76, 60, 1)',
                                    fontFamily: 'Roboto-Regular',
                                    marginLeft: 20,
                                }}>
                                {answer}
                            </Text>
                        </View>
                    </Shadow>
                    <View
                        style={[
                            {
                                width: width * 0.868,
                                height: height * 0.07,
                                backgroundColor: 'rgba(43, 43, 48, 1)',
                                borderWidth: 1,
                                borderColor: COLORS.greenText,
                                borderRadius: 10,
                                paddingHorizontal: 15,
                                borderStyle: 'dashed',
                                top: 15,
                                flexDirection: 'row',
                                alignItems: 'center'

                            },
                        ]}>

                        <Image
                            source={require('../../../assets/images/Home/CorrectAnswer.png')}
                            resizeMode="contain"
                            style={{ width: 22, height: 22 }}
                        />

                        <Text style={{ fontFamily: 'Roboto-Regular', color: COLORS.greenText, fontSize: 16, left: 10 }}>
                            Show him the right answer
                        </Text>
                    </View>
                </>


            ) : null}
        </View>

    );
};

export default SolutionComponent;

const styles = StyleSheet.create({
    gradientBorder: {
        position: 'absolute',
        width: width * 0.86,
        height: height * 0.06 + 4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        top: 18.6,
    },
});
