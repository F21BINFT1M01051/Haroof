import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../services/colors';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Read = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{position: 'absolute', left: 0}}>
              <AntDesign name="arrowleft" color={'white'} size={20} />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Roboto-Bold',
                fontSize: 20,
                width:250, 
                // backgroundColor:'red'
              }}>
              {item.name}
            </Text>
          </View>

          <Text
            style={{
              color: 'white',
              lineHeight: 24,
              marginTop: 25,
              fontFamily: 'Roboto-Regular',
            }}>
            {item.content}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Read;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  container: {
    padding: 20,
    marginTop: 25,
  },
});
