import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../services/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {recent} from '../../services/readings';
import { useNavigation } from '@react-navigation/native';

const Readings = () => {
 const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Readings</Text>
      <Text style={styles.sectionTitle}>Recent Readings</Text>
      <FlatList
        data={recent}
        keyExtractor={item => item._id.oid}
        renderItem={({item}) => (
          <View style={styles.sectionContainer}>
            <TouchableOpacity
              style={styles.bookContainer}
              onPress={() => navigation.navigate('BookInfo', {item})}>
              <Image
                source={{uri: item.coverImage}}
                resizeMode="cover"
                style={styles.bookImage}
                borderRadius={6}
              />
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookParts}>{item.parts} parts</Text>
                <Text style={styles.bookAuthor}>{item.author}</Text>
              </View>
              <TouchableOpacity
                style={{position: 'absolute', right: 15, top: 50}}>
                <AntDesign name="right" color={'white'} size={18} />
              </TouchableOpacity>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: COLORS.grey,
                width: '94%',
                height: 3,
                borderRadius: 20,
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  backgroundColor: COLORS.greenText,
                  width: item.complete,
                  height: 3,
                  borderRadius: 20,
                }}></View>
            </View>
          </View>
        )}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 40,
          paddingTop: 20,
        }}
      />
    </View>
  );
};

export default Readings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14151C',
    paddingTop: 40,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
  sectionContainer: {},
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    marginLeft: 14,
    top: 20,
    fontFamily: 'Roboto-Medium',
  },
  bookContainer: {
    marginHorizontal: 6,
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 8,
  },
  bookImage: {
    width: 90,
    height: 100,
  },
  bookInfo: {
    marginLeft: 10,
    top: 5,
  },
  bookTitle: {
    color: 'white',
    fontSize: 18,
  },
  bookParts: {
    color: 'white',
    fontSize: 12,
    backgroundColor: 'rgba(29, 28, 28, 0.8)',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginTop: 5,
    width: 70,
    // alignSelf: 'flex-start',
  },
  bookAuthor: {
    color: 'rgba(98, 99, 109, 1)',
    fontSize: 13,
    marginTop: 5,
  },
});
