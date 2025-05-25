import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../services/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../../services/baseUrls';

const writings = [
  {
    id: 1,
    category: 'Recent Writings',
    books: [
      {
        id: 1,
        cover: require('../../assets/images/Home/book20.jpg'),
        name: 'Countryside Orphan..',
        rating: '41.3k',
        part: '4',
        status: 'Continue Writing',
      },
      {
        id: 2,
        cover: require('../../assets/images/Home/book17.jpg'),
        name: 'Fairy Tale',
        rating: '5M',
        part: '5',
        status: 'Continue Writing',
      },
      {
        id: 3,
        cover: require('../../assets/images/Home/book15.jpg'),
        name: 'Love I will',
        rating: '41.3k',
        part: '10',
        status: 'Continue Writing',
      },
    ],
  },
];

const Writings = () => {
  const navigation = useNavigation();
  const [Published, setPublished] = useState([]);

  useEffect(() => {
    writings();
  }, []);

  const writings = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/v1/books/getbooks/${'6829c298feef054ab1e23837'}`,
        {
          withCredentials: true,
        },
      );
      if (response.data.success) {
        console.log('data', response.data.books);
        setPublished(response.data.books);
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
      <ScrollView>
        <Text style={styles.headerText}>My Writings</Text>

        {/* Published Books Section */}
        <View style={{marginLeft: 15, marginVertical: 10}}>
          <Text style={styles.sectionTitle}>{`Published Books`}</Text>
        </View>
        <FlatList
          data={Published}
          keyExtractor={item => item._id.oid}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.bookContainer}
              onPress={() => readBook(item)}>
              <Image source={{uri: item.coverImage}} style={styles.bookImage} />
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookParts}>{item.category}</Text>
                <View style={styles.statsContainer}>
                  <View style={styles.statsItem}>
                    <AntDesign
                      name="eyeo"
                      size={16}
                      color={'rgba(98, 99, 109, 1)'}
                    />
                    <Text style={styles.statsText}>{item.readByUsers}</Text>
                  </View>
                  <View style={[styles.statsItem, {marginLeft: 25}]}>
                    <AntDesign
                      name="like1"
                      size={16}
                      color={'rgba(98, 99, 109, 1)'}
                    />
                    <Text style={styles.statsText}>{item.likes}</Text>
                  </View>
                  <View style={[styles.statsItem, {marginLeft: 25}]}>
                    <AntDesign
                      name="dislike1"
                      size={16}
                      color={'rgba(98, 99, 109, 1)'}
                    />
                    <Text style={styles.statsText}>{item.dislikes}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('BookInfo', {item})}>
                <MaterialCommunityIcons
                  name="chevron-right"
                  color={'rgba(98, 99, 109, 1)'}
                  size={26}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Writings;

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
    marginBottom: 10,
  },
  sectionContainer: {
    marginTop: 16,
    // paddingHorizontal: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Roboto-Medium',
  },
  bookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(61, 61, 61, 0.1)',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  bookImage: {
    width: 70,
    height: 90,
    borderRadius: 6,
  },
  bookInfo: {
    flex: 1,
    marginLeft: 10,
    // bottom: 10,
  },
  bookTitle: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
  bookParts: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    backgroundColor: 'rgba(29, 28, 28, 0.8)',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignSelf: 'flex-start',
    fontFamily: 'Roboto-Regular',
  },
  buttonText: {
    color: COLORS.greenText,
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsText: {
    color: 'rgba(98, 99, 109, 1)',
    fontSize: 13,
    marginLeft: 5,
    fontFamily: 'Roboto-Regular',
  },
});
