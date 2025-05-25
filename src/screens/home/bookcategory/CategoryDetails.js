import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS} from '../../../services/colors';
const {width} = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Category} from '../../../services/categories';
import axios from 'axios';
import {BASE_URL} from '../../../services/baseUrls';

const CategoryDetailScreen = ({route}) => {
  const {category} = route.params;
    const [bookData, setbookData] = useState([]);
  

  useEffect(() => {
    books();
  }, []);

  const books = async data => {
    try {
      const response = await axios.get(`${BASE_URL}/v1/books/getallbooks`, {
        withCredentials: true,
      });
      // console.log('response...........', response);
      if (response.data.success) {
        console.log('data', response.data.books);
        setbookData(response.data.books);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log('Error in login', error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const filteredBooks = bookData.filter(
    book => book.category === category
  );
  const navigation = useNavigation();

  console.log(filteredBooks)

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: 0}}>
          <AntDesign name="arrowleft" color={'white'} size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>{category.name}</Text>
      </View>

      <View style={{alignSelf: 'center', marginTop: 30}}>
        {filteredBooks.length === 0 ? (
          <>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'Roboto-Medium',
                  marginTop: 100,
                }}>
                Books for this category will be added soon.....!
              </Text>
            </View>
          </>
        ) : (
          <>
            <FlatList
              data={filteredBooks}
              keyExtractor={item => item._id}
              numColumns={2}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.bookCard}
                  onPress={() => navigation.navigate('BookInfo', {item})}>
                  <Image source={{uri : item.coverImage}} style={styles.bookImage} />
                  <Text style={styles.bookTitle}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default CategoryDetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#14151C', paddingTop: 35},
  title: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
  bookCard: {
    marginHorizontal: 15,
    marginVertical:10
  },
  bookImage: {
    width: width * 0.35,
    height: 170,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: COLORS.greenText,
  },
  bookTitle: {
    fontSize: 12,
    color: 'white',
    marginTop: 8,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    backgroundColor: 'rgb(28, 27, 27)',
    paddingVertical: 3,
    borderRadius: 3,
  },
});
