import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import TutorCard from './TutorCard';
import QuantamMechanics from './QuantamMechanics';
import { IMAGES } from '../../../../services/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function Menu(props) {
  const { t } = useTranslation()
  const [modalVisible, setModalVisible] = useState(true)
  const navigation = useNavigation();

  // const Wrapper = props.shadowOverlay ? TouchableOpacity : View;

  // return (
  //   <Wrapper
  //     style={styles.container}
  //     onPress={props.shadowOverlay ? props.onPress : undefined}>

  return (
    <View style={styles.container} onPress={props.onPress}>
      <View
        style={{
          marginTop: height * 0.03,
          width: '100%',
          paddingHorizontal: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 5,
          }}>
          <Text
            style={{
              color: props.textColor,
              fontSize: 14,
              fontFamily: 'Roboto-Regular',
              fontWeight: '500',
            }}>
            {t('home_t15')}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AssignedTeachersV2')}
            >
            <Text
              style={{
                color: props.textColor,
                fontSize: 13,
                fontFamily: 'Roboto-Bold',
                // fontWeight:'700'
              }}>
              {t('home_t13')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{ marginTop: 10 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TutorCard
          img={IMAGES.Tutor}
          textStyle={{ top: 10 }}
          name={'Sebastian Müller'}
        />
        <TutorCard
          img={IMAGES.Tutor}
          textStyle={{ top: 10 }}
          name={'Sebastian Müller'}
        />
        <TutorCard
          img={IMAGES.Tutor}
          textStyle={{ top: 10 }}
          name={'Sebastian Müller'}
        />
        <TutorCard
          img={IMAGES.Tutor}
          textStyle={{ top: 10 }}
          name={'Sebastian Müller'}
        />
      </ScrollView>
      <View
        style={{
          marginTop: height * 0.03,
          width: '100%',
          paddingHorizontal: width * 0.02,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 5,
          }}>
          <Text
            style={{
              color: props.textColor,
              fontSize: 14,
              fontFamily: 'Roboto-Regular',
              fontWeight: '500',
            }}>
            {t('home_t16')}
          </Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate('ExtraLessonsV2')}
          >
            <Text
              style={{
                color: props.textColor,
                fontSize: 13,
                fontFamily: 'Roboto-Bold',
                // fontWeight:"700"
              }}>
              {t('home_t13')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{ marginTop: 10 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TutorCard
          img={IMAGES.Tutor}
          containerStyle={{ height: 46, marginTop: 132 }}
          name={'Sebastian Müller'}
          text2={'Montag, 27. Mai 2024'}
          text3={'Mathematik / 11:00 bis 13:00 Uhr'}
          textStyle={{ fontSize: 10, marginTop: 1 }}
        />
        <TutorCard
          img={IMAGES.Tutor}
          containerStyle={{ height: 46, marginTop: 132 }}
          name={'Sebastian Müller'}
          text2={'Montag, 27. Mai 2024'}
          text3={'Mathematik / 11:00 bis 13:00 Uhr'}
          textStyle={{ fontSize: 10, marginTop: 1 }}
        />
        <TutorCard
          img={IMAGES.Tutor}
          containerStyle={{ height: 46, marginTop: 132 }}
          name={'Sebastian Müller'}
          text2={'Montag, 27. Mai 2024'}
          text3={'Mathematik / 11:00 bis 13:00 Uhr'}
          textStyle={{ fontSize: 10, marginTop: 1 }}
        />
        <TutorCard
          img={IMAGES.Tutor}
          containerStyle={{ height: 46, marginTop: 132 }}
          name={'Sebastian Müller'}
          text2={'Montag, 27. Mai 2024'}
          text3={'Mathematik / 11:00 bis 13:00 Uhr'}
          textStyle={{ fontSize: 10, marginTop: 1 }}
        />
      </ScrollView>
      <View
        style={{
          marginTop: height * 0.03,
          width: '100%',
          paddingHorizontal: width * 0.02,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 5,
          }}>
          <Text
            style={{
              color: props.textColor,
              fontSize: 14,
              fontFamily: 'Roboto-Regular',
              fontWeight: '500',
            }}>
            {t('home_t17')}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: props.textColor,
                fontSize: 13,
                fontFamily: 'Roboto-Bold',
                // fontWeight:'700'
              }}>
              {t('home_t13')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{ marginTop: height * 0.015 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <QuantamMechanics
          img={require('../../../../assets/images/Home/math2.png')}
          notes={'Quantum Mechanics Notes'}
          tutor={' Richard Stark'}
          date={'12 December 2024'}
          subject={'Mathematik'}
        />
        <QuantamMechanics
          img={require('../../../../assets/images/Home/math2.png')}
          notes={'Quantum Mechanics Notes'}
          tutor={'Harry Cavil'}
          date={'12 December 2024'}
          subject={'Mathematik'}
        />
      </ScrollView>
      <View
        style={{
          backgroundColor: '#2B2C34',
          borderRadius: 16,
          height: 120,
          width: width * 0.88,
          marginBottom: 30,
          marginTop: height * 0.032,
          padding: 15,
          right: 5,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.lastText}>{t('home_t18')} </Text>
          <Text style={{ fontFamily: 'Roboto-Bold', color: 'white', fontSize: 18 }}>
            {t('home_t19')}
          </Text>
          <Text style={styles.lastText}> {t('home_t20')}</Text>
        </View>
        <View style={{ flexDirection: 'row', bottom: 10, flexWrap: 'wrap' }}>
          <Text style={[styles.lastText, { fontSize: 18 }]}>{t('home_t21')} </Text>
          <Text style={{ fontFamily: 'Roboto-Bold', color: 'white', fontSize: 18 }}>
            {t('home_t22')}
          </Text>
          <Text style={[styles.lastText, { bottom: 10 }]}> {t('home_t23')}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            alignItems: 'center',
            top: 80,
            position: 'absolute'
          }}>
          <Text style={{ color: '#00D72F', fontFamily: 'Roboto-Bold', fontSize: 18 }}>
            {t('home_t24')}
          </Text>
          <TouchableOpacity>
            <AntDesign name="arrowright" color={'#00D72F'} size={24} style={{ marginHorizontal: 10, marginTop: -4 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* {props.shadowOverlay ? (
        <View style={[styles.overlay, {backgroundColor: props.overlay}]} />
      ) : null}
    </Wrapper> */}

      {
        props.subscribed === 'approved' ? <></> :
          <>
            <View style={[styles.overlay, { backgroundColor: props.overlay }]} />
          </>
      }


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  lastText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
