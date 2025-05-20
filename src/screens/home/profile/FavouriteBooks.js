import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../services/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const history = [
  {
    id: 1,
    date: '12/02/2024',
    books: [
      {
        id: 1,
        author: 'Jane Doe',
        cover: require('../../../assets/images/Home/book24.jpg'),
        name: 'Slayers',
        rating: '41.3k',
        read: 'The Last Chapter',
        part: '16',
        status: 'Continue',
      },
      {
        id: 2,
        author: 'Jane Doe',
        cover: require('../../../assets/images/Home/book19.jpg'),
        name: 'Blue Door',
        rating: '5M',
        read: 'The Last Chapter',
        part: '22',
        status: 'Rate',
      },
    ],
  },
  {
    id: 2,
    date: '02/05/2025',
    books: [
      {
        id: 3,
        author: 'Jane Doe',
        cover: require('../../../assets/images/Home/book21.jpg'),
        name: 'Philosophy',
        rating: '23k',
        read: 'The Last Chapter',
        part: '30',
        status: 'Continue',
      },
      {
        id: 4,
        author: 'Jane Doe',
        cover: require('../../../assets/images/Home/book22.jpg'),
        name: 'Shear Gifts',
        rating: '5k',
        read: 'The Last Chapter',
        part: '8',
        status: 'Continue',
      },
    ],
  },
  {
    id: 3,
    date: '15/08/2026',
    books: [
      {
        id: 1,
        author: 'Jane Doe',
        cover: require('../../../assets/images/Home/book24.jpg'),
        name: 'Slayers',
        rating: '41.3k',
        read: 'The Last Chapter',
        part: '16',
        status: 'Rate',
      },
      {
        id: 2,
        author: 'Jane Doe',
        cover: require('../../../assets/images/Home/book19.jpg'),
        name: 'Blue Door',
        rating: '5M',
        read: 'The Last Chapter',
        part: '22',
        status: 'Continue',
      },
      {
        id: 3,
        author: 'Jane Doe',
        cover: require('../../../assets/images/Home/book21.jpg'),
        name: 'Philosophy',
        rating: '23k',
        read: 'The Last Chapter',
        part: '30',
        status: 'Rate',
      },
      {
        id: 4,
        author: 'Jane Doe',
        cover: require('../../../assets/images/Home/book22.jpg'),
        name: 'Shear Gifts',
        rating: '5k',
        read: 'The Last Chapter',
        part: '8',
        status: 'Rate',
      },
    ],
  },
];

const FavouriteBooks = () => {
  const [Id, setId] = useState(null);
  const navigation = useNavigation()


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: 0}}>
          <AntDesign name="arrowleft" color={'white'} size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Favourite Books</Text>
      </View>
      <FlatList
        data={history}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{item.date}</Text>
            {item.books.map(book => (
              <TouchableOpacity key={book.id} style={styles.bookContainer}>
                <Image
                  source={book.cover}
                  resizeMode="cover"
                  style={styles.bookImage}
                  borderRadius={6}
                />
                <View style={styles.bookInfo}>
                  <Text style={styles.bookTitle}>{book.name}</Text>
                  <Text style={styles.bookParts}>{book.part} parts</Text>
                  <Text style={styles.bookAuthor}>{book.author}</Text>
                </View>
                <TouchableOpacity
                  style={{position: 'absolute', right: 10, top: 36}}>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    color={'rgba(98, 99, 109, 1)'}
                    size={26}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 10,
                    bottom: 10,
                  }}>
                  <Text
                    style={{
                      color: COLORS.greenText,
                      fontSize: 12,
                      fontFamily: 'Roboto-Medium',
                    }}>
                    Remove
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        )}
        contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 40, paddingTop:20}}
      />
    </View>
  );
};

export default FavouriteBooks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14151C',
    paddingTop: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent:'center',
    width:'90%',
    alignSelf:'center'
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Roboto-Medium',
    color: COLORS.heading,
    marginLeft: 10,

  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginBottom: 10,
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
    fontFamily: 'Roboto-Bold',
  },
  bookParts: {
    color: 'white',
    fontSize: 12,
    backgroundColor: 'rgba(29, 28, 28, 0.8)',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginTop: 5,
    fontFamily: 'Roboto-Regular',
    // alignSelf: 'flex-start',
  },
  bookAuthor: {
    color: 'rgba(98, 99, 109, 1)',
    fontSize: 13,
    marginTop: 5,
    fontFamily: 'Roboto-Regular',
  },
});
