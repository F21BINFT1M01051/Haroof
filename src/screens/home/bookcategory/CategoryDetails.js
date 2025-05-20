import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../services/colors';
const {width} = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Category} from '../../../services/categories';

const books = [
  {
    id: 1,
    title: 'Pride and Prejudice',
    categoryId: 1,
    img: require('../../../assets/images/Home/book20.jpg'),
  },
  {
    id: 2,
    title: 'Crime and Punishment',
    categoryId: 1,
    img: require('../../../assets/images/Home/book21.jpg'),
  },
  {
    id: 3,
    title: 'The Republic',
    categoryId: 2,
    img: require('../../../assets/images/Home/book22.jpg'),
  },
  {
    id: 4,
    title: 'Meditations',
    categoryId: 2,
    img: require('../../../assets/images/Home/book23.jpg'),
  },
  {
    id: 5,
    title: 'A Brief History of Time',
    categoryId: 3,
    img: require('../../../assets/images/Home/book19.jpg'),
  },
  {
    id: 6,
    title: 'The Selfish Gene',
    categoryId: 3,
    img: require('../../../assets/images/Home/book18.jpg'),
  },
  {
    id: 7,
    title: 'The Bible',
    categoryId: 4,
    img: require('../../../assets/images/Home/book17.jpg'),
  },
  {
    id: 8,
    title: 'The Quran',
    categoryId: 4,
    img: require('../../../assets/images/Home/book16.jpg'),
  },
  {
    id: 9,
    title: 'Pride and Prejudice',
    categoryId: 5,
    img: require('../../../assets/images/Home/book15.jpg'),
  },
  {
    id: 10,
    title: 'Romeo and Juliet',
    categoryId: 5,
    img: require('../../../assets/images/Home/book14.jpg'),
  },
  {
    id: 11,
    title: 'Pride and Prejudice',
    categoryId: 6,
    img: require('../../../assets/images/Home/book20.jpg'),
  },
  {
    id: 12,
    title: 'Crime and Punishment',
    categoryId: 6,
    img: require('../../../assets/images/Home/book21.jpg'),
  },
  {
    id: 13,
    title: 'The Republic',
    categoryId: 7,
    img: require('../../../assets/images/Home/book22.jpg'),
  },
  {
    id: 14,
    title: 'Meditations',
    categoryId: 7,
    img: require('../../../assets/images/Home/book23.jpg'),
  },
  {
    id: 15,
    title: 'Pride and Prejudice',
    categoryId: 8,
    img: require('../../../assets/images/Home/book20.jpg'),
  },
  {
    id: 16,
    title: 'Crime and Punishment',
    categoryId: 8,
    img: require('../../../assets/images/Home/book21.jpg'),
  },
  {
    id: 17,
    title: 'The Republic',
    categoryId: 9,
    img: require('../../../assets/images/Home/book22.jpg'),
  },
  {
    id: 18,
    title: 'Meditations',
    categoryId: 9,
    img: require('../../../assets/images/Home/book23.jpg'),
  },
  {
    id: 19,
    title: 'Pride and Prejudice',
    categoryId: 10,
    img: require('../../../assets/images/Home/book20.jpg'),
  },
  {
    id: 20,
    title: 'Crime and Punishment',
    categoryId: 10,
    img: require('../../../assets/images/Home/book21.jpg'),
  },
  {
    id: 21,
    title: 'The Republic',
    categoryId: 11,
    img: require('../../../assets/images/Home/book22.jpg'),
  },
  {
    id: 22,
    title: 'Meditations',
    categoryId: 11,
    img: require('../../../assets/images/Home/book23.jpg'),
  },
];

const CategoryDetailScreen = ({route}) => {
  const {category} = route.params;
  const filteredBooks = Category.filter(
    book => book.categoryId === category.id,
  );
  const navigation = useNavigation();

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
              keyExtractor={item => item._id.oid}
              numColumns={2}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.bookCard}
                  onPress={() => navigation.navigate('BookInfo', {item})}>
                  <Image source={item.image} style={styles.bookImage} />
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
