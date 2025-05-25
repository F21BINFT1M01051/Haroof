import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {COLORS} from '../../services/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../../services/baseUrls';

const Readings = () => {
  const navigation = useNavigation();
  const [bookmarkedBooks, setBookmarkedBooks] = useState([]);

  useFocusEffect(
    useCallback(() => {
      fetchBookmarks();
    }, []),
  );

  const fetchBookmarks = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const bookmarkKeys = keys.filter(k => k.startsWith('bookmark_'));
      const bookmarkData = await AsyncStorage.multiGet(bookmarkKeys);
      const books = bookmarkData.map(
        ([_, value]) => JSON.parse(value).bookData,
      );
      setBookmarkedBooks(books);
    } catch (e) {
      console.log('Failed to load bookmarks', e);
    }
  };

  const readBook = item => {
    read(item._id, item);
  };

  const read = async (id, item) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/v1/books/get-decrypted-book/${id}`,
        {
          withCredentials: true,
        },
      );
      if (response.data.success) {
        console.log('data', response.data.content);
        navigation.navigate('Read', {
          item: response.data.content, // decrypted content
          name: item.title, // book title
          bookData: item, // original book info
        });
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(
        'Error in login',
        error.response?.data?.message || error.message,
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Readings</Text>
      <Text style={styles.sectionTitle}>Bookmarked Books</Text>
      {bookmarkedBooks.length === 0 ? (
        <Text
          style={{
            color: 'gray',
            marginLeft: 14,
            marginTop: 50,
            fontFamily: 'Poppins-Medium',
          }}>
          No bookmarks yet
        </Text>
      ) : (
        <FlatList
          data={bookmarkedBooks}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <View style={styles.sectionContainer}>
              <TouchableOpacity
                style={styles.bookContainer}
                onPress={() => readBook(item)}>
                <Image
                  source={{uri: item.coverImage}}
                  resizeMode="cover"
                  style={styles.bookImage}
                  borderRadius={6}
                />
                <View style={styles.bookInfo}>
                  <Text style={styles.bookTitle}>{item.title}</Text>
                  <Text style={styles.bookParts}>{item.category}</Text>
                  <Text style={styles.bookAuthor}>
                    {item?.writer?.fullName}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{position: 'absolute', right: 15, top: 50}}>
                  <AntDesign name="right" color={'white'} size={18} />
                </TouchableOpacity>
              </TouchableOpacity>
              <View style={styles.progressBar}>
                <View
                  style={[styles.progressFill, {width: item.complete || '0%'}]}
                />
              </View>
            </View>
          )}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingBottom: 40,
            paddingTop: 20,
          }}
        />
      )}
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
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
  sectionContainer: {},
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 14,
    marginTop: 30,
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
