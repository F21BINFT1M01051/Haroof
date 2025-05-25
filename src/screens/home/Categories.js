import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    name: 'Thriller',
    img: require('../../assets/images/Home/classic.jpg'),
  },
  {
    id: 2,
    name: 'Philosophy',
    img: require('../../assets/images/Home/philosphy.jpg'),
  },
  {
    id: 3,
    name: 'Horror',
    img: require('../../assets/images/Home/technology.jpg'),
  },
  {
    id: 4,
    name: 'Religious and Spiritual',
    img: require('../../assets/images/Home/religious.jpg'),
  },
  {
    id: 5,
    name: 'Romance',
    img: require('../../assets/images/Home/romance.jpg'),
  },
  {
    id: 6,
    name: 'Business and Economics',
    img: require('../../assets/images/Home/business.jpg'),
  },
  {
    id: 7,
    name: 'Plays and Dramas',
    img: require('../../assets/images/Home/drama.jpg'),
  },
  {
    id: 8,
    name: 'Fairy Tales',
    img: require('../../assets/images/Home/fairy.jpg'),
  },
  {id: 9, name: 'Horror', img: require('../../assets/images/Home/horror.jpg')},
  {
    id: 10,
    name: 'Science Fiction',
    img: require('../../assets/images/Home/science.jpg'),
  },
  {
    id: 11,
    name: 'Cultural Literature',
    img: require('../../assets/images/Home/cultural.jpg'),
  },
];



const Cateories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={{marginTop: 10}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom: 50}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() =>
                navigation.navigate('CategoryDetail', {category: item.name})
              }>
              <Image
                source={item.img}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.overlay}>
                <Text style={styles.categoryName}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Cateories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14151C',
    paddingTop: 20,
    // alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    marginVertical: 10,
    textAlign: 'center',
  },
  itemContainer: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: 5,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 10,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  categoryName: {
    color: 'rgb(255, 255, 255)',
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    zIndex:9999999
  },
});
